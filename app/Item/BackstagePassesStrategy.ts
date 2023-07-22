import { Item } from "@/gilded-rose";
import { ItemStrategy } from "./ItemStrategy";

export class BackstagePassesStrategy implements ItemStrategy {
  calculateNewSellIn = (item: Item) => {
    return item.sellIn - 1;
  };
  calculateNewQuality = (item: Item) => {
    if (item.sellIn < 0) return 0;

    let newQuality;
    if (item.sellIn >= 10) newQuality = item.quality + 1;
    else if (item.sellIn >= 5) newQuality = item.quality + 2;
    else newQuality = item.quality + 3;

    return Math.min(newQuality, 50);
  };
}
