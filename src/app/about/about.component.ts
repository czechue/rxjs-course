import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { concat, fromEvent, interval, noop, Observable, of, timer } from 'rxjs';
import { createHttpObservable } from '../common/util';
import { map, merge, mergeAll, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const interval1$ = interval(1000);

    const sub = interval1$.subscribe(console.log);

    setTimeout(() => sub.unsubscribe(), 0);
  }
}
