import {TestBed} from '@angular/core/testing';

import {AdAuthoringService} from './ad-authoring.service';
import {AdAuthoringWorkflowStateContainer} from './ad-authoring.state';
import {LandingTypeEnum} from './landing-type-values';
import {CallToActionEnum} from './call-to-action';

describe('AdAuthoringService', () => {
  let service: AdAuthoringService;
  let state: AdAuthoringWorkflowStateContainer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdAuthoringService);
    state = TestBed.inject(AdAuthoringWorkflowStateContainer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get state', () => {
    const thisState = service.getAdAuthorings();
    expect(thisState).toEqual(state.getState());
  });

  it('should update the landing page url state', () => {
    service.updateLandingUrl('google.com');
    expect(state.getValue().landingUrl).toBe('google.com');
  });

  it('should update the landing page type state', () => {
    service.updateLandingType(LandingTypeEnum.AMP);
    expect(state.getValue().landingType).toBe('AMP');
  });

  it('should update the call to action state', () => {
    service.updateCallToAction(CallToActionEnum.ORDER_NOW);
    expect(state.getValue().callToAction).toBe('ORDER_NOW');
  });
});
