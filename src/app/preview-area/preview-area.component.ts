import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {AdAuthoringService} from '../ad-authoring/ad-authoring.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-preview-area',
  templateUrl: './preview-area.component.html',
  styleUrls: ['./preview-area.component.scss'],
})
export class PreviewAreaComponent {
  ampHtmlObs: Observable<ReadonlyArray<string>>;

  constructor(private service: AdAuthoringService) {
    // AmpHtml must be mapped into an array in order to be able to use the ngFor directive
    // to remove the old preview and construct a new preview component on state changes
    // This is necessary because we are constructing a new Iframe upon state changes in order
    // to update the ad accordingly.
    this.ampHtmlObs = service
      .getAdAuthorings()
      .pipe(map(state => [state.ampHtml]));
  }
}
