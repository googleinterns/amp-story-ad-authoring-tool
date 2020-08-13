import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DownloadComponent} from './download.component';
import {MatButtonHarness} from '@angular/material/button/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {AppModule} from '../app.module';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatExpansionPanelHarness} from '@angular/material/expansion/testing';
import {MatInputHarness} from '@angular/material/input/testing';

let loader: HarnessLoader;

describe('DownloadComponent', () => {
  let component: DownloadComponent;
  let fixture: ComponentFixture<DownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
      declarations: [DownloadComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(DownloadComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the download component', () => {
    expect(component).toBeTruthy();
  });

  it('should call downloadFile when the download button is clicked', async () => {
    spyOn(component, 'downloadFileZip');
    const button = await loader.getHarness(MatButtonHarness);

    await button.click();

    expect(component.downloadFileZip).toHaveBeenCalled();
  });

  // it('should contain a defined landingUrl element', async() => {
  //   // expand the call to action expansion panel
  //   const callToActionExpansion = await loader.getHarness(
  //     MatExpansionPanelHarness.with({
  //       selector: '#call-to-action-panel',
  //     })
  //   );
  //   await callToActionExpansion.expand();
  //   // set landingUrl value
  //   const landingUrlInput = await loader.getHarness(MatInputHarness);
  //   await landingUrlInput.setValue('https://google.com');
  //   // expand the asset upload expansion panel
  //   const assetUploadExpansion = await loader.getHarness(
  //     MatExpansionPanelHarness.with({
  //       selector: '#asset-upload-panel',
  //     })
  //   );
  //   await assetUploadExpansion.expand();
  //   // upload an image
  // });
});
