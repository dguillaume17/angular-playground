import { AfterViewInit, Directive, EventEmitter, Output } from "@angular/core";

@Directive({
    selector: '[app-render-notifier]'
})
export class RenderNotifierDirective implements AfterViewInit {

    // Output properties

    @Output()
    public rendered = new EventEmitter<void>();

    // Lifecycle

    ngAfterViewInit() {
        console.log('# RenderNotifierDirective.ngAfterViewInit()')
        console.log('- First');
        this.rendered.emit();
        setTimeout(() => {
            console.log('- Second');
            this.rendered.emit();
        });
    }

}