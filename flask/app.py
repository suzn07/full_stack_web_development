from flask import Flask, jsonify

app = Flask(__name__, static_url_path='/public', static_folder='public')

@app.get("/")
def index():
    return "Welcome to Flask REST API!"

@app.get("/api/v1/cat")
def get_cat():
    cat = [{
        "cat_id": "1",
        "name": "angery_cat",
        "birthdate": "2025-10-18",
        "weight": 8,
        "owner": "suzn",
        "image": "/public/cat.jpg"
    }]
    return jsonify(cat)


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=3000, debug=True)