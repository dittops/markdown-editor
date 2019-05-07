import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'markdown-app';
    markup = '**Angular** is a //Typescript// See here for more details [[https://accubits.com | Learn more]]';

    onChange(event) {
        console.log(event);
    }
}
