import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable} from "rxjs/index";
import {map} from "rxjs/operators";

@Component({
    selector: 'my-dashboard',
    templateUrl: './my-dashboard.component.html',
    styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent {
    cards = [
        {title: 'Card 1', cols: 2, rows: 1},
        {title: 'Card 2', cols: 1, rows: 1},
        {title: 'Card 3', cols: 1, rows: 2},
        {title: 'Card 4', cols: 1, rows: 1}
    ];
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    constructor(private breakpointObserver: BreakpointObserver) {

    }
}
