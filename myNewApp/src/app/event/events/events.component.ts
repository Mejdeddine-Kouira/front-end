import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  acitvityName: any = '';
  description: any = '';
  date: any = '';
  hour: any = '';
  events: any = [];
  constructor(private router: Router, private service: EventsService) {
    this.getEvents()
  }

  getEvents() {
    this.service
      .getEvents(this.acitvityName, this.description, this.date, this.hour)
      .subscribe((response: any) => {
        this.events = response;
        console.log(this.events)
        
      });
  }


  ngOnInit(): void {}
}
