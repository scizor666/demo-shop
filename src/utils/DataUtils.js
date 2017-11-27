import ArrayUtils from "./ArrayUtils";

export default class DataUtils {

    static randomRating() {
        return Math.floor((Math.random() * 5) + 1);
    }

    static randomImage() {
        const options = [
            "/images/1.jpg",
            "/images/2.jpg",
            "/images/3.jpg"
        ];
        return ArrayUtils.randomItem(options)
    }

    static randomPrice() {
        return (Math.random() * 100).toFixed(2)
    }

    static randomDescription() {
        const options = [
            "Auribus teneo lupum, nam neque quomodo a me amittam invenio neque uti retineam scio.",
            "Auribus teneo lupum, nam neque quomodo a me amittam invenio neque uti retineam scio. Auribus teneo lupum, nam neque quomodo a me amittam invenio neque uti retineam scio. Auribus teneo lupum, nam neque quomodo a me amittam invenio neque uti retineam scio."
        ];
        return ArrayUtils.randomItem(options);
    }

    static randomName() {
        const options = [
            "Active Coat Lorem 1",
            "Active Coat Lorem 2",
            "Active Coat Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.3"
        ];
        return ArrayUtils.randomItem(options);
    }
}