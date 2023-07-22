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

        this.increaseQuality(item);
        if (item.sellIn < 10) {
          this.increaseQuality(item);
        }
        if (item.sellIn < 5) {
          this.increaseQuality(item);
        }
        return;
      }

      if (isAgedBrie) {
        this.increaseQuality(item);
        if (this.isExpired(item)) {
          this.increaseQuality(item);
        }
        return;
      }

      this.decreaseQualityBy(item, this.isExpired(item) ? 2 : 1);
    });
    return this.items;
  }

  private increaseQuality = (item: Item) => {
    if (item.quality < 50) {
      item.quality++;
    }
  };

  private decreaseQualityBy = (item: Item, decrement: number) => {
    item.quality = Math.max(0, item.quality - decrement);
  };

  private isExpired = (item: Item) => {
    return item.sellIn < 0;
  };
}
