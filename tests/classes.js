class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    calculateDetail()
    {
        console.log(`my name is: ${this.name} and my age is: ${this.age}`);
    }
}
 
const Person1 = new Person('Harsh', 20);
const Person2 = new Person('Rohan', 33);

Person1.calculateDetail();
Person2.calculateDetail();