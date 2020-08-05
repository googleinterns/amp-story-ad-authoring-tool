import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent {
  fileUrl;

  constructor(private sanitizer: DomSanitizer) {}

  downloadFile() {
    // console.log("in the generate funtion");
    const data = 'amp story ad html goes here';
    // const blob = new Blob([data], { type: 'application/octet-stream' });

    // this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));

    window.URL = window.URL || window.webkitURL;
    const a = document.createElement('a');
    const blob = new Blob([data], {type: 'application/octet-stream'});
    const url = window.URL.createObjectURL(blob);
    document.body.appendChild(a);
    // a.style = "display: none";
    a.href = url;
    a.download = 'file.txt';
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
}
