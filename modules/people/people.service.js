const { Queue, showQ } = require('../queue/Queue');
const store = require('../../store');

const people = new Queue();
store.people.forEach((person) => people.enqueue(person));

const PeopleService = {
    getPeople(){
        const showPeople = showQ(people);
        return showPeople;
    },
    addPerson(name){
        people.enqueue(name);
        return people;
    },
    deletePerson(){
        people.dequeue();
        return people;
    }
};

module.exports = PeopleService;