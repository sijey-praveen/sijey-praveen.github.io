from flask import Flask
Flask(__name__, static_folder="/").run("0.0.0.0", 5000)