from flask import Flask, request, jsonify
import sqlite3
import datetime
import uuid

app = Flask(__name__, static_folder='.', static_url_path='')
CART = []

def init_db():
    conn = sqlite3.connect("orders.db")
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS orders (
            id TEXT PRIMARY KEY,
            name TEXT,
            address TEXT,
            payment TEXT,
            shipping TEXT,
            items TEXT,
            total INTEGER,
            status TEXT,
            time TEXT
        )
    ''')
    conn.commit()
    conn.close()

@app.route('/api/cart', methods=['POST', 'GET'])
def cart():
    global CART
    if request.method == 'POST':
        data = request.get_json()
        CART.append({
            "id": data["id"],
            "name": data["name"],
            "price": data["price"],
            "quantity": data.get("quantity", 1)
        })
        return jsonify({"message": "商品已加入購物車"})
    return jsonify(CART)

@app.route('/api/checkout', methods=['POST'])
def checkout():
    data = request.get_json()
    name = data.get("name")
    address = data.get("address")
    payment = data.get("payment")
    shipping = data.get("shipping")
    items = data.get("items", [])
    total = sum(item["price"] * item["quantity"] for item in items)
    order_id = str(uuid.uuid4())[:8]
    time = datetime.datetime.now().isoformat()

    conn = sqlite3.connect("orders.db")
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO orders (id, name, address, payment, shipping, items, total, status, time)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', (order_id, name, address, payment, shipping, str(items), total, "處理中", time))
    conn.commit()
    conn.close()

    global CART
    CART = []
    return jsonify({"order_id": order_id, "status": "處理中"})

@app.route('/api/order/<order_id>', methods=['GET'])
def get_order(order_id):
    conn = sqlite3.connect("orders.db")
    cursor = conn.cursor()
    cursor.execute('SELECT id, status FROM orders WHERE id = ?', (order_id,))
    row = cursor.fetchone()
    conn.close()

    if row:
        return jsonify({"order_id": row[0], "status": row[1]})
    else:
        return jsonify({"error": "訂單不存在"}), 404

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
