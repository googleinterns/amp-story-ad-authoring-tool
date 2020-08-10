import {Component} from '@angular/core';
import {DownloadService} from './download.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent {
  constructor(private downloadService: DownloadService) {}

  downloadFile() {
    const data = this.downloadService.generateHtmlForDownload();
    const blob = new Blob([data], {type: 'application/octet-stream'});
    const url = window.URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);
    downloadLink.style.display = 'none';
    downloadLink.href = url;
    downloadLink.download = 'file.txt';
    downloadLink.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(downloadLink);
  }
}
