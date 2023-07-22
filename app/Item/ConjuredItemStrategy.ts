import { Item } from "@/gilded-rose";
import { ItemStrategy } from "./ItemStrategy";

export class ConjuredItemStrategy implements ItemStrategy {
  calculateNewSellIn = (item: Item) => {
    return item.sellIn - 1;
  };
  calculateNewQuality = (item: Item) => {
    let newQuality;
    if (item.sellIn < 0) newQuality = item.quality - 4;
    else newQuality = item.quality - 2;

    return Math.max(0, newQuality);
  };
}
