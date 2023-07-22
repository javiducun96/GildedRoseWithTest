import { Item } from "@/gilded-rose";
import { ItemStrategy } from "./ItemStrategy";

export class SulfurasStrategy implements ItemStrategy {
  calculateNewSellIn = (item: Item) => {
    return item.sellIn;
  };
  calculateNewQuality = (item: Item) => {
    return item.quality;
  };
}
