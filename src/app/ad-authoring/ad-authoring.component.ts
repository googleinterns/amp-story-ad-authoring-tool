import {Component} from '@angular/core';
import {AdAuthoringService} from './ad-authoring.service';
import {
  CallToActionEnum,
  CALL_TO_ACTION_DISPLAY_VALUES,
  sortedCallToAction,
} from './call-to-action';
import {
  LandingTypeEnum,
  LANDING_TYPE_DISPLAY_VALUES,
  sortedLandingType,
} from './landing-type-values';

@Component({
  selector: 'app-ad-authoring',
  templateUrl: './ad-authoring.component.html',
  styleUrls: ['./ad-authoring.component.scss'],
})
export class AdAuthoringComponent {
  landingPageUrl = '';

  CallToActionMapping = CALL_TO_ACTION_DISPLAY_VALUES;
  callToActionValues = sortedCallToAction;

  LandingTypeMapping = LANDING_TYPE_DISPLAY_VALUES;
  landingTypeValues = sortedLandingType;

  constructor(private service: AdAuthoringService) {}

  updateLandingUrl(landingUrl: string) {
    this.service.updateLandingUrl(landingUrl);
  }

  updateLandingType(landingType: LandingTypeEnum) {
    this.service.updateLandingType(landingType);
  }

  updateCallToAction(callToAction: CallToActionEnum) {
    console.log('Updating call to action');
    this.service.updateCallToAction(callToAction);
  }
}
