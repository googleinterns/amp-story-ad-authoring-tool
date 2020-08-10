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
    zip.file('AmpAd.html', data);

    const asset = this.service.getAsset();
    const assetBase64 = asset.base64;
    // strip off everything befor the first comma (data:image/png;base64,) to get raw base64 encoding
    const assetBase64Stripped = assetBase64.replace(/^[^,]+, */, '');
    const assetFileName = asset.fileName;
    zip.file(assetFileName, assetBase64Stripped, {base64: true});

    zip.generateAsync({type: 'blob'}).then(function (content) {
      const objectUrl: string = URL.createObjectURL(content);
      const downloadLink = document.createElement('a');
      document.body.appendChild(downloadLink);
      downloadLink.style.display = 'none';
      downloadLink.href = objectUrl;
      downloadLink.download = 'AmpAd.zip';
      downloadLink.click();
      window.URL.revokeObjectURL(objectUrl);
      document.body.removeChild(downloadLink);
    });
  }
}
