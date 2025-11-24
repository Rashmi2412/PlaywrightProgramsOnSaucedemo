function sayHello(name)
{
    console.log("Hello, " +name );
}
function greetUser(callback){
    const userName = "Alice";
    callback(userName);
}
greetUser(sayHello);