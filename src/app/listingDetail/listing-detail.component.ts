import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Listing } from '../models/listing.model';

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent implements OnInit {
  @Input() childListingList: Listing[];
  @Output() clickSender = new EventEmitter();

  listingId: number = null;
   // @Output() clickAdd = new EventEmitter();

  constructor(private route: ActivatedRoute, private location: Location){}

  selectedListing = null;

  viewListing(clickedListing){
    this.selectedListing = clickedListing;
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.listingId = parseInt(urlParameters['id']);
    });

  }
}
