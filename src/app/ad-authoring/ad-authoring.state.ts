import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {CallToActionEnum} from './call-to-action';
import {LandingTypeEnum} from './landing-type-values';
import {generateStoryAmpHtml} from './generate-story-html';

export interface AdAuthoringWorkflowState {
  // landing page url that the user is directed to when call to action button is clicked
  readonly landingUrl?: string;
  // the landing page type of the landing page url (amp, nonamp, story)
  readonly landingType?: LandingTypeEnum;
  // the call to action text that is displayed on the call to action button
  readonly callToAction?: CallToActionEnum;
  // determines if the asset is from local file or externally hostes via url
  readonly isExternalAsset?: boolean;
  // either the url of the external asset or the createObjectUrl from the asset file
  readonly fileSrc?: string;
  // the file of the asset
  readonly file?: File;
  // Amp Html of the story
  readonly ampHtml?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AdAuthoringWorkflowStateContainer {
  private state$: BehaviorSubject<
    AdAuthoringWorkflowState
  > = new BehaviorSubject({
    landingUrl: '',
    landingType: LandingTypeEnum.NONAMP,
    callToAction: CallToActionEnum.EXPLORE,
    ampHtml: generateStoryAmpHtml({
      callToAction: CallToActionEnum.EXPLORE,
      landingUrl: '',
      landingType: LandingTypeEnum.NONAMP,
      assetSrc: 'https://placekitten.com/300/250',
      assetFile: null,
      isExternalAsset: true,
    }),
  });

  getValue(): AdAuthoringWorkflowState {
    return this.state$.getValue();
  }

  getState(): Observable<AdAuthoringWorkflowState> {
    return this.state$.asObservable();
  }

  setState(nextState: AdAuthoringWorkflowState): void {
    const AmpHtml = generateStoryAmpHtml({
      callToAction: nextState.callToAction,
      landingUrl: nextState.landingUrl,
      landingType: nextState.landingType,
      assetSrc: nextState.fileSrc,
      assetFile: nextState.file,
      isExternalAsset: nextState.isExternalAsset,
    });
    nextState = {...nextState, ampHtml: AmpHtml};
    this.state$.next(nextState);
  }
}
