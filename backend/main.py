import sqlite3
import os
from datetime import datetime
from typing import Optional
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Initialize FastAPI App
app = FastAPI(
    title="Portfolio Contact API",
    description="Backend API for Sumit Parmar's Portfolio Contact Form",
    version="1.0.0"
)

# Enable CORS for frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows requests from React frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# SQLite Database setup
DB_PATH = os.path.join(os.path.dirname(__file__), "contact_messages.db")

def init_db():
    """Create messages table if it doesn't exist."""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS contact_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at TEXT NOT NULL
        )
    """)
    conn.commit()
    conn.close()

# Initialize DB on startup
init_db()

# Pydantic Schemas
class ContactRequest(BaseModel):
    name: str
    email: str
    message: str

class ContactResponse(BaseModel):
    status: str
    message: str
    id: Optional[int] = None

# Routes
@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "Portfolio Contact API",
        "endpoints": {
            "submit_contact": "POST /api/contact",
            "view_messages": "GET /api/messages"
        }
    }

@app.post("/api/contact", response_model=ContactResponse, status_code=status.HTTP_201_CREATED)
def submit_contact(contact: ContactRequest):
    """Receive contact form submission from user and store it in database."""
    name = contact.name.strip()
    email = contact.email.strip()
    message = contact.message.strip()

    if not name or not email or not message:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Name, email, and message fields are required."
        )

    created_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO contact_messages (name, email, message, created_at) VALUES (?, ?, ?, ?)",
            (name, email, message, created_at)
        )
        conn.commit()
        inserted_id = cursor.lastrowid
        conn.close()

        print(f" NEW MESSAGE RECEIVED from {name} ({email}): {message}")

        return ContactResponse(
            status="success",
            message="Thank you for contacting me! Your message has been received.",
            id=inserted_id
        )
    except Exception as e:
        print(f"Error saving message: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Internal server error while saving message."
        )

@app.get("/api/messages")
def get_messages():
    """Retrieve all submitted messages (Admin route)."""
    try:
        conn = sqlite3.connect(DB_PATH)
        conn.row_factory = sqlite3.Row
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM contact_messages ORDER BY id DESC")
        rows = cursor.fetchall()
        conn.close()

        messages = [dict(row) for row in rows]
        return {
            "total_messages": len(messages),
            "messages": messages
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=str(e)
        )

@app.delete("/api/messages/{message_id}")
def delete_message(message_id: int):
    """Delete a message by ID."""
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("DELETE FROM contact_messages WHERE id = ?", (message_id,))
        rows_affected = cursor.rowcount
        conn.commit()
        conn.close()

        if rows_affected == 0:
            raise HTTPException(status_code=404, detail="Message not found")

        return {"status": "success", "message": f"Message {message_id} deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
