function randMax(max) {
  return Math.trunc(1e9 * Math.random()) % max;
}
var reel = {
  symbols: ["X", "Y", "Z", "W", "$", "*", "<", "@"],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  },
};

export var slotMachine = {
  reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  display() {
    var result = [-1, 0, 1].map((slotPos) => {
      var threeReels = this.reels.map((r) => {
        const slot = Object.create(reel);
        slot.position =
          (r.position + slotPos + reel.symbols.length) % reel.symbols.length;
        return slot.display();
      });
      return threeReels.join(" | ");
    });
    return result.join("\n");
  },
};
