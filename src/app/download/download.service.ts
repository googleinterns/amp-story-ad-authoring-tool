import {Injectable} from '@angular/core';
import {AdAuthoringWorkflowStateContainer} from '../ad-authoring/ad-authoring.state';
import {map} from 'rxjs/operators';
import {generateAdHtmlForDownload} from '../ad-authoring/generate-ad-html';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  constructor(
    private readonly adAuthoringState: AdAuthoringWorkflowStateContainer
  ) {}

  isDownloadDisabled() {
    return this.adAuthoringState.getState().pipe(
      map(state => {
        const {file, landingUrl} = state;
        return !(file && landingUrl);
      })
    );
  }

  getAsset() {
    return {
      file: this.adAuthoringState.getValue().file,
      isExternalAsset: this.adAuthoringState.getValue().isExternalAsset,
    };
  }

  generateHtmlForDownload() {
    const landingUrl = this.adAuthoringState.getValue().landingUrl;
    const landingType = this.adAuthoringState.getValue().landingType;
    const callToAction = this.adAuthoringState.getValue().callToAction;
    const file = this.adAuthoringState.getValue().file;
    const assetPath = file.name;
    const fileSrc = this.adAuthoringState.getValue().fileSrc;
    const isExternalAsset = this.adAuthoringState.getValue().isExternalAsset;

    return generateAdHtmlForDownload({
      callToAction: callToAction,
      landingUrl: landingUrl,
      landingType: landingType,
      assetFilePath: assetPath,
      assetSrc: fileSrc,
      assetFile: file,
      isExternalAsset: isExternalAsset,
    });
  }
}
