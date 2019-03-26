import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fade',
      [
        state('void', style({ opacity: 0 })),
        transition(':enter', [animate(300)]),
        transition(':leave', [animate(500)]),
      ]
    )
  ]
})

export class HeaderComponent implements OnInit {
  public fixed: boolean = false;

  constructor(
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit() { }

  @HostListener("window:scroll", ['$event'])

  onWindowScroll(e) {
    if (window.pageYOffset > 10) {
      let element = document.getElementById('navbarMenu');
      element.classList.add('scrollBarAnimation');
    } else {
      let element = document.getElementById('navbarMenu');
      element.classList.remove('scrollBarAnimation');
    }
  }

}
