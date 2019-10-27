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
    # print(data['url'])

    while True:
        humidity, temperature = Adafruit_DHT.read_retry(11, 4)
        # humidity = 69
        # temperature = 20
        data = {'humidity': humidity, 'temp': temperature,
                'source_id': source_id, 'key': key}
        print('SENDING LOG: Temp: {0:0.1f} C  Humidity: {1:0.1f} '.format(
            temperature, humidity))
        # freedomTemp = (temperature * 9/5) + 32
        json_data = json.dumps(data)

        try:
            x = urllib.request.urlopen(
                url+'/templog', bytes(
                    urllib.parse.urlencode(data), encoding="utf-8"))
        except Exception as e:
            print("ERROR: " + str(e))

        time.sleep(delay)
