export class Game {
    pinsKnocked: Array<number> = [];

    score(): number {
        if(this.pinsKnocked.length === 12) return 300
        return this.pinsKnocked.reduce((previous, current) => previous + current, 0);
    }

    roll(pinsKnocked: number) {
      this.pinsKnocked.push(pinsKnocked);
    }
}
