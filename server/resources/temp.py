from flask_restful import Resource, reqparse
from models.temp import TempLogModel
from sqlalchemy import exc
import functools

# http://flask.pocoo.org/snippets/125/


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

    def post(self):
        data = TempEntry.parser.parse_args()

        # if UserModel.find_by_go_id(data['go_id']):
        #     return {"message": "It Looks Like This User has Already Been Registered"}, 400

        print('Adding Temp')

        # toybox = ToyboxModel(data['go_id'], 'new_toybox')
        user = TempLogModel(data['temp'], data['humidity'],
                            data['key'], data['source_id'])
        user.save_to_db()
        print("Logged Data from "+data['source_id']+": "+str(data['temp'])+"c "+str(data['humidity'])+"%")
        # try:
        #     toybox.save_to_db()
        # except exc.SQLAlchemyError as e:
        #     print('Rangers{0}'.format(e))
        #     return {"message": "An error occurred creating the toybox."}, 500

        return {"message": "Temp Added Successfully."}, 201

    def get(self):
        # return {'history': [x.json() for x in TempLogModel.find_all()]}
        return {'history': TempLogModel.find_all()}
        # row = TempLogModel.find_by_source_id("ant2")
        # if row:
        #     return row.json()
        # return {'message': 'Row not found'}, 404
