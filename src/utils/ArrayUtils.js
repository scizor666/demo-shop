export default class ArrayUtils {

    static times(times, callback) {
        return Array.apply(null, new Array(times)).map((_, i) => callback(i));
    }

    static randomItem(options) {
        return options[Math.floor(Math.random() * options.length)];
    }
}