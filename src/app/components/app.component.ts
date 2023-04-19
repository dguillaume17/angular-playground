import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

    // ViewChild properties

    @ViewChild('divRef')
    public myViewChild1?: ElementRef<HTMLDivElement>;

    @ViewChild('divRef', {static: true})
    public myViewChild2?: ElementRef<HTMLDivElement>;

    @ViewChild('divRef', {static: false})
    public myViewChild3?: ElementRef<HTMLDivElement>;

    // Lifecycle

    constructor() {
        this.debug('constructor');
    }

    ngOnInit() {
        this.debug('ngOnInit');
    }

    ngAfterViewInit() {
        this.debug('ngAfterViewInit');
    }

    // Inner work

    private debug(name: string) {
        console.log(`#${name}`);
        console.log('* myViewChild1 = ', this.myViewChild1);
        console.log('* myViewChild2 = ', this.myViewChild2);
        console.log('* myViewChild3 = ', this.myViewChild3);
    }

}
