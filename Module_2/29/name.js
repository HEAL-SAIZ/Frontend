const firstName = 'Test';
const lastName = 'Test';
const fatherName = 'Test';
const birthYear = 2003;
const major = 'Тестирую направление';

const result1 = firstName + ' ' + lastName + '\n' + fatherName + '\n' + 'Год рождения: ' + birthYear + '\n' + 'Направление: ' + major;

const result2 = `${firstName} ${lastName}
${fatherName}
Год рождения: ${birthYear}
Направление: ${major}`;

console.log('1-й способ:');
console.log(result1);

console.log('\n2-й способ:');
console.log(result2);