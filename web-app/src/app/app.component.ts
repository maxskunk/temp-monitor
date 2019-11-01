import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: any;
  options: any;

  importData = {
    "history": [
      {
        "claustial1": [
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-27T21:44:23",
            "temp": 21,
            "humidity": 24
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-27T21:59:23",
            "temp": 22,
            "humidity": 25
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-27T22:14:24",
            "temp": 22,
            "humidity": 25
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-27T22:29:25",
            "temp": 22,
            "humidity": 24
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-27T22:44:25",
            "temp": 22,
            "humidity": 24
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-27T22:59:26",
            "temp": 22,
            "humidity": 24
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-27T23:14:27",
            "temp": 22,
            "humidity": 24
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-27T23:29:27",
            "temp": 22,
            "humidity": 23
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-27T23:44:28",
            "temp": 22,
            "humidity": 23
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-27T23:59:29",
            "temp": 22,
            "humidity": 23
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T00:14:29",
            "temp": 22,
            "humidity": 23
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T00:29:30",
            "temp": 22,
            "humidity": 22
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T00:44:30",
            "temp": 22,
            "humidity": 22
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T00:59:31",
            "temp": 22,
            "humidity": 23
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T01:14:32",
            "temp": 22,
            "humidity": 22
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T01:29:32",
            "temp": 22,
            "humidity": 22
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T01:44:33",
            "temp": 22,
            "humidity": 20
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T01:59:34",
            "temp": 22,
            "humidity": 22
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T02:14:34",
            "temp": 22,
            "humidity": 22
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T02:29:40",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T02:44:41",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T02:59:44",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T03:14:44",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T03:29:45",
            "temp": 22,
            "humidity": 20
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T03:44:48",
            "temp": 22,
            "humidity": 22
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T03:59:49",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T04:14:49",
            "temp": 22,
            "humidity": 22
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T04:29:50",
            "temp": 22,
            "humidity": 19
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T04:44:51",
            "temp": 11,
            "humidity": 138
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T04:59:51",
            "temp": 22,
            "humidity": 22
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T05:14:55",
            "temp": 22,
            "humidity": 22
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T05:29:55",
            "temp": 22,
            "humidity": 22
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T05:44:56",
            "temp": 22,
            "humidity": 19
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T05:59:56",
            "temp": 22,
            "humidity": 20
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T06:14:57",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T06:29:58",
            "temp": 22,
            "humidity": 19
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T06:44:58",
            "temp": 22,
            "humidity": 20
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T06:59:59",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T07:15:00",
            "temp": 22,
            "humidity": 22
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T07:30:00",
            "temp": 22,
            "humidity": 19
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T07:45:01",
            "temp": 22,
            "humidity": 18
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T08:00:01",
            "temp": 22,
            "humidity": 19
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T08:15:02",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T08:30:03",
            "temp": 22,
            "humidity": 20
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T08:45:03",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T09:00:04",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T09:15:05",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T09:30:05",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T09:45:06",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T10:00:07",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T10:15:07",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T10:30:08",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T10:45:08",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T11:00:09",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T11:15:10",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T11:30:10",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T11:45:11",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T12:00:11",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T12:15:12",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T12:30:13",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T12:45:13",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T13:00:14",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T13:15:15",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T13:30:15",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T13:45:18",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T14:00:19",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T14:15:20",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T14:30:20",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T14:45:21",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T15:00:22",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T15:15:22",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T15:30:23",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T15:45:23",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T16:00:24",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T16:15:25",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T16:30:25",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T16:45:26",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T17:00:27",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T17:15:27",
            "temp": 22,
            "humidity": 18
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T17:30:28",
            "temp": 22,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T17:45:28",
            "temp": 22,
            "humidity": 18
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T18:00:29",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T18:15:30",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T18:30:30",
            "temp": 22,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T18:45:31",
            "temp": 23,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T19:00:34",
            "temp": 23,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T19:15:35",
            "temp": 23,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T19:30:35",
            "temp": 23,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T19:45:36",
            "temp": 23,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T20:00:37",
            "temp": 23,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T20:15:37",
            "temp": 23,
            "humidity": 22
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T20:30:38",
            "temp": 23,
            "humidity": 22
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T20:45:39",
            "temp": 23,
            "humidity": 22
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T21:00:39",
            "temp": 23,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T21:15:41",
            "temp": 23,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T21:30:42",
            "temp": 23,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T21:45:43",
            "temp": 23,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T22:00:43",
            "temp": 23,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T22:15:44",
            "temp": 23,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T22:30:45",
            "temp": 23,
            "humidity": 20
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T22:45:45",
            "temp": 23,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T23:00:46",
            "temp": 23,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T23:15:47",
            "temp": 23,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T23:30:47",
            "temp": 23,
            "humidity": 21
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-28T23:45:48",
            "temp": 23,
            "humidity": 20
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T00:00:49",
            "temp": 23,
            "humidity": 20
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T00:15:49",
            "temp": 23,
            "humidity": 20
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T00:30:50",
            "temp": 23,
            "humidity": 20
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T00:45:50",
            "temp": 23,
            "humidity": 20
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T01:00:51",
            "temp": 23,
            "humidity": 19
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T01:15:52",
            "temp": 23,
            "humidity": 19
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T01:30:52",
            "temp": 23,
            "humidity": 19
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T01:45:53",
            "temp": 23,
            "humidity": 19
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T02:00:54",
            "temp": 23,
            "humidity": 19
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T02:15:57",
            "temp": 23,
            "humidity": 19
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T02:30:57",
            "temp": 23,
            "humidity": 19
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T02:45:58",
            "temp": 23,
            "humidity": 19
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T03:00:59",
            "temp": 22,
            "humidity": 19
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T03:15:59",
            "temp": 22,
            "humidity": 19
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T03:31:00",
            "temp": 22,
            "humidity": 19
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T03:46:00",
            "temp": 22,
            "humidity": 18
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T04:01:01",
            "temp": 22,
            "humidity": 18
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T04:16:02",
            "temp": 22,
            "humidity": 18
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T04:31:02",
            "temp": 22,
            "humidity": 18
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T04:46:03",
            "temp": 22,
            "humidity": 18
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T05:01:04",
            "temp": 22,
            "humidity": 18
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T05:16:07",
            "temp": 22,
            "humidity": 18
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T05:31:08",
            "temp": 22,
            "humidity": 18
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T05:46:08",
            "temp": 22,
            "humidity": 18
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T06:01:09",
            "temp": 22,
            "humidity": 18
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T06:16:09",
            "temp": 22,
            "humidity": 18
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T06:31:13",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T06:46:13",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T07:01:14",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T07:16:15",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T07:31:15",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T07:46:16",
            "temp": 21,
            "humidity": 18
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T08:01:16",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T08:16:17",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T08:31:18",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T08:46:18",
            "temp": 21,
            "humidity": 19
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T09:01:19",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T09:16:20",
            "temp": 21,
            "humidity": 15
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T09:31:23",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T09:46:24",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T10:01:24",
            "temp": 21,
            "humidity": 14
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T10:16:25",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T10:31:25",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T10:46:26",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T11:01:27",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T11:16:27",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T11:31:28",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T11:46:29",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T12:01:29",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T12:16:30",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T12:31:30",
            "temp": 21,
            "humidity": 17
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T12:46:31",
            "temp": 21,
            "humidity": 12
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T13:01:32",
            "temp": 21,
            "humidity": 12
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T13:16:33",
            "temp": 21,
            "humidity": 12
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T13:31:33",
            "temp": 22,
            "humidity": 13
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T13:46:34",
            "temp": 22,
            "humidity": 14
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T14:01:34",
            "temp": 22,
            "humidity": 13
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T14:16:35",
            "temp": 22,
            "humidity": 14
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T14:31:36",
            "temp": 22,
            "humidity": 15
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T14:46:36",
            "temp": 23,
            "humidity": 20
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T15:01:37",
            "temp": 23,
            "humidity": 15
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T15:16:38",
            "temp": 23,
            "humidity": 14
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T15:31:38",
            "temp": 23,
            "humidity": 13
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T15:46:39",
            "temp": 23,
            "humidity": 14
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T16:01:39",
            "temp": 23,
            "humidity": 13
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T16:16:40",
            "temp": 23,
            "humidity": 12
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T16:31:41",
            "temp": 23,
            "humidity": 12
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T16:46:41",
            "temp": 23,
            "humidity": 12
          },
          {
            "source_id": "claustial1",
            "time_logged": "2019-10-29T17:01:42",
            "temp": 23,
            "humidity": 13
          }
        ]
      },
      {
        "garage": [
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T15:10:18",
            "temp": 12,
            "humidity": 33
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T15:15:18",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T15:20:22",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T15:25:22",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T15:30:23",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T15:35:24",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T15:40:24",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T15:45:25",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T15:50:26",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T15:55:27",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T16:00:27",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T16:05:28",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T16:10:29",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T16:15:29",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T16:20:30",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T16:25:31",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T16:30:32",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T16:35:33",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T16:40:34",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T16:45:35",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T16:50:35",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T16:55:39",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T17:00:39",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T17:05:43",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T17:10:43",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T17:15:44",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T17:20:45",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T17:25:45",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T17:30:46",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T17:35:47",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T17:40:48",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T17:45:48",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T17:50:49",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T17:55:50",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T18:00:50",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T18:05:51",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T18:10:52",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T18:15:53",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T18:20:53",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T18:25:54",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T18:30:55",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T18:35:55",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T18:40:56",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T18:45:57",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T18:50:58",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T18:55:58",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T19:00:59",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T19:06:00",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T19:11:00",
            "temp": 13,
            "humidity": 29
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T19:16:01",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T19:21:02",
            "temp": 13,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T19:24:11",
            "temp": 13,
            "humidity": 42
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T19:28:22",
            "temp": 17,
            "humidity": 32
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T19:47:35",
            "temp": 21,
            "humidity": 24
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T20:02:35",
            "temp": 21,
            "humidity": 24
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T20:41:57",
            "temp": 11,
            "humidity": 31
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T20:56:57",
            "temp": 12,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T21:12:00",
            "temp": 12,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T21:27:00",
            "temp": 13,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T21:42:01",
            "temp": 12,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T21:57:02",
            "temp": 12,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T22:12:03",
            "temp": 12,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T22:27:04",
            "temp": 12,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T22:42:05",
            "temp": 12,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T22:57:06",
            "temp": 12,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T23:12:06",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T23:27:07",
            "temp": 13,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T23:42:08",
            "temp": 6,
            "humidity": 141
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-27T23:57:09",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T00:12:09",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T00:27:10",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T00:42:11",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T00:57:11",
            "temp": 12,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T01:12:12",
            "temp": 12,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T01:27:13",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T01:42:14",
            "temp": 12,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T01:57:14",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T02:12:15",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T02:27:16",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T02:42:16",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T02:57:17",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T03:12:18",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T03:27:19",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T03:42:19",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T03:57:20",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T04:12:21",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T04:27:24",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T04:42:25",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T04:57:25",
            "temp": 6,
            "humidity": 141
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T05:12:26",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T05:27:27",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T05:42:27",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T05:57:28",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T06:12:29",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T06:27:30",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T06:42:30",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T06:57:31",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T07:12:32",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T07:27:33",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T07:42:33",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T07:57:34",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T08:12:35",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T08:27:35",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T08:42:36",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T08:57:37",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T09:12:38",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T09:42:42",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T09:57:43",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T10:12:44",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T10:27:47",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T10:42:48",
            "temp": 12,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T10:57:49",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T11:12:49",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T11:27:53",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T11:42:53",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T11:57:54",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T12:12:55",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T12:27:55",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T12:42:56",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T12:57:57",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T13:12:58",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T13:27:58",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T13:42:59",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T13:58:00",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T14:13:01",
            "temp": 12,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T14:28:01",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T14:43:02",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T14:58:03",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T15:13:04",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T15:28:04",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T15:43:05",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T15:58:06",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T16:13:06",
            "temp": 12,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T16:28:07",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T16:43:08",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T16:58:08",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T17:13:09",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T17:28:10",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T17:43:11",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T17:58:11",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T18:13:12",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T18:28:13",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T18:43:13",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T18:58:14",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T19:13:15",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T19:28:15",
            "temp": 12,
            "humidity": 28
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T19:43:16",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T19:58:17",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T20:13:17",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T20:28:18",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T20:43:19",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T20:58:19",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T21:13:22",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T21:28:22",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T21:43:23",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T21:58:24",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T22:13:24",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T22:28:25",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T22:43:26",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T22:58:26",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T23:13:27",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T23:28:28",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T23:43:29",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-28T23:58:29",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T00:13:30",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T00:28:31",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T00:43:31",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T00:58:32",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T01:13:33",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T01:28:33",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T01:43:34",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T01:58:35",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T02:13:36",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T02:28:36",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T02:43:37",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T02:58:38",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T03:13:39",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T03:28:39",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T03:43:40",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T03:58:43",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T04:13:44",
            "temp": 11,
            "humidity": 27
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T04:28:45",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T04:43:45",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T04:58:46",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T05:13:47",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T05:28:48",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T05:43:48",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T05:58:49",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T06:13:50",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T06:28:51",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T06:43:54",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T06:58:55",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T07:13:58",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T07:28:59",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T07:43:59",
            "temp": 11,
            "humidity": 26
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T07:59:00",
            "temp": 11,
            "humidity": 25
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T08:14:03",
            "temp": 11,
            "humidity": 25
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T08:29:04",
            "temp": 11,
            "humidity": 25
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T08:44:05",
            "temp": 11,
            "humidity": 24
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T08:59:06",
            "temp": 11,
            "humidity": 24
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T09:14:06",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T09:29:07",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T09:44:08",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T09:59:09",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T10:14:10",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T10:29:10",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T10:44:14",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T10:59:14",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T11:14:15",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T11:29:18",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T11:44:21",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T11:59:22",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T12:14:23",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T12:29:27",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T12:44:28",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T12:59:28",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T13:14:29",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T13:29:30",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T13:44:31",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T13:59:31",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T14:14:32",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T14:29:33",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T14:44:36",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T14:59:37",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T15:14:38",
            "temp": 10,
            "humidity": 23
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T15:29:38",
            "temp": 10,
            "humidity": 22
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T15:44:40",
            "temp": 10,
            "humidity": 22
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T15:59:42",
            "temp": 10,
            "humidity": 22
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T16:14:42",
            "temp": 10,
            "humidity": 22
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T16:29:43",
            "temp": 10,
            "humidity": 22
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T16:44:44",
            "temp": 10,
            "humidity": 22
          },
          {
            "source_id": "garage",
            "time_logged": "2019-10-29T16:59:44",
            "temp": 10,
            "humidity": 22
          }
        ]
      }
    ]
  }
  constructor() {

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
    const garageData = this.importData['history'][0]['claustial1'];
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
    const labels = this.importData;
    this.data = {
      labels: garageLabels,
      datasets: [
        {
          label: 'Temp',
          data: garageTempValues,
          fill: false,
          borderColor: '#FF0000',

          // backgroundColor: [
          //   "#FF6384",
          //   "#36A2EB",
          //   "#FFCE56"
          // ],
          // hoverBackgroundColor: [
          //   "#FF6384",
          //   "#36A2EB",
          //   "#FFCE56"
          // ]
        }, {
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

  }
}