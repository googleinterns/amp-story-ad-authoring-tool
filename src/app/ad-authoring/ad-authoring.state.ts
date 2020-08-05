import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {CallToActionEnum} from './call-to-action';
import {LandingTypeEnum} from './landing-type-values';

export interface AdAuthoringWorkflowState {
  readonly landingUrl?: string;
  readonly landingType?: LandingTypeEnum;
  readonly callToAction?: CallToActionEnum;
  readonly fileSrc?: string;
  readonly file?: File;
  readonly AMPHTMLstring: string;
}

@Injectable({
  providedIn: 'root',
})
export class AdAuthoringWorkflowStateContainer {
  generateAMPHTML(
    callToActionStr: string,
    landingPageUrl: string,
    landingPageType: string,
    base64AssetStr: string,
    assetFile: File
  ) {
    let adAMPHTML =
      '"<!doctype html><html amp4ads><head><meta charset=\\"utf-8\\"><meta name=\\"viewport\\" content=\\"width=device-width,minimum-scale=1\\"><meta name=\\"amp-cta-type\\" content=\\"' +
      callToActionStr +
      '\\"><meta name=\\"amp-cta-url\\" content=\\"' +
      landingPageUrl +
      '\\"><meta name=\\"amp-cta-landing-page-type\\" content=\\"' +
      landingPageType +
      '\\"><style amp4ads-boilerplate>body{visibility:hidden}<\\/style><script async src=\\"https:\\/\\/cdn.ampproject.org\\/amp4ads-v0.js\\"><\\/script><\\/head><body><amp-img layout=\\"fixed\\" height=\\"250\\" width=\\"300\\" src=\\"' +
      base64AssetStr +
      '\\"><\\/amp-img><\\/body><\\/html>"';

    // if the file uploaded is a video (not image)
    if (assetFile != null && assetFile.type.includes('video')) {
      adAMPHTML =
        '"<!doctype html><html amp4ads><head><meta charset=\\"utf-8\\"><meta name=\\"viewport\\" content=\\"width=device-width,minimum-scale=1\\"><meta name=\\"amp-cta-type\\" content=\\"' +
        callToActionStr +
        '\\"><meta name=\\"amp-cta-url\\" content=\\"' +
        landingPageUrl +
        '\\"><meta name=\\"amp-cta-landing-page-type\\" content=\\"' +
        landingPageType +
        '\\"><style amp4ads-boilerplate>body{visibility:hidden}<\\/style><script async src=\\"https:\\/\\/cdn.ampproject.org\\/amp4ads-v0.js\\"><\\/script><script async custom-element=\\"amp-video\\" src=\\"https:\\/\\/cdn.ampproject.org\\/v0\\/amp-video-0.1.js\\"><\\/script><\\/head><body><amp-video layout=\\"fill\\" height=\\"1920\\" width=\\"1080\\" autoplay loop> <source src=\\"' +
        base64AssetStr +
        '\\" type=\\"' +
        assetFile.type +
        '\\" \\/><\\/amp-video><\\/body><\\/html>"';
    }

    const storyAMPHTML =
      `<!DOCTYPE html>
    <html amp="🤠-invalid" lang="en">
      <head>
        <meta charset="utf-8" />
        <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
        <script async custom-element="amp-story-auto-ads" src="https://cdn.ampproject.org/v0/amp-story-auto-ads-0.1.js"></script>
        <title>AMP Story</title>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
        <link rel="canonical" href="/" />
      </head>
      <body>
        <amp-story standalone>  
          <amp-story-auto-ads id="i-amphtml-demo-1" development>
            <script type="application/json">
              {
                "ad-attributes": {
                  "type": "fake",
                  "srcdoc": ` +
      adAMPHTML +
      `,
                  "a4a-conversion": true
                }
              }
            </script>
          </amp-story-auto-ads>
          <amp-story-page class="i-amphtml-story-ad-cover" id="cover">
            <amp-story-grid-layer template="fill">
              <amp-img
                src="https://amp.dev/static/samples/img/story_dog2.jpg"
                width="720"
                height="1280"
                layout="responsive"
              >
              </amp-img>
            </amp-story-grid-layer>
            <amp-story-grid-layer template="vertical">
              <h1>Hello World</h1>
              <p>This is an AMP Story.</p>
            </amp-story-grid-layer>
          </amp-story-page>
    
          <amp-story-page id="page-2">
            <amp-story-grid-layer template="fill">
              <amp-video
                autoplay
                loop
                width="720"
                height="960"
                poster="https://amp.dev/static/samples/img/story_video_dog_cover.jpg"
                layout="responsive"
              >
                <source
                  src="https://amp.dev/static/samples/video/story_video_dog.mp4"
                  type="video/mp4"
                />
              </amp-video>
            </amp-story-grid-layer>
          </amp-story-page>
    
          <amp-story-page id="three">
            <amp-story-grid-layer template="vertical">
              <h1>page three</h1>
            </amp-story-grid-layer>
          </amp-story-page>
    
          <amp-story-page id="four">
            <amp-story-grid-layer template="vertical">
              <h1>page four</h1>
            </amp-story-grid-layer>
          </amp-story-page>
    
          <amp-story-page id="five">
            <amp-story-grid-layer template="vertical">
              <h1>page five</h1>
            </amp-story-grid-layer>
          </amp-story-page>
    
          <amp-story-page id="six">
            <amp-story-grid-layer template="vertical">
              <h1>page six</h1>
            </amp-story-grid-layer>
          </amp-story-page>
    
          <amp-story-page id="seven">
            <amp-story-grid-layer template="vertical">
              <h1>page seven</h1>
            </amp-story-grid-layer>
          </amp-story-page>
    
          <amp-story-page id="eight">
            <amp-story-grid-layer template="vertical">
              <h1>page eight</h1>
            </amp-story-grid-layer>
          </amp-story-page>
    
          <amp-story-page id="nine">
            <amp-story-grid-layer template="vertical">
              <h1>page nine</h1>
            </amp-story-grid-layer>
          </amp-story-page>
    
          <amp-story-page id="ten">
            <amp-story-grid-layer template="vertical">
              <h1>page ten</h1>
            </amp-story-grid-layer>
          </amp-story-page>
        </amp-story>
      </body>
    </html>`;
    return storyAMPHTML;
  }

  private state$: BehaviorSubject<
    AdAuthoringWorkflowState
  > = new BehaviorSubject({
    landingUrl: 'https://www.amp.dev',
    landingType: LandingTypeEnum.AMP,
    callToAction: CallToActionEnum.APPLY_NOW,
    fileSrc: 'https://placekitten.com/300/250',
    AMPHTMLstring: this.generateAMPHTML(
      CallToActionEnum.APPLY_NOW,
      'https://www.amp.dev',
      LandingTypeEnum.AMP,
      'https://placekitten.com/300/250',
      null
    ),
  });

  getValue(): AdAuthoringWorkflowState {
    return this.state$.getValue();
  }

  getState(): Observable<AdAuthoringWorkflowState> {
    return this.state$.asObservable();
  }

  setState(nextState: AdAuthoringWorkflowState): void {
    const AMPHTMLstring = this.generateAMPHTML(
      nextState.callToAction,
      nextState.landingUrl,
      nextState.landingType,
      nextState.fileSrc,
      nextState.file
    );
    nextState = {...nextState, AMPHTMLstring};
    this.state$.next(nextState);
  }
}
