import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatSelectHarness} from '@angular/material/select/testing';
import {MatExpansionPanelHarness} from '@angular/material/expansion/testing';
import {AppModule} from '../app.module';
import {MatInputHarness} from '@angular/material/input/testing';

import {AdAuthoringComponent} from './ad-authoring.component';
import {AdAuthoringService} from './ad-authoring.service';
import {LandingTypeEnum} from './landing-type-values';
import {CallToActionEnum} from './call-to-action';

let loader: HarnessLoader;

describe('AdAuthoringComponent', () => {
  let component: AdAuthoringComponent;
  let fixture: ComponentFixture<AdAuthoringComponent>;
  let service: AdAuthoringService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
    fixture = TestBed.createComponent(AdAuthoringComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const expansion = await loader.getHarness(MatExpansionPanelHarness);
    await expansion.expand();
    service = TestBed.inject(AdAuthoringService);
    spyOn(service, 'updateLandingUrl');
    spyOn(service, 'updateCallToAction');
    spyOn(service, 'updateLandingType');
  });

  it('should create ad-authoring component', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct number of mat selects', async () => {
    const selects = await loader.getAllHarnesses(MatSelectHarness);

    expect(selects.length).toEqual(2);
  });

  it('should have the correct number of options for landing type select', async () => {
    const landingTypeSelect = await loader.getHarness(
      MatSelectHarness.with({
        selector: '.landing-page',
      })
    );

    await landingTypeSelect.open();

    const typeOptions = await landingTypeSelect.getOptions();
    expect(typeOptions.length).toBe(3);
  });

  it('should click the AMP option', async () => {
    const landingTypeSelect = await loader.getHarness(
      MatSelectHarness.with({
        selector: '.landing-page',
      })
    );
    await landingTypeSelect.open();

    await landingTypeSelect.clickOptions({text: 'AMP'});

    const selectedText = await landingTypeSelect.getValueText();
    expect(selectedText).toBe('AMP');
  });

  it('should have the correct number of options for call to action select', async () => {
    const callToActionSelect = await loader.getHarness(
      MatSelectHarness.with({
        selector: '.call-to-action',
      })
    );

    await callToActionSelect.open();

    const typeOptions = await callToActionSelect.getOptions();
    expect(typeOptions.length).toBe(21);
  });

  it('should click the Read Now option', async () => {
    const callToActionSelect = await loader.getHarness(
      MatSelectHarness.with({
        selector: '.call-to-action',
      })
    );

    await callToActionSelect.open();

    await callToActionSelect.clickOptions({text: 'Read Now'});
    const selectedText = await callToActionSelect.getValueText();
    expect(selectedText).toBe('Read Now');
  });

  it('should get correct placeholder for landing page url input', async () => {
    const landingUrlInput = await loader.getHarness(MatInputHarness);

    const placeholder = await landingUrlInput.getPlaceholder();

    expect(placeholder).toBe('Landing Page URL');
  });

  it('should set value correctly for landing page url input', async () => {
    const landingUrlInput = await loader.getHarness(MatInputHarness);

    await landingUrlInput.setValue('google.com');

    const value = await landingUrlInput.getValue();
    expect(value).toBe('google.com');
  });

  it('changing landing url should call updateLandingUrl function', async () => {
    const landingUrlInput = await loader.getHarness(MatInputHarness);

    await landingUrlInput.setValue('google.com');

    expect(service.updateLandingUrl).toHaveBeenCalledWith('google.com');
  });

  it('changing landing type option should call updateLandingType function', async () => {
    const landingTypeSelect = await loader.getHarness(
      MatSelectHarness.with({
        selector: '.landing-page',
      })
    );

    await landingTypeSelect.open();
    await landingTypeSelect.clickOptions({text: 'AMP'});

    expect(service.updateLandingType).toHaveBeenCalledWith(LandingTypeEnum.AMP);
  });

  it('changing call to action option should call updateCallToAction function', async () => {
    const callToActionSelect = await loader.getHarness(
      MatSelectHarness.with({
        selector: '.call-to-action',
      })
    );

    await callToActionSelect.open();
    await callToActionSelect.clickOptions({text: 'Read Now'});

    expect(service.updateCallToAction).toHaveBeenCalledWith(
      CallToActionEnum.READ
    );
  });
});
