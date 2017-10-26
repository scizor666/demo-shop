import ArrayUtils from "./ArrayUtils";

export default class DataUtils {

    static randomRating() {
        return Math.floor((Math.random() * 5) + 1);
    }

    static randomImage() {
        const options = [
            "https://s3-us-west-1.amazonaws.com/cookery-book/user_uploads/ff5aced0-f78d-478f-bb53-1aed680da5f9/6f2db64af78a9f2a338985524acc7669.jpeg",
            "https://s3-us-west-1.amazonaws.com/cookery-book/user_uploads/96ba7bbc-d0ad-406f-9843-bc5abbd3e557/images.jpeg",
            "https://s3-us-west-1.amazonaws.com/cookery-book/user_uploads/ce0bcd9b-fc47-4859-a024-1427a557f726/Supreme_pizza.jpg",
            "https://s3-us-west-1.amazonaws.com/cookery-book/user_uploads/705f14c8-3abb-40a4-972d-74d657d99f34/c700x420.jpg"
        ];
        return ArrayUtils.randomItem(options)
    }

    static randomPrice() {
        return (Math.random() * 100).toFixed(2)
    }

    static randomDescription() {
        const options = [
            "Пепперони, ветчина, шампиньоны, моцарелла и пармезан",
            "Бекон, пармезан, моцарелла, сливочный соус",
            "Курица, ананасы, соус сливочный, моцарелла",
            "Свинина, курица, пепперони, ветчина, бекон, помидоры",
        ];
        return ArrayUtils.randomItem(options);
    }

    static randomName() {
        const options = [
            "Пицца Деревенская",
            "Пицца Классика",
            "Пицца Карбонара",
            "Пицца Гавайская"
        ];
        return ArrayUtils.randomItem(options);
    }
}