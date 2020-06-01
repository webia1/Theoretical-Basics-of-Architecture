import _ from 'lodash';

let o = { id: 0, size: 10 };
let mapped_o = _.map(o, (v, k) => ({ key: k, value: v }));
let mapValues = _.mapValues(_.keyBy(mapped_o, 'key'), 'value');

console.log('Object: ', o);
console.log('Mapped Object: ', mapped_o);
console.log('MapValues of Mapped Object: ', mapValues);
