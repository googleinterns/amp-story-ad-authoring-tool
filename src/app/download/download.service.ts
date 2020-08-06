import {Injectable} from '@angular/core';
import {AdAuthoringWorkflowStateContainer} from '../ad-authoring/ad-authoring.state';
import {generateAdAmpHtml} from '../ad-authoring/generate-amp-html';
import {CallToActionEnum} from '../ad-authoring/call-to-action';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  constructor(
    private readonly adAuthoringState: AdAuthoringWorkflowStateContainer
  ) {}

  generateHtmlForDownload() {
    const landingUrl = this.adAuthoringState.getValue().landingUrl;
    const landingType = this.adAuthoringState.getValue().landingType;
    const callToAction = this.adAuthoringState.getValue().callToAction;
    const file = this.adAuthoringState.getValue().file;
    const assetPath = file.name;

    //TODO: If anything is undefined e.g the asset, make sure to send an error message

    const ad = generateAdAmpHtml(
      callToAction,
      landingUrl,
      landingType,
      assetPath,
      file
    );
    return ad;
    // console.log(ad);
  }
}
