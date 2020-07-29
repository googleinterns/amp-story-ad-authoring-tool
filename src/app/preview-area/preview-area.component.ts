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
  ampHtmlObs: Observable<Array<string>>;

  constructor(private service: AdAuthoringService) {
    this.ampHtmlObs = service
      .getAdAuthorings()
      .pipe(map(state => [state.AMPHTMLstring]));
  }
}
