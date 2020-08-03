export enum CallToActionEnum {
  APPLY_NOW = 'APPLY_NOW',
  BOOK_NOW = 'BOOK_NOW',
  BUY_TICKETS = 'BUY_TICKETS',
  DOWNLOAD = 'DOWNLOAD',
  EXPLORE = 'EXPLORE',
  GET_NOW = 'GET_NOW',
  INSTALL = 'INSTALL',
  LISTEN = 'LISTEN',
  MORE = 'MORE',
  OPEN_APP = 'OPEN_APP',
  ORDER_NOW = 'ORDER_NOW',
  PLAY = 'PLAY',
  READ = 'READ',
  SHOP = 'SHOP',
  SHOWTIMES = 'SHOWTIMES',
  SIGN_UP = 'SIGN_UP',
  SUBSCRIBE = 'SUBSCRIBE',
  USE_APP = 'USE_APP',
  VIEW = 'VIEW',
  WATCH = 'WATCH',
  WATCH_EPISODE = 'WATCH_EPISODE',
}

export const CALL_TO_ACTION_DISPLAY_VALUES: Record<CallToActionEnum, string> = {
  [CallToActionEnum.APPLY_NOW]: 'Apply Now',
  [CallToActionEnum.BOOK_NOW]: 'Book Now',
  [CallToActionEnum.BUY_TICKETS]: 'Buy Tickets',
  [CallToActionEnum.DOWNLOAD]: 'Download',
  [CallToActionEnum.EXPLORE]: 'Explore Now',
  [CallToActionEnum.GET_NOW]: 'Get Now',
  [CallToActionEnum.INSTALL]: 'Install Now',
  [CallToActionEnum.LISTEN]: 'Listen Now',
  [CallToActionEnum.MORE]: 'More',
  [CallToActionEnum.OPEN_APP]: 'Open App',
  [CallToActionEnum.ORDER_NOW]: 'Order Now',
  [CallToActionEnum.PLAY]: 'Play',
  [CallToActionEnum.READ]: 'Read Now',
  [CallToActionEnum.SHOP]: 'Shop Now',
  [CallToActionEnum.SHOWTIMES]: 'Showtimes',
  [CallToActionEnum.SIGN_UP]: 'Sign Up',
  [CallToActionEnum.SUBSCRIBE]: 'Subscribe Now',
  [CallToActionEnum.USE_APP]: 'Use App',
  [CallToActionEnum.VIEW]: 'View',
  [CallToActionEnum.WATCH]: 'Watch',
  [CallToActionEnum.WATCH_EPISODE]: 'Watch Episode',
} as const;

function callToActionComparator(
  cta1: CallToActionEnum,
  cta2: CallToActionEnum
) {
  return CALL_TO_ACTION_DISPLAY_VALUES[cta1].localeCompare(
    CALL_TO_ACTION_DISPLAY_VALUES[cta2]
  );
}

export const sortedCallToAction = Object.keys(CallToActionEnum).sort(
  callToActionComparator
);
