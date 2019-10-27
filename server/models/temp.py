from db import db
from datetime import datetime
import uuid


class TempLogModel(db.Model):
    __tablename__ = 'templogs'

    # go_id = db.Column(db.String(80), primary_key=True)
    uid = db.Column(db.String(80), primary_key=True)
    time_logged = db.Column(
        db.DateTime, default=datetime.utcnow)
    temp = db.Column(db.Integer)
    humidity = db.Column(db.Integer)
    source_id = db.Column(db.String)

    def __init__(self, temp, humidity, key, source_id):
        self.uid = str(uuid.uuid4())
        self.time_logged = datetime.now()
        self.temp = temp
        self.humidity = humidity
        self.source_id = source_id

    def save_to_db(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def find_by_email(cls, email):
        return cls.query.filter_by(email=email).first()

    @classmethod
    def find_by_go_id(cls, _id):
        return cls.query.filter_by(go_id=_id).first()

    @classmethod
    def user_registered(cls, _id):
        if cls.query.filter_by(go_id=_id).first():
            return True
        else:
            return False
