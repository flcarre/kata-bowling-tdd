export class Game {
    pinsKnocked: Array<number> = [];

    score(): number {
        return this.pinsKnocked.reduce((previous, current) => previous + current, 0);
    }

    roll(pinsKnocked: number) {
      this.pinsKnocked.push(pinsKnocked);
    }
}
