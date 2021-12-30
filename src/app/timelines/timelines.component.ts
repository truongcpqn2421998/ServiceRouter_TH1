import {Component, OnInit} from '@angular/core';
import {DateUtilService} from '../service/date-util.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {

  output = '';

  constructor(
    private dateUntilService: DateUtilService
  ) {
  }

  ngOnInit() {
  }
  onChange(value) {
    this.output = this.dateUntilService.getDiffToNow(value);
  }

}
