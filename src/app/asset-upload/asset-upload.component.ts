import {Component} from '@angular/core';
import {AssetUploadService} from './asset-upload.service';

@Component({
  selector: 'app-asset-upload',
  templateUrl: './asset-upload.component.html',
  styleUrls: ['./asset-upload.component.scss'],
})
export class AssetUploadComponent {
  file: File | null = null;

  constructor(private service: AssetUploadService) {}

  onFileInput(fileInput: any) {
    this.file = fileInput.target.files[0];
    const assetSrc = URL.createObjectURL(this.file);
    this.service.updateAssets(assetSrc, this.file);
  }
}
