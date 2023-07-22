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

      const increaseQuality = (item) => {
        if (item.quality < 50) {
          item.quality++;
        }
      };

      if (isSulfura) {
        return;
      }

      item.sellIn = item.sellIn - 1;

      if (isBackstage) {
        if (item.sellIn <= 0) {
          item.quality = 0;
        } else {
          increaseQuality(item);
          if (isBackstage) {
            if (item.sellIn < 10) {
              increaseQuality(item);
            }
            if (item.sellIn < 5) {
              increaseQuality(item);
            }
          }
        }
        return;
      }

      if (isAgedBrie) {
        increaseQuality(item);
      }

      if (!isAgedBrie) {
        if (item.quality > 0) {
          item.quality = item.quality - 1;
        }
      }
      if (item.sellIn < 0) {
        if (!isAgedBrie) {
          if (item.quality > 0) {
            item.quality = item.quality - 1;
          }
        } else {
          increaseQuality(item);
        }
      }
    });
    return this.items;
  }
}
