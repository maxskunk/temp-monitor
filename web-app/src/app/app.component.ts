import { Component } from '@angular/core';
import { TempLogService } from './service/temp-log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: any[] = [];
  options: any;

  constructor(private tempServ: TempLogService) {

  }

  private formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  private convertToF(num: number) {
    return Number((num * 9 / 5) + 32).toPrecision(3);
  }

  private dayArray: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


  ngOnInit() {

    this.tempServ.getTemps().subscribe((res: any) => {

      const garageData = res['history'][0]['claustial1'];

      res['history'].forEach(element => {
        var property = Object.keys(element)[0];
        const garageData = element[property];
        const garageLabels = garageData.map((row: any) => {
          const currentDate = new Date(row.time_logged)
          return this.dayArray[currentDate.getDay()] + ' ' + this.formatAMPM(currentDate);
        });
        let mininumTemp = garageData[0].temp;
        let maximumTemp = garageData[0].temp;
        const garageTempValues = garageData.map((row: any) => {
          if (row.temp > maximumTemp) {
            maximumTemp = row.temp;
          } else if (row.temp < mininumTemp) {
            mininumTemp = row.temp;
          }
          return this.convertToF(row.temp);
        });
        const garageHumidtyValues = garageData.map((row: any) => {
          return row.humidity;
        });

        const lastTemp = this.convertToF(garageData.pop().temp);
        const lastHum = garageData.pop().humidity;
        console.log("TEMP: " + lastTemp);
        // const labels = this.res;
        this.data.push({
          'label': property,
          'lastTemp': lastTemp,
          'lastHum': lastHum,
          'minTemp': this.convertToF(mininumTemp),
          'maxTemp': this.convertToF(maximumTemp),
          'chartData': {
            labels: garageLabels,
            datasets: [
              {
                label: 'Temp',
                data: garageTempValues,
                fill: false,
                borderColor: '#FF0000',
              },
              {
                label: 'Humidity',
                data: garageHumidtyValues,
                fill: false,
                borderColor: "#00FF00"
              }]
          }
        });

      });

      this.options = {
        onAnimationComplete: function () {
          this.showTooltip(this.segments, true);
        },

        tooltipEvents: [],
        tooltips: {
          intersect: false,
        },
        showTooltips: false,
        title: {
          display: true,
          text: 'My Title',
          fontSize: 16
        },
        legend: {
          position: 'bottom'
        }
      }

    });


  }
}