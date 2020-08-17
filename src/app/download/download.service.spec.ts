import {TestBed} from '@angular/core/testing';

import {DownloadService} from './download.service';
import {AdAuthoringWorkflowStateContainer} from '../ad-authoring/ad-authoring.state';

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

  it('generateHtmlForDownload should contain landingUrl value saved in state', () => {
    const adHtml = service.generateHtmlForDownload();

    expect(adHtml).toContain(state.getValue().landingUrl);
  });

  it('generateHtmlForDownload should contain callToAction value saved in state', () => {
    const adHtml = service.generateHtmlForDownload();

    expect(adHtml).toContain(state.getValue().callToAction);
  });

  it('generateHtmlForDownload should contain landingUrl value saved in state', () => {
    const adHtml = service.generateHtmlForDownload();

    expect(adHtml).toContain(state.getValue().file.name);
  });

  it('should get asset file', () => {
    const assetFile = service.getAsset();

    expect(assetFile).toBe(state.getValue().file);
  });

  it('should expect downloadDisabled to return false', () => {
    const downloadDisabledVal = service.isDownloadDisabled();

    expect(downloadDisabledVal).toBe(false);
  });
});
