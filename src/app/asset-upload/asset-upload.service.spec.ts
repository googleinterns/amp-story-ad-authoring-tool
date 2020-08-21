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

  it('should update the assets state and amp html should contain it', () => {
    const blob = new Blob([''], {type: 'image/png'});
    blob['lastModifiedDate'] = '';
    blob['name'] = 'filename';
    const fakeF = <File>blob;

    service.updateAssets('image.png', fakeF);

    expect(state.getValue().fileSrc).toBe('image.png');
    expect(state.getValue().file).toBe(fakeF);
  });

  it('AMPHTML should contain the updated asset state value', () => {
    const blob = new Blob([''], {type: 'image/png'});
    blob['lastModifiedDate'] = '';
    blob['name'] = 'filename';
    const fakeF = <File>blob;

    service.updateAssets('image.png', fakeF);

    expect(state.getValue().ampHtml).toContain(state.getValue().fileSrc);
  });

  it('should update isExternalAsset to true when updateIsAssetLink is called', () => {
    service.updateIsAssetLink(true);

    expect(state.getValue().isExternalAsset).toBe(true);
  });

  it('should update isExternalAsset to true when updateIsAssetLink is called', () => {
    service.updateIsAssetLink(false);

    expect(state.getValue().isExternalAsset).toBe(false);
  });
});
