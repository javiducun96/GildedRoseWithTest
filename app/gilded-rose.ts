import { AgedBrieStrategy } from "./Item/AgedBrieStrategy";
import { BackstagePassesStrategy } from "./Item/BackstagePassesStrategy";
import { CommonItemStrategy } from "./Item/CommonItemStrategy";
import { ConjuredItemStrategy } from "./Item/ConjuredItemStrategy";
import { ItemStrategy } from "./Item/ItemStrategy";
import { SulfurasStrategy } from "./Item/SulfurasStrategy";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class ItemWithStrategy extends Item {
  private strategy: ItemStrategy;

  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
    if (name === "Sulfuras, Hand of Ragnaros") {
      this.strategy = new SulfurasStrategy();
    } else if (name === "Backstage passes to a TAFKAL80ETC concert") {
      this.strategy = new BackstagePassesStrategy();
    } else if (name === "Aged Brie") {
      this.strategy = new AgedBrieStrategy();
    } else if (name === "Conjured item") {
      this.strategy = new ConjuredItemStrategy();
    } else {
      this.strategy = new CommonItemStrategy();
    }
  }

  public update() {
    this.sellIn = this.strategy.calculateNewSellIn(this);
    this.quality = this.strategy.calculateNewQuality(this);
  }
}

export class GildedRose {
  items: Array<ItemWithStrategy>;

  constructor(items = [] as Array<Item>) {
    this.items = items.map(
      (item) => new ItemWithStrategy(item.name, item.sellIn, item.quality)
    );
  }

  updateQuality() {
    this.items.forEach((item) => {
      item.update();
    });
    return this.items;
  }
}
