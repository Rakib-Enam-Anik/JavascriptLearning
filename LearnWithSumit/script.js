class car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    run(){
        console.log(this.name + 'is running');
    }
}

const bmw = new car('BMW', 1999);
const audi = new car('audi', 1999);

audi.run();