import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MarkdownService} from './markdown.service';

@Component({
    selector: 'ab-markdown, [markdown]',
    templateUrl: './markdown.component.html',
    styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit {

    @Input() value: string;

    @Output() valueChange = new EventEmitter();

    public formattedHtml = '';

    constructor(
        private markdownService: MarkdownService
    ) {
    }

    ngOnInit() {
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
