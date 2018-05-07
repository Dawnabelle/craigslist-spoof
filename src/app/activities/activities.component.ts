import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Listing } from '../models/listing.model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})

export class ActivitiesComponent implements OnInit {
 // @Input() childBeerList: Beer[];
 //  // @Output() clickSender = new EventEmitter();
 //  // @Output() clickAdd = new EventEmitter();

   constructor() { }

  ngOnInit() {
  }


}
