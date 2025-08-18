
class Potion {
  constructor(color, volume) {
    this.color = color;
    this.volume = volume;
  }
  mix(that) {
    const volume = this.volume+that.volume;
    const color = [];
    for (let i = 0; i < this.color.length; ++i) {
      const a = this.color[i] * this.volume;
      const b = that.color[i] * that.volume;
      color[i] = Math.ceil((a + b) / volume);
    }
    return new Potion(color, volume);
  }
}

const p1 = new Potion([255, 255, 255],  7);
const p2 = new Potion([ 51, 102,  51], 12);

p1.mix(p2);
