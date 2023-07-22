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

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      const isSulfura = item.name === "Sulfuras, Hand of Ragnaros";
      const isBackstage =
        item.name === "Backstage passes to a TAFKAL80ETC concert";
      const isAgedBrie = item.name === "Aged Brie";

      if (isSulfura) {
        return;
      }

      item.sellIn--;

      if (isBackstage) {
        if (this.isExpired(item)) {
          item.quality = 0;
          return;
        }

        if (item.sellIn >= 10) {
          this.increaseQualityBy(item, 1);
          return;
        }

        if (item.sellIn >= 5) {
          this.increaseQualityBy(item, 2);
          return;
        }

        this.increaseQualityBy(item, 3);
        return;
      }

      if (isAgedBrie) {
        if (this.isExpired(item)) {
          this.increaseQualityBy(item, 2);
        } else {
          this.increaseQualityBy(item, 1);
        }
        return;
      }

      if (this.isExpired(item)) {
        this.decreaseQualityBy(item, 2);
      } else {
        this.decreaseQualityBy(item, 1);
      }
    });
    return this.items;
  }

  private increaseQualityBy = (item: Item, increment: number) => {
    item.quality = Math.min(50, item.quality + increment);
  };

  private decreaseQualityBy = (item: Item, decrement: number) => {
    item.quality = Math.max(0, item.quality - decrement);
  };

  private isExpired = (item: Item) => {
    return item.sellIn < 0;
  };
}
