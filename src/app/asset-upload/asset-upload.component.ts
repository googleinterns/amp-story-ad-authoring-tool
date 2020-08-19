import {Component} from '@angular/core';
import {AssetUploadService} from './asset-upload.service';

@Component({
  selector: 'app-asset-upload',
  templateUrl: './asset-upload.component.html',
  styleUrls: ['./asset-upload.component.scss'],
})
export class AssetUploadComponent {
  assetLink = '';
  isSizeValid = true;
  fileName = null;

  constructor(private service: AssetUploadService) {}

  assetLinkUpload(assetLink: string) {
    // Fetch the asset and parse the response stream as a blob
    fetch(assetLink)
      .then(response => response.blob())
      .then(blob => {
        const filename = assetLink.substring(assetLink.lastIndexOf('/'));
        const file = new File([blob], filename);
        this.updateAssets(assetLink, file);
        this.fileName = '';
      });
  }

  onFileInput(fileInput: any) {
    console.log(fileInput);
    const file = fileInput.target.files[0];
    const assetSrc = URL.createObjectURL(file);
    this.updateAssets(assetSrc, file);
    this.fileName = file.name;
    this.assetLink = '';

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

  private validateSize(file: File) {
    this.isSizeValid = !(file.type.includes('video') && file.size > 4000000);
  }
}
