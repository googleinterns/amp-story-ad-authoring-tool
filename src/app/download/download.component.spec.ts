import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DownloadComponent} from './download.component';
import {MatButtonHarness} from '@angular/material/button/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {AppModule} from '../app.module';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {AdAuthoringWorkflowStateContainer} from '../ad-authoring/ad-authoring.state';

let loader: HarnessLoader;

describe('DownloadComponent', () => {
  let component: DownloadComponent;
  let fixture: ComponentFixture<DownloadComponent>;
  let state: AdAuthoringWorkflowStateContainer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [DownloadComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(DownloadComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
    state = TestBed.inject(AdAuthoringWorkflowStateContainer);
  });

  it('should create the download component', () => {
    expect(component).toBeTruthy();
  });

  it('should expect download button to be disabled when both file and landingUrl are not initialized', async () => {
    const button = await loader.getHarness(MatButtonHarness);
    const isDisbaled = await button.isDisabled();

    expect(isDisbaled).toBe(true);
  });

  it('should expect download button to be disabled when landingUrl has a value but file is null', async () => {
    state.setState({
      landingUrl: 'https://google.com',
      ampHtml: '',
    });
    const button = await loader.getHarness(MatButtonHarness);

    state.setState({landingUrl: 'https://google.com', ampHtml: ''});
    const isDisbaled = await button.isDisabled();

    expect(isDisbaled).toBe(true);
  });

  it('should expect download button to be enabled after file and landingUrl updated in state', async () => {
    const fakeFile = new File([''], 'filename', {type: 'image/png'});
    state.setState({
      landingUrl: 'https://google.com',
      file: fakeFile,
      ampHtml: '',
    });
    const button = await loader.getHarness(MatButtonHarness);

    const isDisbaled = await button.isDisabled();

    expect(isDisbaled).toBe(false);
  });

  it('should call downloadFile when the download button is enabled and clicked', async () => {
    const fakeFile = new File([''], 'filename', {type: 'image/png'});
    state.setState({
      landingUrl: 'https://google.com',
      file: fakeFile,
      ampHtml: '',
    });
    spyOn(component, 'downloadFileZip');
    const button = await loader.getHarness(MatButtonHarness);

    await button.click();

    expect(component.downloadFileZip).toHaveBeenCalled();
  });
});
