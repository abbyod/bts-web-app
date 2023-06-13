// TypeScript object
interface Person {
  name: string;
  age: number;
  eyeColour: string;
  sayHello: () => void;
}

const person: Person = {
  name: 'Abby',
  age: 24,
  eyeColour: 'Green',
  sayHello: function() {
    console.log('Hello!');
  }
};
