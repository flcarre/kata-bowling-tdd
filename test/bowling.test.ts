import { Game } from "../src/bowling";

describe('test', () =>{
    it("total score should be 0 when any pins are knocked", () =>{
        const game = new Game();
        Array(20).fill(0).forEach(() => {
            game.roll(0)
        })
        expect(game.score()).toBe(0)
    })

    it("total score should be 20 when 20 pins are knocked", () =>{
        const game = new Game();
        Array(20).fill(0).forEach(() => {
            game.roll(1)
        })
        expect(game.score()).toBe(20)
    })

    it("perfect game with 12 strike should return 300", () => {
        const game = new Game();
        Array(12).fill(0).forEach(() => {
            game.roll(10)
        })
        expect(game.score()).toBe(300)
    })

    it("the first roll is a strike, then only hit 1 pins the next roll", () => {
        const game = new Game();
        game.roll(10);
        game.roll(1)
        game.roll(1)
        Array(16).fill(0).forEach(() => {
            game.roll(0)
        })
        expect(game.score()).toBe(14)
    })
})
