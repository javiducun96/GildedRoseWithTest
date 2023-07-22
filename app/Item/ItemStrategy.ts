import { Item } from "@/gilded-rose";

export interface ItemStrategy {
  calculateNewSellIn: (item: Item) => number;
  calculateNewQuality: (item: Item) => number;
}
