import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
  it("Sulfuras is allways 80", () => {
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
});
