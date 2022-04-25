export class Game {
    pinsKnocked: Array<number> = [];

    score(): number {
        if(this.pinsKnocked.length === 12) return 300;


        return this.pinsKnocked.reduce((previous, current, index) => {
          if(current === 10) {
            return previous + current + this.pinsKnocked[index+1] + this.pinsKnocked[index+2]
          }
          return previous + current
        }, 0);
    }

    roll(pinsKnocked: number) {
      this.pinsKnocked.push(pinsKnocked);
    }
}
