const firstName = 'Test';
const lastName = 'Test';
const fatherName = 'Test';
const birthYear = 2003;
const major = '�������� �����������';

const result1 = firstName + ' ' + lastName + '\n' + fatherName + '\n' + '��� ��������: ' + birthYear + '\n' + '�����������: ' + major;

const result2 = `${firstName} ${lastName}
${fatherName}
��� ��������: ${birthYear}
�����������: ${major}`;

console.log('1-� ������:');
console.log(result1);

console.log('\n2-� ������:');
console.log(result2);