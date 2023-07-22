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

      if (!isAgedBrie && !isBackstage) {
        if (item.quality > 0) {
          if (!isSulfura) {
            item.quality = item.quality - 1;
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (isBackstage) {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }
      if (!isSulfura) {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0) {
        if (!isAgedBrie) {
          if (!isBackstage) {
            if (item.quality > 0) {
              if (!isSulfura) {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    });
    return this.items;
  }
}
