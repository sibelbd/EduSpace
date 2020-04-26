from Backend.python_server.DB_Connection import DB_Connection
# from Backend.python_server import DB_Functions
import logging
from flask import Flask, render_template

# Connection to MongoDB
conn = DB_Connection().client

# ability to call functions from DB_Functions

app = Flask(__name__)

@app.route('/')
def login():
    """Return a friendly HTTP greeting."""
    return render_template('Frontend/public/index.html')


@app.errorhandler(500)
def server_error(e):
    logging.exception('An error occurred during a request.')
    return """
    An internal error occurred: <pre>{}</pre>
    See logs for full stacktrace.
    """.format(e), 500


if __name__ == '__main__':
    # This is used when running locally. Gunicorn is used to run the
    # application on Google App Engine. See entrypoint in app.yaml.
    app.run(host='127.0.0.1', port=8080,debug=True)