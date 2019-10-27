from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from resources.temp import TempEntry
from db import db


app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://ponyexpress_dev:<pass>@mysql.zokyamedia.com/ponyexpress_dev'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['PROPAGATE_EXCEPTIONS'] = True

api = Api(app)
migrate = Migrate(app, db)


@app.before_first_request
def create_tables():
    db.create_all()


# api.add_resource(Toybox, '/toybox/<string:name>')
api.add_resource(TempEntry, '/templog')
# api.add_resource(AvailableBadge, '/available_badge')
# api.add_resource(AvailableBadgeList, '/available_badges')

# Badges
# api.add_resource(BadgeInstanceList, '/sash')
# api.add_resource(BadgeInstance, '/badge')


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers',
                         'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response


if __name__ == '__main__':
    from db import db

    db.init_app(app)
    # app.run(port=5000, debug=True)

    app.run(port=3099, debug=False, host='0.0.0.0')
