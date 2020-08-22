import {Component} from '@angular/core';
import {AssetUploadService} from './asset-upload.service';
import {EventEmitter} from 'protractor';

@Component({
  selector: 'app-asset-upload',
  templateUrl: './asset-upload.component.html',
  styleUrls: ['./asset-upload.component.scss'],
})
export class AssetUploadComponent {
  assetUrl = '';
  isSizeValid = true;
  fileName = null;

  constructor(private service: AssetUploadService) {}

  fetchAssetFromUrl(assetUrl: string) {
    // Fetch the asset and parse the response stream as a blob
    fetch(assetUrl)
      .then(response => response.blob())
      .then(blob => {
        const filename = assetUrl.substring(assetUrl.lastIndexOf('/'));
        const file = new File([blob], filename, {type: blob.type});
        this.updateAssets(assetUrl, file);
        this.service.updateIsExternalAsset(true);
        this.fileName = '';
      });
  }

  onFileInput(fileInput: any) {
    const file = fileInput.target.files[0];
    const assetSrc = URL.createObjectURL(file);
    this.updateAssets(assetSrc, file);
    this.service.updateIsExternalAsset(false);
    this.fileName = file.name;
    this.assetUrl = '';

    // addresses the case where user uploads the same file in succession
    fileInput.target.value = '';
  }

  private updateAssets(src: string, file: File) {
    this.validateSize(file);
    if (this.isSizeValid) {
      this.service.updateAssets(src, file);
    } else {
      this.service.updateAssets('', null);
    }
  }

  // removed private for testing purposes
  validateSize(file: File) {
    const FOUR_MB = 4000000;
    this.isSizeValid = !(file.type.includes('video') && file.size > FOUR_MB);
  }
}
