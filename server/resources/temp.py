from flask_restful import Resource, reqparse
from models.temp import TempLogModel
from models.auth import AuthModel
from sqlalchemy import exc
import functools
from flask import request


def authorized(func):
    @functools.wraps(func)
    def function_that_runs_func(*args, **kwargs):
        key = request.headers.get('Authorization')
        host = request.headers.get('Host')
        if not AuthModel.verify_host(host):
            return {'message': 'Host Invalid: {}'.format(host)}, 401
        if not AuthModel.verify_key(key):
            return {'message': 'Key Invalid {}'}, 401

        result = func(*args, **kwargs)

        return result
    return function_that_runs_func


class TempEntry(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument('temp',
                        type=float,
                        required=True,
                        help="Temp is needed"
                        )
    parser.add_argument('humidity',
                        type=float,
                        required=True,
                        help="No Humidity provided"
                        )
    parser.add_argument('source_id',
                        type=str,
                        required=True,
                        help="Please provide a Source Id"
                        )
    parser.add_argument('key',
                        type=str,
                        required=True,
                        help="Needs a Key"
                        )

    @authorized
    def post(self):
        data = TempEntry.parser.parse_args()
        print('Adding Temp')
        user = TempLogModel(data['temp'], data['humidity'],
                            data['key'], data['source_id'])
        user.save_to_db()
        print("Logged Data from "+data['source_id']+": " +
              str(data['temp'])+"c "+str(data['humidity'])+"%")
        return {"message": "Temp Added Successfully."}, 201

    def get(self):
        return {'history': TempLogModel.find_all()}
