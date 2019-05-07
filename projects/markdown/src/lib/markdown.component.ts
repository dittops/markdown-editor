import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {MarkdownService} from './markdown.service';

@Component({
    selector: 'ab-markdown, [markdown]',
    templateUrl: './markdown.component.html',
    styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit, OnChanges {

    @Input() value: string;

    @Output() valueChange = new EventEmitter();

    public formattedHtml = '';

    constructor(
        private markdownService: MarkdownService
    ) {
    }

    ngOnInit() {
    }


    ngOnChanges(changes: SimpleChanges) {
        const valueChange: SimpleChange = changes.value;

        if (valueChange) {
            if (typeof valueChange.currentValue !== 'undefined' && valueChange.currentValue !== valueChange.previousValue) {
                if (valueChange.currentValue !== '') {
                    this.value = valueChange.currentValue;
                    this.onChange();
                }
            }
        }
    }

    onChange() {
        this.formattedHtml = this.markdownService.getHtml(this.value);
        const val = {
            markDown: this.value,
            html: this.formattedHtml
        }
        this.valueChange.emit(val);
    }

}
