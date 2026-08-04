import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(__file__), "contact_messages.db")

def view_messages():
    if not os.path.exists(DB_PATH):
        print("No messages database found yet. Submit a message through the contact form first!")
        return

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM contact_messages ORDER BY id DESC")
    rows = cursor.fetchall()
    conn.close()

    if not rows:
        print("No contact messages found in database.")
        return

    print("=" * 60)
    print(f" SUBMITTED CONTACT MESSAGES ({len(rows)} Total)")
    print("=" * 60)

    for row in rows:
        print(f"ID        : {row['id']}")
        print(f"Date/Time : {row['created_at']}")
        print(f"Name      : {row['name']}")
        print(f"Email     : {row['email']}")
        print(f"Message   : {row['message']}")
        print("-" * 60)

if __name__ == "__main__":
    view_messages()
