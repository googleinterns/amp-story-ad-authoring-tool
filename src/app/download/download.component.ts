import {Component} from '@angular/core';
import {DownloadService} from './download.service';
import * as JSZip from 'jszip';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent {
  disabledObs: Observable<boolean>;

  constructor(private downloadService: DownloadService) {
    this.disabledObs = downloadService.isDownloadDisabled();
  }

  downloadFileZip() {
    const zip = new JSZip();
    const data = this.downloadService.generateHtmlForDownload();
    zip.file('index.html', data);

    const asset = this.downloadService.getAsset();
    // only create an asset file in the zip if the image was uploaded through a file, not link
    if (!asset.isAssetLink) {
      const assetFileName = asset.file.name;
      zip.file(assetFileName, asset.file);
    }

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
