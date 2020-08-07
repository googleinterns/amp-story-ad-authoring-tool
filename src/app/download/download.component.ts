import {Component} from '@angular/core';
import {DownloadService} from './download.service';
import * as JSZip from 'jszip';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent {
  constructor(private service: DownloadService) {}

  downloadFileZip() {
    const zip = new JSZip();
    const data = this.service.generateHtmlForDownload();
    zip.file('Hello.txt', data);
    zip.generateAsync({type: 'blob'}).then(function (content) {
      const objectUrl: string = URL.createObjectURL(content);
      const a: any = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      a.href = objectUrl;
      a.download = 'examp.zip';
      a.click();
      window.URL.revokeObjectURL(objectUrl);
      document.body.removeChild(a);
    });

    // const data = this.service.generateHtmlForDownload();
    // const blob = new Blob([data], {type: 'application/octet-stream'});
    // const url = window.URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // document.body.appendChild(a);
    // a.style.display = 'none';
    // a.href = url;
    // a.download = 'file.txt';
    // a.click();
    // window.URL.revokeObjectURL(url);
    // document.body.removeChild(a);
  }
}
