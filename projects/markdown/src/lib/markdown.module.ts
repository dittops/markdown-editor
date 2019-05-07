import { NgModule } from '@angular/core';
import { MarkdownComponent } from './markdown.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [MarkdownComponent],
    imports: [
        FormsModule
    ],
  exports: [MarkdownComponent]
})
export class MarkdownModule { }
