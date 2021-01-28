const express = require('express');
const json = require('body-parser').json();

const PeopleService = require('./people.service');

const router = express.Router();

router
.route('/api/people')
.get((req, res, next) => {
  const people = PeopleService.getPeople();
  if (!people) {
    return res.status(400).error({
      error: 'There are no people in line',
    });
  }
  return res.json(people);
})
.delete((req, res, next) => {
  const people = PeopleService.deletePerson();
  if (!people) {
    return res.status(400).json({
      error: 'There are no people to delete',
    });
  }
  return res.json(people);
})
.post(json, (req, res, next) => {
  const { name } = req.body;
  const newPerson = name;

  if (!name) {
    return res.status(400).json({
      error: 'Please enter name',
    });
  }
  res.json(PeopleService.addPerson(newPerson));
});

module.exports = router;