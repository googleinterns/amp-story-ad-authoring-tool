import {Component} from '@angular/core';
import {AdAuthoringService} from '../ad-authoring/ad-authoring.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {DownloadService} from './download.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent {
  fileUrl;
  ampHtmlObs: Observable<string>;

  constructor(private service: DownloadService) {}

  downloadFile() {
    const data = this.service.generateHtmlForDownload();
    // const data = 'amp story ad html goes here';
    const a = document.createElement('a');
    const blob = new Blob([data], {type: 'application/octet-stream'});
    const url = window.URL.createObjectURL(blob);
    document.body.appendChild(a);
    a.style.display = 'none';
    a.href = url;
    a.download = 'file.txt';
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
}
