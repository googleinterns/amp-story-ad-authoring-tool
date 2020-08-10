import {Injectable} from '@angular/core';
import {AdAuthoringWorkflowStateContainer} from '../ad-authoring/ad-authoring.state';

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

    // TODO:
    // If anything is undefined e.g the asset, make sure to send an error message
    // Instead of generating amp html here, call the generateAmpHtml() from ../ad-authoring/generate-amp-html

    const adHtml = `
      <!doctype html>
      <html amp4ads>
        <head>
          <meta charset=\"utf-8\">
          <meta name=\"viewport\" content=\"width=device-width,minimum-scale=1\">
          <meta name=\"amp-cta-type\" content=\"${callToAction}\">
          <meta name=\"amp-cta-url\" content=\"${landingUrl}\">
          <meta name=\"amp-cta-landing-page-type\" content=\"${landingType}\">
          <style amp4ads-boilerplate>
            body{visibility:hidden}
          <\/style>
          <script async src=\"https:\/\/cdn.ampproject.org\/amp4ads-v0.js\">
          <\/script>
          <script async custom-element=\"amp-video\" src=\"https:\/\/cdn.ampproject.org\/v0\/amp-video-0.1.js\">
          <\/script>
        <\/head>`;
    const imageHtml = `
        <body>
          <amp-img layout=\"fixed\" height=\"250\" width=\"300\" src=\".\/${assetPath}\">
          <\/amp-img>
        <\/body>
      <\/html>`;
    const videoHtml = file
      ? `
        <body>
          <amp-video layout=\"fill\" height=\"1920\" width=\"1080\" autoplay loop>
            <source src=\".\/${assetPath}\" type=\"${file.type}\" \/>
          <\/amp-video>
        <\/body>
      <\/html>`
      : ``;
    const assetHtml = file?.type.includes('video') ? videoHtml : imageHtml;
    const adAmpHtml = adHtml + assetHtml;

    return adAmpHtml;
  }
}
