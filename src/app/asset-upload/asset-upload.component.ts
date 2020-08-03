import {Component} from '@angular/core';
import {AssetUploadService} from './asset-upload.service';
import {Observable} from 'rxjs';
import {AdAuthoringWorkflowState} from '../ad-authoring/ad-authoring.state';

@Component({
  selector: 'app-asset-upload',
  templateUrl: './asset-upload.component.html',
  styleUrls: ['./asset-upload.component.scss'],
})
export class AssetUploadComponent {
  adAuthoringObs: Observable<AdAuthoringWorkflowState>;
  // raw base 64 encoding of an image or video
  rawAssetBase64 = '';
  file: File | null = null;

  constructor(private service: AssetUploadService) {
    this.adAuthoringObs = service.getAssets();
  }

  onFileInput(fileInput: any) {
    this.file = fileInput.target.files[0];
    const reader = new FileReader();
    reader.onload = (loadEvent: any) => {
      this.rawAssetBase64 = loadEvent.target.result;
      this.service.updateAssets(this.rawAssetBase64, this.file);
    };
    reader.readAsDataURL(this.file);
  }
}
