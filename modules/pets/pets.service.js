const { Queue, showQ } = require('../queue/Queue');
const store = require('../../store');

const catQ = new Queue();
const dogQ = new Queue();

store.cats.forEach((cat) => catQ.enqueue(cat));
store.dogs.forEach((dog) => dogQ.enqueue(dog));

const CatService = {
    getCats(){
        const showCats = showQ(catQ);
        return showCats;
    },
    getFirstCat(){
        return catQ.peek();
    },
    adoptCat(){
        catQ.dequeue();
        return catQ
    },
};

const DogsService = {
    getDogs(){
        const showDogs = showQ(dogQ);
        return showDogs;
    },
    getFirstDog(){
        return dogQ.peek();
    },
    adoptDog(){
        dogQ.dequeue();
        return dogQ
    },
};

module.exports = {CatService, DogsService};