import {Component} from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent {
  downloadFile() {
    // TODO: create a service that generates the AMP ad html instead of this dummy data
    const data = 'amp story ad html goes here';
    const blob = new Blob([data], {type: 'application/octet-stream'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    a.href = url;
    a.download = 'file.txt';
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
}
