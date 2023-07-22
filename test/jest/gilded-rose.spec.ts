import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("Sulfuras quality is allways 80", () => {
    const gildedRose = new GildedRose([
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    ]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
  });

  it("Sulfuras sellin is constant", () => {
    const initialItems = [
      new Item("Sulfuras, Hand of Ragnaros", 2, 80),
      new Item("Sulfuras, Hand of Ragnaros", -15, 80),
      new Item("Sulfuras, Hand of Ragnaros", 4, 80),
      new Item("Sulfuras, Hand of Ragnaros", 6, 80),
    ];
    const gildedRose = new GildedRose(initialItems);

    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(2);
    expect(items[1].sellIn).toEqual(-15);
    expect(items[2].sellIn).toEqual(4);
    expect(items[3].sellIn).toEqual(6);
  });

  it("normal article quality degradation", () => {
    const gildedRose = new GildedRose([new Item("Normal article", 2, 50)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(49);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(48);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(46);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(44);
  });

  it("article quality is never negative", () => {
    const initialItems = [
      new Item("Normal article", 2, 50),
      new Item("Normal article", 2, 0),
      new Item("Aged Brie", 2, 3),
      new Item("Backstage passes to a TAFKAL80ETC concert", 2, 1),
      new Item("Sulfuras, Hand of Ragnaros", 2, 80),
    ];
    const gildedRose = new GildedRose(initialItems);
    for (let i = 0; i < 50; i++) {
      gildedRose.updateQuality();
    }
    let items = gildedRose.updateQuality();
    items.forEach((item) => {
      expect(item.quality).toBeGreaterThanOrEqual(0);
    });
  });

  it("Aged brie increse quality propertly", () => {
    const initialItems = [
      new Item("Aged Brie", -1, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Aged Brie", 2, 3),
    ];
    const gildedRose = new GildedRose(initialItems);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(22);
    expect(items[1].quality).toEqual(1);
    expect(items[2].quality).toEqual(4);
  });

  it("article quality is never greather than 50", () => {
    const initialItems = [
      new Item("Normal article", 2, 50),
      new Item("Normal article", 2, 0),
      new Item("Aged Brie", 2, 23),
      new Item("Aged Brie", -2, 23),
      new Item("Backstage passes to a TAFKAL80ETC concert", 2, 1),
      new Item("Backstage passes to a TAFKAL80ETC concert", 2, 48),
    ];
    const gildedRose = new GildedRose(initialItems);
    for (let i = 0; i < 50; i++) {
      gildedRose.updateQuality();
    }
    let items = gildedRose.updateQuality();
    items.forEach((item) => {
      expect(item.quality).toBeLessThanOrEqual(50);
    });
  });
});
