import { Component, OnInit } from '@angular/core';
import { AdAuthoringService } from './ad-authoring.service'
import { AdAuthoring } from './ad-authoring';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ad-authoring',
  templateUrl: './ad-authoring.component.html',
  styleUrls: ['./ad-authoring.component.scss']
})
export class AdAuthoringComponent implements OnInit {

  adAuthoringObs: Observable<ReadonlyArray<AdAuthoring>>

  constructor(private service: AdAuthoringService) {
    this.adAuthoringObs = service.getAdAuthorings();
  }

  addAdAuthoring(landingUrl: string, landingType: string, callToAction: string) {
    this.service.addAdAuthoring(landingUrl, landingType, callToAction);
  }

  ngOnInit(): void {
  }

}
