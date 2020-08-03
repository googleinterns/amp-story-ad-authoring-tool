import {TestBed} from '@angular/core/testing';

import {AssetUploadService} from './asset-upload.service';
import {AdAuthoringWorkflowStateContainer} from '../ad-authoring/ad-authoring.state';

describe('AssetUploadService', () => {
  let service: AssetUploadService;
  let state: AdAuthoringWorkflowStateContainer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetUploadService);
    state = TestBed.inject(AdAuthoringWorkflowStateContainer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get state', () => {
    const thisState = service.getAssets();

    expect(thisState).toEqual(state.getState());
  });

  it('should update the assets state', () => {
    const blob = new Blob([''], {type: 'image/png'});
    blob['lastModifiedDate'] = '';
    blob['name'] = 'filename';
    const fakeF = <File>blob;

    service.updateAssets('image.png', fakeF);

    expect(state.getValue().fileSrc).toBe('image.png');
    expect(state.getValue().file).toBe(fakeF);
  });
});
