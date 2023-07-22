import { Item } from "@/gilded-rose";
import { ItemStrategy } from "./ItemStrategy";

export class BackstagePassesStrategy implements ItemStrategy {
  calculateNewSellIn = (item: Item) => {
    return item.sellIn - 1;
  };
  calculateNewQuality = (item: Item) => {
    if (item.sellIn < 0) return 0;
    if (item.sellIn >= 10) return item.quality + 1;
    if (item.sellIn >= 5) return item.quality + 2;
    return item.quality + 3;
  };
}
