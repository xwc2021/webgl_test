import RGBA from "./RGBA";

export default class Buffer2D<T> {
    w: number;
    h: number;
    buffer: Array<Array<T>>;
    constructor(w: number, h: number) {
        this.w = w;
        this.h = h;
        this.buffer = new Array<Array<T>>(this.h);
        // console.log(this.buffer.length);
        for (let y = 0; y < this.h; ++y) {
            this.buffer[y] = new Array<T>(this.w);
        }
    }

    set(x: number, y: number, value: T) {
        this.buffer[y][x] = value;
    }

    get(x: number, y: number) {
        return this.buffer[y][x];
    }

    clear(value: T) {
        for (let y = 0; y < this.h; ++y) {
            for (let x = 0; x < this.w; ++x) {
                this.buffer[y][x] = value;
            }
        }
    }
}