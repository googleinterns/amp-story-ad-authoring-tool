import {TestBed} from '@angular/core/testing';

import {DownloadService} from './download.service';
import {AdAuthoringWorkflowStateContainer} from '../ad-authoring/ad-authoring.state';
import {map} from 'rxjs/operators';

describe('DownloadService', () => {
  let service: DownloadService;
  let state: AdAuthoringWorkflowStateContainer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DownloadService);
    state = TestBed.inject(AdAuthoringWorkflowStateContainer);
    const fakeFile = new File([''], 'filename', {type: 'image/png'});
    state.setState({
      landingUrl: 'https://google.com',
      file: fakeFile,
      ampHtml: '',
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('generateHtmlForDownload should contain landingUrl value saved in state', () => {
    const adHtml = service.generateHtmlForDownload();

    expect(adHtml).toContain(state.getValue().landingUrl);
  });

  it('generateHtmlForDownload should contain landingType value saved in state', () => {
    const adHtml = service.generateHtmlForDownload();

    expect(adHtml).toContain(state.getValue().landingType);
  });

  it('generateHtmlForDownload should contain callToAction value saved in state', () => {
    const adHtml = service.generateHtmlForDownload();

    expect(adHtml).toContain(state.getValue().callToAction);
  });

  it('generateHtmlForDownload should contain file name saved in state', () => {
    const adHtml = service.generateHtmlForDownload();

    expect(adHtml).toContain(state.getValue().file.name);
  });

  it('should get asset file', () => {
    const assetFile = service.getAsset();

    expect(assetFile.file).toBe(state.getValue().file);
  });

  it('should expect isDownloadDisabled to return false', () => {
    let downloadDisabledVal;
    service.isDownloadDisabled().subscribe(state => {
      downloadDisabledVal = state;
    });

    expect(downloadDisabledVal).toBe(false);
  });

  it('should expect isDownloadDisabled to return true when landingUrl is not present', () => {
    let downloadDisabledVal;
    service.isDownloadDisabled().subscribe(state => {
      downloadDisabledVal = state;
    });

    state.setState({
      landingUrl: '',
      ampHtml: '',
    });

    expect(downloadDisabledVal).toBe(true);
  });
});
