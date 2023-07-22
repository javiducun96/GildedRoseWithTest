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
});
