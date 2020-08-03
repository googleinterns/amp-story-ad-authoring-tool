import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AssetUploadComponent} from './asset-upload.component';
import {HarnessLoader} from '@angular/cdk/testing';
import {AppModule} from '../app.module';
import {MatExpansionPanelHarness} from '@angular/material/expansion/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {By} from '@angular/platform-browser';

let loader: HarnessLoader;

describe('AssetUploadComponent', () => {
  let component: AssetUploadComponent;
  let fixture: ComponentFixture<AssetUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetUploadComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
});
