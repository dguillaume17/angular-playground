import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

    // ViewChild properties

    @ViewChild('divRef', {static: false})
    public myViewChild?: ElementRef<HTMLDivElement>;

    // Public properties

    public shouldDisplayDiv = false;

    // Lifecycle

    ngAfterViewInit() {
        console.log('# ngAfterViewInit()');
        console.log('- Waiting 2 seconds to display the div element')
        setTimeout(() => {
            console.log('- Displaying the div element')
            console.log('- myViewChild = ', this.myViewChild);
            this.shouldDisplayDiv = true;
        }, 2000);
    }

    // Interface

    public notifyChangeOfMyViewChild() {
        console.log('# notifyChangeOfMyViewChild()')
        console.log('- myViewChild = ', this.myViewChild);
    }

}
