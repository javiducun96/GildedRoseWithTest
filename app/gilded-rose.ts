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

      item.sellIn = item.sellIn - 1;

      if (isBackstage) {
        if (item.sellIn <= 0) {
          item.quality = 0;
        } else {
          this.increaseQuality(item);
          if (isBackstage) {
            if (item.sellIn < 10) {
              this.increaseQuality(item);
            }
            if (item.sellIn < 5) {
              this.increaseQuality(item);
            }
          }
        }
        return;
      }

      if (isAgedBrie) {
        this.increaseQuality(item);
        if (item.sellIn < 0) {
          this.increaseQuality(item);
        }
        return;
      }

      this.decreaseQuality(item);
      if (item.sellIn < 0) {
        this.decreaseQuality(item);
      }
    });
    return this.items;
  }

  private increaseQuality = (item) => {
    if (item.quality < 50) {
      item.quality++;
    }
  };

  private decreaseQuality = (item) => {
    if (item.quality > 0) {
      item.quality--;
    }
  };
}
