import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {CallToActionEnum} from './call-to-action';
import {LandingTypeEnum} from './landing-type-values';
import {generateStoryAmpHtml} from './generate-story-html';

export interface AdAuthoringWorkflowState {
  readonly landingUrl?: string;
  readonly landingType?: LandingTypeEnum;
  readonly callToAction?: CallToActionEnum;
  readonly fileSrc?: string;
  readonly file?: File;
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
    fileSrc: 'https://placekitten.com/300/250',
    ampHtml: generateStoryAmpHtml({
      callToAction: CallToActionEnum.EXPLORE,
      landingUrl: '',
      landingType: LandingTypeEnum.NONAMP,
      assetSrc: 'https://placekitten.com/300/250',
      assetFile: null,
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
    });
    nextState = {...nextState, ampHtml: AmpHtml};
    this.state$.next(nextState);
  }
}
