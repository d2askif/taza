from flask import Flask
from flask import request
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/taza"
mongo = PyMongo(app)

try:
    mongo.cx.server_info()
    print("Connected to MongoDB successfully!")
except Exception as e:
    print("Failed to connect to MongoDB:", str(e))
    exit()


@app.route("/")
def index():
    print("here")

    return "index"


@app.route("/login", methods=["POST", "GET"])
def login():
    print("here")
    if request.method == "POST":
        return "Hello, World"

    return "<p>Hello, World!</p>"


if __name__ == "__main__":
    app.run(debug=True)
