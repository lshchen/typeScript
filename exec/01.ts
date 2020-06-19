console.log('aa');
interface Person {
    firstName:string,
    lastName: string
}
function fun (p:Person) {
    return 'hello' + p.lastName;
}
console.log(fun({lastName: 'aa', firstName: 'bb'}));
let anyThing: any = 'hello';
anyThing.setName('Jerry');
console.log(anyThing)
console.log(anyThing.myName);
console.log(anyThing.myName.firstName);
