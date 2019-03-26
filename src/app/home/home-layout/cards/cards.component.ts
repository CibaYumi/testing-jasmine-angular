import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselComponent } from "ngx-carousel-lib";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }

  @ViewChild('topCarousel') topCarousel: CarouselComponent;
  ngOnInit() {
  }

  prev() {
    this.topCarousel.slidePrev();
  }
  next() {
    this.topCarousel.slideNext();
  }
}
