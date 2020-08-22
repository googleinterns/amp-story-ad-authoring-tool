import {Injectable} from '@angular/core';
import {
  AdAuthoringWorkflowStateContainer,
  AdAuthoringWorkflowState,
} from '../ad-authoring/ad-authoring.state';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssetUploadService {
  constructor(
    private readonly adAuthoringState: AdAuthoringWorkflowStateContainer
  ) {}

  updateAssets(fileSrc: string, file: File) {
    this.adAuthoringState.setState({
      ...this.adAuthoringState.getValue(),
      fileSrc,
      file,
    });
  }

  updateIsExternalAsset(isExternalAsset: boolean) {
    this.adAuthoringState.setState({
      ...this.adAuthoringState.getValue(),
      isExternalAsset,
    });
  }

  getAssets(): Observable<AdAuthoringWorkflowState> {
    return this.adAuthoringState.getState();
  }
}
