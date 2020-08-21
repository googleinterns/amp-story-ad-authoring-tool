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
import {FormControl, Validators} from '@angular/forms';

const validUrlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

@Component({
  selector: 'app-ad-authoring',
  templateUrl: './ad-authoring.component.html',
  styleUrls: ['./ad-authoring.component.scss'],
})
export class AdAuthoringComponent {
  landingUrl = '';

  CallToActionMapping = CALL_TO_ACTION_DISPLAY_VALUES;
  callToActionValues = sortedCallToAction;

  LandingTypeMapping = LANDING_TYPE_DISPLAY_VALUES;
  landingTypeValues = sortedLandingType;

  defaultLandingType = 'NONAMP';
  defaultCallToAction = 'EXPLORE';

  urlControl = new FormControl('', [
    Validators.required,
    Validators.pattern(validUrlRegex),
  ]);

  getErrorMessage() {
    return this.urlControl.hasError('required')
      ? 'You must enter a value'
      : 'Invalid URL';
  }

  constructor(private service: AdAuthoringService) {}

  updateLandingUrl(landingUrl: string) {
    this.service.updateLandingUrl(this.urlControl.invalid ? '' : landingUrl);
  }

  updateLandingType(landingType: LandingTypeEnum) {
    this.service.updateLandingType(landingType);
  }

  updateCallToAction(callToAction: CallToActionEnum) {
    this.service.updateCallToAction(callToAction);
  }
}
