import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AssetUploadComponent} from './asset-upload.component';
import {HarnessLoader} from '@angular/cdk/testing';
import {AppModule} from '../app.module';
import {MatExpansionPanelHarness} from '@angular/material/expansion/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {By} from '@angular/platform-browser';
import {MatInputHarness} from '@angular/material/input/testing';
import {AdAuthoringWorkflowStateContainer} from '../ad-authoring/ad-authoring.state';

let loader: HarnessLoader;

describe('AssetUploadComponent', () => {
  let component: AssetUploadComponent;
  let fixture: ComponentFixture<AssetUploadComponent>;
  let state: AdAuthoringWorkflowStateContainer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetUploadComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
    state = TestBed.inject(AdAuthoringWorkflowStateContainer);
  });

  it('should create asset upload component', () => {
    expect(component).toBeTruthy();
  });

  it('should have mat expansion panel with correct title', async () => {
    const expansion = await loader.getHarness(
      MatExpansionPanelHarness.with({
        selector: '#asset-upload-panel',
      })
    );

    const title = await expansion.getTitle();
    expect(title).toBe('Asset Upload');
  });

  it('should call onFileInput function when change event fires', async () => {
    spyOn(component, 'onFileInput');
    const expansion = await loader.getHarness(
      MatExpansionPanelHarness.with({
        selector: '#asset-upload-panel',
      })
    );
    await expansion.expand();
    const input = fixture.debugElement.query(By.css('input[type=file]'))
      .nativeElement;

    input.dispatchEvent(new Event('change'));

    expect(component.onFileInput).toHaveBeenCalled();
  });

  it('should call the fetchAssetFromUrl function when a user inputs a link for asset upload', async () => {
    spyOn(component, 'fetchAssetFromUrl');
    const linkUploadInput = await loader.getHarness(MatInputHarness);

    await linkUploadInput.setValue('https://i.imgur.com/7LA92gi.jpg');
    await linkUploadInput.blur();

    expect(component.fetchAssetFromUrl).toHaveBeenCalledWith(
      'https://i.imgur.com/7LA92gi.jpg'
    );
  });

  it('isSizeValid should be true initially', async () => {
    expect(component.isSizeValid).toBe(true);
  });

  it('should mock a fetch call and test image asset', async done => {
    const response = new Response(new Blob([''], {type: 'image/jpg'}));
    const blobPromise = new Promise<Response>((resolve, reject) => {
      resolve(response);
    });
    spyOn(window, 'fetch').and.returnValue(blobPromise);
    const linkUploadInput = await loader.getHarness(MatInputHarness);

    await linkUploadInput.setValue('https://i.imgur.com/7LA92gi.jpg');
    await linkUploadInput.blur();

    setTimeout(() => {
      // waits one second in order to give asset link upload promise time to resolve
      expect(state.getValue().fileSrc).toEqual(
        'https://i.imgur.com/7LA92gi.jpg'
      );
      expect(state.getValue().file.type).toEqual('image/jpg');
      done();
    }, 1000);
  });

  it('should mock a fetch call and test video asset', async done => {
    const response = new Response(new Blob([''], {type: 'video/mp4'}));
    const blobPromise = new Promise<Response>((resolve, reject) => {
      resolve(response);
    });
    spyOn(window, 'fetch').and.returnValue(blobPromise);
    const linkUploadInput = await loader.getHarness(MatInputHarness);

    await linkUploadInput.setValue('https://i.imgur.com/7LA92gi.mp4');
    await linkUploadInput.blur();

    setTimeout(() => {
      // waits one second in order to give asset link upload promise time to resolve
      expect(state.getValue().fileSrc).toEqual(
        'https://i.imgur.com/7LA92gi.mp4'
      );
      expect(state.getValue().file.type).toEqual('video/mp4');
      done();
    }, 1000);
  });

  it('isSizeValid should return false for video asset with size larger than 4MB', () => {
    const file = new File([''], name, {type: 'video/mp4'});
    Object.defineProperty(file, 'size', {value: 5000000, writable: false});

    component.validateSize(file);

    expect(component.isSizeValid).toBe(false);
  });

  it('isSizeValid should return true for image asset', () => {
    const file = new File([''], name, {type: 'image/jpg'});

    component.validateSize(file);

    expect(component.isSizeValid).toBe(true);
  });
});
