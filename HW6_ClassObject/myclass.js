class MyClass {
    #x = 0;

    #intX() {
        this.#x++;
        console.log(this.#x);
    }
    publicIntX() {
        this.#intX();
    }
    set #setX(x) {
        this.#x = x;
    }
    get #getX() {
        return this.#x;
    }
}
const m = new MyClass();
m.publicIntX();