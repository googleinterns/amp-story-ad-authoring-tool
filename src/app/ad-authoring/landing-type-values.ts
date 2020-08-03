export enum LandingTypeEnum {
  STORY = 'STORY',
  AMP = 'AMP',
  NONAMP = 'NONAMP',
}

export const LANDING_TYPE_DISPLAY_VALUES: Record<LandingTypeEnum, string> = {
  [LandingTypeEnum.STORY]: 'Story',
  [LandingTypeEnum.AMP]: 'AMP',
  [LandingTypeEnum.NONAMP]: 'Non-AMP',
} as const;

function landingTypeComparator(
  landingType1: LandingTypeEnum,
  landingType2: LandingTypeEnum
) {
  return LANDING_TYPE_DISPLAY_VALUES[landingType1].localeCompare(
    LANDING_TYPE_DISPLAY_VALUES[landingType2]
  );
}

export const sortedLandingType = Object.keys(LandingTypeEnum).sort(
  landingTypeComparator
);
