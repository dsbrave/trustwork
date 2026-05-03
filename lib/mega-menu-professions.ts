/**
 * Structure for the Upwork-style “Find work” mega menu.
 * Query strings feed `/jobs?q=…` (mock search).
 */
export type MegaLink = { labelKey: string; q: string };
export type MegaGroup = { titleKey: string; links: MegaLink[] };
export type MegaColumn = { groups: MegaGroup[] };

export const PROFESSION_MEGA_MENU: MegaColumn[] = [
  {
    groups: [
      {
        titleKey: "hospitalityTitle",
        links: [
          { labelKey: "iamBarista", q: "barista" },
          { labelKey: "iamChef", q: "chef" },
          { labelKey: "iamKitchenHand", q: "kitchen hand" },
          { labelKey: "iamWaiter", q: "waiter" },
          { labelKey: "iamBartender", q: "bartender" },
          { labelKey: "iamDishwasher", q: "dishwasher" },
        ],
      },
      {
        titleKey: "cleaningTitle",
        links: [
          { labelKey: "iamCommercialCleaner", q: "commercial cleaner" },
          { labelKey: "iamHousekeeper", q: "housekeeper" },
          { labelKey: "iamDomesticCleaner", q: "domestic cleaner" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        titleKey: "constructionTitle",
        links: [
          { labelKey: "iamLabourer", q: "labourer" },
          { labelKey: "iamPainter", q: "painter" },
          { labelKey: "iamTradeAssistant", q: "trade assistant" },
          { labelKey: "iamDemolition", q: "demolition" },
        ],
      },
      {
        titleKey: "warehouseTitle",
        links: [
          { labelKey: "iamWarehouse", q: "warehouse" },
          { labelKey: "iamPicker", q: "picker packer" },
          { labelKey: "iamForklift", q: "forklift" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        titleKey: "careTitle",
        links: [
          { labelKey: "iamAgedCare", q: "aged care" },
          { labelKey: "iamDisability", q: "disability support" },
          { labelKey: "iamNursingAssistant", q: "nursing assistant" },
          { labelKey: "iamChildcare", q: "childcare" },
        ],
      },
      {
        titleKey: "retailTitle",
        links: [
          { labelKey: "iamRetailAssistant", q: "retail assistant" },
          { labelKey: "iamCashier", q: "cashier" },
          { labelKey: "iamMerchandiser", q: "merchandiser" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        titleKey: "farmTitle",
        links: [
          { labelKey: "iamFruitPicker", q: "fruit picker" },
          { labelKey: "iamFarmHand", q: "farm hand" },
          { labelKey: "iamMeatWorker", q: "meat processing" },
        ],
      },
      {
        titleKey: "transportTitle",
        links: [
          { labelKey: "iamDeliveryDriver", q: "delivery driver" },
          { labelKey: "iamRideshare", q: "rideshare" },
        ],
      },
    ],
  },
];
