from flask import Flask
import json
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/find_rest/<rest_name>')
def findRest(rest_name):
    files = os.listdir('./Restaurants/'+rest_name)
    with open('./Restaurants/'+rest_name+'/'+files[-1]) as json_file:
        data = json.load(json_file)

    response = app.response_class(
        response=json.dumps(data),
        mimetype='application/json'
    )
    return response
