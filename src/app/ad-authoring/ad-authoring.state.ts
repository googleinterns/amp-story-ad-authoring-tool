import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {CallToActionEnum} from './call-to-action';
import {LandingTypeEnum} from './landing-type-values';
import {generateStoryAmpHtml} from './generate-amp-html';
import {generateAdAmpHtml} from './generate-amp-html';

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
    AmpHtml: generateStoryAmpHtml(
      generateAdAmpHtml(
        CallToActionEnum.APPLY_NOW,
        'https://www.amp.dev',
        LandingTypeEnum.AMP,
        'https://placekitten.com/300/250',
        null
      )
    ),
  });

  getValue(): AdAuthoringWorkflowState {
    return this.state$.getValue();
  }

  getState(): Observable<AdAuthoringWorkflowState> {
    return this.state$.asObservable();
  }

  setState(nextState: AdAuthoringWorkflowState): void {
    const AmpHtml = generateStoryAmpHtml(
      generateAdAmpHtml(
        nextState.callToAction,
        nextState.landingUrl,
        nextState.landingType,
        nextState.fileSrc,
        nextState.file
      )
    );
    nextState = {...nextState, AmpHtml};
    this.state$.next(nextState);
  }
}
