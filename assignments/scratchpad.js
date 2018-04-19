class UserBIO {
    constructor(obj) {
        this.firstName = obj.firstName;
        this.midi = obj.midi;
        this.lastName = obj.lastName;
        this.age = obj.age;
        this.countryOfOrigin = obj.countryOfOrigin;
        this.currentCountry = obj.currentCountry;
        this.city = obj.city;
        this.state = obj.state;
        this.userType = obj.userType;
        this.courseType = obj.courseType;
        this.cohortNum = obj.cohortNum;
    }
}

/*UserBIO.prototype.wholeName = function () {
    return `${this.firstName} ${this.lastName}`
};
UserBIO.prototype.milName = function () {
    return `${this.lastName}, ${this.firstName}`
}
*/

class PsycheInfo extends UserBIO  {
    constructor(obj){
        super(obj);
        this.learningStyle = obj.learningStyle;
        this.strengths = obj.strengths;
        this.weaknesses = obj.weaknesses;
        this.readingLevel = obj.readingLevel;
        this.highestEdcompleted = obj.highestEdcompleted;
    }
}

class CurrentKnowledge extends PsycheInfo {
    constructor(obj) {
        super(obj);
        this.pPe = obj.pPe
        this.yearspPe = obj.yearspPe
    }
};

class Blockers extends CurrentKnowledge {
    constructor(obj) {
        super(obj);
        this.biggestFear = obj.biggestFear;
        this.married = obj.married;
        this.kids = obj.kids;
        this.numOfKids = obj.numOfKids;
    }
};




const student0001 = new UserBIO({
    firstName: `Mykeal`,
    midi: `J`,
    lastName: `Kenny`,
    age: 28,
    countryOforigin: `US`,
    currentCountry: `US`,
    city: `Orlando`,
    state: `Florida`,
    userType: `Student`,
    courseType: `CS`,

    cohortNum: 10,
    learningStyle: `Visual/Tactile`,
    strengths: [
        `not afraid to fail`, `communication`, `dedication.`
    ],
    weaknesses: [
        `add`, `big family`, `lack of confidence`
    ],
    readingLevel: 12,
    highestEdcompleted: `GED`,
    pPe: false,
    yearspPe: null,
    biggestFear: `failure`,
    married: true,
    kids: true,
    numOfKids: 6,
})















console.log(student0001)
