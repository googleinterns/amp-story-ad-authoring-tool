import {Injectable} from '@angular/core';
import {AdAuthoringWorkflowStateContainer} from '../ad-authoring/ad-authoring.state';
import {generateHtmlForDownload} from '../ad-authoring/generate-ad-html';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  constructor(
    private readonly adAuthoringState: AdAuthoringWorkflowStateContainer
  ) {}

  downlaodDisabled() {
    const {file, landingUrl} = this.adAuthoringState.getValue();

    return file == null || landingUrl == '' ? true : false;
  }

  getAsset() {
    return this.adAuthoringState.getValue().file;
  }

  generateHtmlForDownload() {
    const landingUrl = this.adAuthoringState.getValue().landingUrl;
    const landingType = this.adAuthoringState.getValue().landingType;
    const callToAction = this.adAuthoringState.getValue().callToAction;
    const file = this.adAuthoringState.getValue().file;
    const assetPath = file.name;

    return generateHtmlForDownload({
      callToActionStr: callToAction,
      landingUrl: landingUrl,
      landingType: landingType,
      assetFilePath: assetPath,
      assetFile: file,
    });
  }
}
