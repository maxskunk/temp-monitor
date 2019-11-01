import sys
import Adafruit_DHT
import time
import urllib.request
import json

with open('/home/pi/Temp/config.json') as json_file:
    data = json.load(json_file)
    url = data['url']
    source_id = data['source_id']
    delay = data['seconds_between_send']
    key = data['key']

    while True:
        humidity, temperature = Adafruit_DHT.read_retry(22, 4)

        data = {'humidity': round(humidity, 1), 'temp': round(temperature, 1),
                'source_id': source_id, 'key': key}
        print('SENDING LOG: Temp: {0:0.1f} C  Humidity: {1:0.1f} '.format(
            temperature, humidity))

        json_data = json.dumps(data)

        try:
            x = urllib.request.urlopen(
                url+'/templog', bytes(
                    urllib.parse.urlencode(data), encoding="utf-8"))
        except Exception as e:
            print("ERROR: " + str(e))

        time.sleep(delay)
