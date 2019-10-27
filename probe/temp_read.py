import sys
import Adafruit_DHT
import time
import requests
import json

while True:
    humidity, temperature = Adafruit_DHT.read_retry(11, 4)
    data = {'humidity':humidity,'temperature':temperature}
    freedomTemp = (temperature * 9/5) + 32;
    json_data = json.dumps(data)
    # r = requests.post('http://192.168.0.8:1880/payload',json_data)
    print(humidity,freedomTemp)
    print('Temp: {0:0.1f} C  Humidity: {1:0.1f} '.format(freedomTemp, humidity))
    time.sleep(2)

