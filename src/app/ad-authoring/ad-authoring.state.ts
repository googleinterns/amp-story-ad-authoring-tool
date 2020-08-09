import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {CallToActionEnum} from './call-to-action';
import {LandingTypeEnum} from './landing-type-values';
import {generateStoryAmpHtml} from './generate-amp-html';

export interface AdAuthoringWorkflowState {
  readonly landingUrl?: string;
  readonly landingType?: LandingTypeEnum;
  readonly callToAction?: CallToActionEnum;
  readonly fileSrc?: string;
  readonly file?: File;
  readonly AmpHtml: string;
}

@Injectable({
  providedIn: 'root',
})
export class AdAuthoringWorkflowStateContainer {
  private state$: BehaviorSubject<
    AdAuthoringWorkflowState
  > = new BehaviorSubject({
    landingUrl: 'https://www.amp.dev',
    landingType: LandingTypeEnum.AMP,
    callToAction: CallToActionEnum.APPLY_NOW,
    fileSrc: 'https://placekitten.com/300/250',
    AmpHtml: generateStoryAmpHtml({
      callToActionStr: CallToActionEnum.APPLY_NOW,
      landingUrl: 'https://www.amp.dev',
      landingType: LandingTypeEnum.AMP,
      base64AssetStr: 'https://placekitten.com/300/250',
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
      callToActionStr: nextState.callToAction,
      landingUrl: nextState.landingUrl,
      landingType: nextState.landingType,
      base64AssetStr: nextState.fileSrc,
      assetFile: nextState.file,
    });
    nextState = {...nextState, AmpHtml};
    this.state$.next(nextState);
  }
}
