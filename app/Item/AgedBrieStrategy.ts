import { Item } from "@/gilded-rose";
import { ItemStrategy } from "./ItemStrategy";

export class AgedBrieStrategy implements ItemStrategy {
  calculateNewSellIn = (item: Item) => {
    return item.sellIn - 1;
  };
  calculateNewQuality = (item: Item) => {
    if (item.sellIn < 0) return item.quality + 2;
    return item.quality + 1;
  };
}
