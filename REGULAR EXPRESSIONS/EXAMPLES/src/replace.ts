// @ts-ignore
const regex = /(\w+)\s(\w+)/;
const str = `Bond James `;
const subst = '$2 $1';

// The substituted value will be contained in the result variable
const result = str.replace(regex, subst);

console.log('Substitution result: ', result);
// Substitution result:  James Bond
