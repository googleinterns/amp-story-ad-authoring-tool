import {Injectable} from '@angular/core';
import {
  AdAuthoringWorkflowState,
  AdAuthoringWorkflowStateContainer,
} from './ad-authoring.state';
import {Observable} from 'rxjs';
import {CallToActionEnum} from './call-to-action';
import {LandingTypeEnum} from './landing-type-values';

@Injectable({
  providedIn: 'root',
})
export class AdAuthoringService {
  constructor(
    private readonly adAuthoringState: AdAuthoringWorkflowStateContainer
  ) {}

  updateLandingUrl(landingUrl: string) {
    this.adAuthoringState.setState({
      ...this.adAuthoringState.getValue(),
      landingUrl,
    });
  }

  updateLandingType(landingType: LandingTypeEnum) {
    this.adAuthoringState.setState({
      ...this.adAuthoringState.getValue(),
      landingType,
    });
  }

  updateCallToAction(callToAction: CallToActionEnum) {
    this.adAuthoringState.setState({
      ...this.adAuthoringState.getValue(),
      callToAction,
    });
  }

  getAdAuthorings(): Observable<AdAuthoringWorkflowState> {
    return this.adAuthoringState.getState();
  }
}
