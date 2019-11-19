from db import db


class AuthModel(db.Model):
    __tablename__ = 'auth'

    # go_id = db.Column(db.String(80), primary_key=True)
    key = db.Column(db.String(80), primary_key=True)
    host = db.Column(db.String(80))

    def __init__(self, key, host):
        self.key = key
        self.host = host

    @classmethod
    def verify_host(cls, host):
        return cls.query.filter_by(host=host).first() is not None

    @classmethod
    def verify_key(cls, key):
        return cls.query.filter_by(key=key).first() is not None
