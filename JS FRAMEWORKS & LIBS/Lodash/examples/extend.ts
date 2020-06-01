import _ from 'lodash';

const somethingFromAPI = [
  { id: 1, whatever: 'foo' },
  { id: 2, whatever: 'bar' },
  { id: 3, whatever: 'bar' },
];

const missingParts = {
  editable: false,
  someProps: {
    clicked: false,
    size: 'normal',
  },
};

_.each(somethingFromAPI, (item) => {
  _.extend(item, missingParts);
});

console.log('Array from API extended: ', somethingFromAPI);
