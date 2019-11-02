import { Component } from '@angular/core';
import { TempLogService } from './service/temp-log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: any;
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
    return (num * 9 / 5) + 32
  }

  private dayArray: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


  ngOnInit() {

    this.tempServ.getTemps().subscribe((res: any) => {
      const garageData = res['history'][1]['garage'];//claustial1
      const garageLabels = garageData.map((row: any) => {
        const currentDate = new Date(row.time_logged)
        return this.dayArray[currentDate.getDay()] + ' ' + this.formatAMPM(currentDate);
      });
      const garageTempValues = garageData.map((row: any) => {
        return this.convertToF(row.temp);
      });
      const garageHumidtyValues = garageData.map((row: any) => {
        return row.humidity;
      });
      const labels = this.res;
      this.data = {
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
      };
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