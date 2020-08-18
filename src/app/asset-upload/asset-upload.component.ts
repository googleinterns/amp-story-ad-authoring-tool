import {Component} from '@angular/core';
import {AssetUploadService} from './asset-upload.service';

@Component({
  selector: 'app-asset-upload',
  templateUrl: './asset-upload.component.html',
  styleUrls: ['./asset-upload.component.scss'],
})
export class AssetUploadComponent {
  file: File | null = null;
  assetLink = '';
  isSizeInvalid = false;

  constructor(private service: AssetUploadService) {}

  assetLinkUpload(assetLink: string) {
    // Fetch the asset and parse the response stream as a blob
    const assetBlob = fetch(assetLink)
      .then(response => response.blob())
      .then(blob => {
        const filename = assetLink.substring(assetLink.lastIndexOf('/'));
        const assetFile = new File([blob], filename);
        this.isSizeInvalid =
          assetFile.type.includes('video') && assetFile.size > 4000000
            ? true
            : false;
        if (!this.isSizeInvalid) {
          this.service.updateAssets(assetLink, assetFile);
        }
      });
  }

  onFileInput(fileInput: any) {
    this.file = fileInput.target.files[0];
    const assetSrc = URL.createObjectURL(this.file);
    this.isSizeInvalid =
      this.file.type.includes('video') && this.file.size > 4000000
        ? true
        : false;
    if (!this.isSizeInvalid) {
      this.service.updateAssets(assetSrc, this.file);
    }
  }
}
