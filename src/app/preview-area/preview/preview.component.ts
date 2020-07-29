import {Component, ViewChild, ElementRef, Input} from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent {
  @Input() storyAMPHTML: string;

  @ViewChild('iframe') iframe: ElementRef;
  ngAfterViewInit() {
    const storyDoc =
      this.iframe.nativeElement.contentDocument ||
      this.iframe.nativeElement.contentWindow;
    storyDoc.open();
    storyDoc.write(this.storyAMPHTML);
    storyDoc.close();
  }
}
