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
    const assetBase64 = asset[0];
    // strip off everything befor the first comma (data:image/png;base64,)
    const assetBase64Stripped = assetBase64.replace(/^[^,]+, */, '');
    const assetFileName = asset[1];
    zip.file(assetFileName, assetBase64Stripped, {base64: true});
    zip.generateAsync({type: 'blob'}).then(function (content) {
      const objectUrl: string = URL.createObjectURL(content);
      const a: any = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      a.href = objectUrl;
      a.download = 'AmpAd.zip';
      a.click();
      window.URL.revokeObjectURL(objectUrl);
      document.body.removeChild(a);
    });
  }
}
