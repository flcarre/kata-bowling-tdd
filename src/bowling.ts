export class Game {
    frames: Array<Frame> = [];
    actualFrame: Frame = []
    actualFrameIndex: number = 0;

    private static isStrike(frame: Frame): boolean {
        return frame[0] === 10
    }

    private static isSpare(frame: Frame): boolean {
        if(frame.length === 1) throw new Error("Too short frame")
        return frame[0] + frame[1] === 10
    }

    score(): number {
        if (this.frames.length === 12) return 300;


        return this.frames.reduce((sum, current, index) => {
            if (Game.isStrike(current)) {
                return sum + current[0] + this.frames[index + 1][0] + this.frames[index + 1][1]
            }

            if (Game.isSpare(current))
                return sum + current[0] + current[1] + this.frames[index + 1][0]

            return sum + current[0] + current[1]
        }, 0);
    }

    roll(pinsKnocked: number) {
        this.actualFrame.push(pinsKnocked);
        if (Game.isStrike(this.actualFrame) || this.actualFrame.length === 2) {
            this.frames.push(this.actualFrame)
            this.actualFrame = []
            this.actualFrameIndex++
        }
    }
}


type Frame = Array<number>
