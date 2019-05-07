import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MarkdownService {

    constructor() {
    }

    getHtml(text) {
        text = this.formatHeadings(text);
        text = this.formatItalics(text);
        text = this.formatUrl(text);

        return text;
    }

    formatHeadings(text) {
        const regx = /\*\*(.*?)\*\*/g;
        return text.replace(regx, function(match, pos, originalText) {
            return '<h1>' + pos + '</h1>';
        });
    }

    formatItalics(text) {
        const regx = /\/\/(.*?)\/\//g;
        return text.replace(regx, function(match, pos, originalText) {
            return '<I>' + pos + '</I>';
        });
    }

    formatUrl(text) {
        const regx = /\[\[(.*?)\]\]/g;
        return text.replace(regx, function(match, pos, originalText) {
            const url = pos.split('|');
            if (url.length) {
                return '<a href="' + url[0] + '" target="_blank">' + url[1] + '</a>';
            } else {
                return '<a href="#">' + pos + '</a>';
            }
        });
    }

}
