import { Item } from "@/gilded-rose";
import { ItemStrategy } from "./ItemStrategy";

export class AgedBrieStrategy implements ItemStrategy {
  calculateNewSellIn = (item: Item) => {
    return item.sellIn - 1;
  };
  calculateNewQuality = (item: Item) => {
    let newQuality;
    if (item.sellIn < 0) newQuality = item.quality + 2;
    else newQuality = item.quality + 1;
    return Math.min(50, newQuality);
  };
}
