import { Game } from "../src/bowling";

describe('test', () =>{
    it("total score should be 0 when any pins are knocked", () =>{
        const game = new Game();
        Array(20).forEach(() => {
            game.roll(0)
        })
        expect(game.score()).toBe(0)
    })

    it("total score should be 0 when any pins are knocked", () =>{
        const game = new Game();
        Array(20).forEach(() => {
            game.roll(1)
        })
        expect(game.score()).toBe(20)
    })
})
