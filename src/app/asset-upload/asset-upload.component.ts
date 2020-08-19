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
  isSizeValid = true;
  fileName = null;

  constructor(private service: AssetUploadService) {}

  assetLinkUpload(assetLink: string) {
    // Fetch the asset and parse the response stream as a blob
    const assetBlob = fetch(assetLink)
      .then(response => response.blob())
      .then(blob => {
        const filename = assetLink.substring(assetLink.lastIndexOf('/'));
        const assetFile = new File([blob], filename);
        this.validateSize();
        this.isSizeValid
          ? this.service.updateAssets(assetLink, assetFile)
          : this.service.updateAssets('', null);
        this.fileName = '';
      });
  }

  onFileInput(fileInput: any) {
    this.file = fileInput.target.files[0];
    const assetSrc = URL.createObjectURL(this.file);
    this.validateSize();
    this.isSizeValid
      ? this.service.updateAssets(assetSrc, this.file)
      : this.service.updateAssets('', null);
    this.fileName = this.file.name;
    this.assetLink = '';
  }

  validateSize() {
    this.isSizeValid = !(
      this.file.type.includes('video') && this.file.size > 4000000
    );
  }
}
