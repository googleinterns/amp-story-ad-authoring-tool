import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DownloadComponent} from './download.component';
import {MatButtonHarness} from '@angular/material/button/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {AppModule} from '../app.module';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';

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
    spyOn(component, 'downloadFile');
    const button = await loader.getHarness(MatButtonHarness);

    await button.click();

    expect(component.downloadFile).toHaveBeenCalled();
  });
});
