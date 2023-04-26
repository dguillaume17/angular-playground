import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';

interface Item {
    id: number;
    name: string;
}

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements AfterViewInit{

    // ViewChildren properties

    @ViewChildren('test')
    public test?: QueryList<any>;

    // Public properties

    public items?: Array<Item>;

    // Lifecycle

    constructor() {

    }

    ngAfterViewInit() {
        this.test?.changes.subscribe(change => {
            console.log(change);
        });

        setTimeout(() => {
            this.setupItems(1);
        })

    }

    // Interface

    public setupItems(step: 1 | 2) {

        if (step === 1) {
            this.items = [];
            for (let i = 0; i < 1000; i++) {
                this.items.push({
                    id: i,
                    name: i.toString()
                });
            }
        }

        if (step === 2) {
            this.items = this.items ?? [];
            for (let i = 0; i < 1000; i++) {
                this.items[i].name += '1';
            }
        }

    }

    public trackByFn(index: number, item: Item) {
        return item.id;
    }

}
