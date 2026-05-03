/**
 * Employer mega menu: “I’m looking for a …” — links to signup with `lookingFor` preset.
 */
import type { MegaColumn } from "./mega-menu-professions";

export const PROFESSION_MEGA_MENU_HIRE: MegaColumn[] = [
  {
    groups: [
      {
        titleKey: "hospitalityTitle",
        links: [
          { labelKey: "lookingBarista", q: "barista" },
          { labelKey: "lookingChef", q: "chef" },
          { labelKey: "lookingKitchenHand", q: "kitchen hand" },
          { labelKey: "lookingWaiter", q: "waiter" },
          { labelKey: "lookingBartender", q: "bartender" },
          { labelKey: "lookingDishwasher", q: "dishwasher" },
        ],
      },
      {
        titleKey: "cleaningTitle",
        links: [
          { labelKey: "lookingCommercialCleaner", q: "commercial cleaner" },
          { labelKey: "lookingHousekeeper", q: "housekeeper" },
          { labelKey: "lookingDomesticCleaner", q: "domestic cleaner" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        titleKey: "constructionTitle",
        links: [
          { labelKey: "lookingLabourer", q: "labourer" },
          { labelKey: "lookingPainter", q: "painter" },
          { labelKey: "lookingTradeAssistant", q: "trade assistant" },
          { labelKey: "lookingDemolition", q: "demolition" },
        ],
      },
      {
        titleKey: "warehouseTitle",
        links: [
          { labelKey: "lookingWarehouse", q: "warehouse" },
          { labelKey: "lookingPicker", q: "picker packer" },
          { labelKey: "lookingForklift", q: "forklift" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        titleKey: "careTitle",
        links: [
          { labelKey: "lookingAgedCare", q: "aged care" },
          { labelKey: "lookingDisability", q: "disability support" },
          { labelKey: "lookingNursingAssistant", q: "nursing assistant" },
          { labelKey: "lookingChildcare", q: "childcare" },
        ],
      },
      {
        titleKey: "retailTitle",
        links: [
          { labelKey: "lookingRetailAssistant", q: "retail assistant" },
          { labelKey: "lookingCashier", q: "cashier" },
          { labelKey: "lookingMerchandiser", q: "merchandiser" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        titleKey: "farmTitle",
        links: [
          { labelKey: "lookingFruitPicker", q: "fruit picker" },
          { labelKey: "lookingFarmHand", q: "farm hand" },
          { labelKey: "lookingMeatWorker", q: "meat processing" },
        ],
      },
      {
        titleKey: "transportTitle",
        links: [
          { labelKey: "lookingDeliveryDriver", q: "delivery driver" },
          { labelKey: "lookingRideshare", q: "rideshare" },
        ],
      },
    ],
  },
];

export function hireSignupHref(q: string): string {
  const p = new URLSearchParams({ role: "employer", lookingFor: q });
  return `/auth/signup?${p.toString()}`;
}
