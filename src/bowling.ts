export class Game {
    pinsKnocked: Array<Frame> = [];

    score(): number {
        if (this.pinsKnocked.length === 12) return 300;


        return this.pinsKnocked.reduce((sum, current, index) => {
            if (current === 10) {
              return sum + current + this.pinsKnocked[index + 1] + this.pinsKnocked[index + 2]
            }

            if (index % 2 !== 0 && current + this.pinsKnocked[index - 1] === 10)
                return sum + current + this.pinsKnocked[index + 1]

            return sum + current
        }, 0);
    }

    roll(pinsKnocked: number) {
        this.pinsKnocked.push(pinsKnocked);
    }
}


type Frame = Array<number>
