/// <reference types="@angular/localize" />

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// type User = {
//   name: string;
//   age: number;
//   address?: string;
// }
//
// const  user: User = {
//   name : "nikunj",
//   age : 20,
//   address : "abc street US"
// }
//
// function login(userData: User): User {
//   return userData;
// }
//
// console.log(login({name : '' , age : 0}))
//
// interface Transaction {
//   payerAccountNumber : number;
//   payeeAccountNumber : number;
// }
// interface BankDetails{
//   accountNumber: number;
//   accountHolder: string;
//   balance: number;
//   isActive: boolean;
//   transaction : Transaction[];
// }
// const transaction1: Transaction = {
//   payerAccountNumber:234,
//   payeeAccountNumber:123,
// }
// const transaction2: Transaction = {
//   payerAccountNumber:345,
//   payeeAccountNumber:321,
// }
//
// interface Book {
//   name: string;
//   price: number;
// }
// interface Ebook extends Book{
//   fileSize: number;
//   format: string;
// }
// type ID = number | string; // unions (or)
// interface AudioBook extends Ebook{
//   duration: ID;
// }
//
// const book: AudioBook = {
//   name: 'john doe',
//   price: 200,
//   fileSize: 300,
//   format: 'Pdf',
//   duration: 4,
// }
// console.log(book);


// const bankAccount : BankDetails = {
//   accountNumber: 12345,
//   accountHolder: "john bhai",
//   balance:20220,
//   isActive:true,
//   transaction: [transaction1,transaction2]
// }
// console.log(bankAccount);

// type ID = number | string;
//Narrowing
// function printId(id: number | string) {
//   if (typeof  id === "string")
//   {
//     console.log(id.toUpperCase());
//   }
//   else{
//     console.log(id)
//   }
// }
//
// printId("narrowing");

// function getFirstLatterCapital(id: string) {
//   return id.charAt(0).toUpperCase() + id.substr(1).toLowerCase();
// }
// console.log(getFirstLatterCapital("vivek"));


// function check<T>(arg: T): T {
//   console.log(arg);
//   return arg;
// }
// check([1,2,3]);

// interface OldAge {
//    age: number;
// }
//
// function getOldAge <T extends Player>(item: T[]): T {
//   return  item.sort((a,b) => b.age - a.age)[0];
// }
// const people = [{age:20},{age: 30},{age: 19},{age: 22},{age: 32}];
//
// interface Player {
//   name: string;
//   age: number;
// }
//
// const players: Player[] = [
//   {name: 'john', age: 30},
//   {name: 'nik', age: 23},
//   {name: 'hero', age: 20},
//   {name: 'namaste', age: 15}
// ]

// const person = getOldAge(players);
// function fetchPostData(Url: string){
//
// }

// interface IPost {
//   title: string;
//   id: number;
//   description: string;
// }
// interface IUser {
//   title: string;
//   id: number;
//   age: number;
// }

// const fetchPostData = async (Url: string): Promise<IPost[]> => {
//   const response = await fetch(`https://example.com${Url}`);
//   return response.json();
// }

// const fetchUserData = async <ResultType> (Url: string): Promise<ResultType> => {
//   const response = await fetch(`https://example.com${Url}`);
//   return response.json();
// }

// ( async () => {
//   const posts = await fetchPostData('/Posts');
//   posts[0]
// })();

// ( async () => {
//   const users = await fetchUserData<IUser[]>('/users');
//   users[0].age;
// })();


// class App {
//   name;
//   constructor(name: any)
//   {
//     this.name = name
//   }
//   getName(){
//    return  this.name;
//   }
// }
// let check = new App(123)
// console.log(check.getName());
//
// class Parent{
//   name:any;
//   getValue(arg: any){
//      this.name = arg;
//   }
// }
// class Child extends Parent{
//   getName(){
//     return this.name;
//   }
// }
// let recheck = new  Child();
// recheck.getValue(prompt("enter your name"));
// console.log(recheck.getName());

// function createPair<S, T>(v1: S, v2: T): [S, T] {
//   return [v1, v2];
// }
//
// console.log(createPair<string, number>('hello', 42)); // ['hello', 42]


//structural typing / Duck typing

// interface ICreadential {
//   username: string;
//   password: string;
//   isAdmin?: boolean;
// }
// function login(credentials: ICreadential):boolean {
//   console.log(credentials);
//   return true;
// }
//
// const user = {
//   username: "john",
//   password: "secret",
//   isAdmin: true,
// };
// login(user);

// interface IAuth {
//   username: string;
//   password: string;
//   login(username: string, password: string): boolean;
//
// }
//
// const auth = {
//   username: "for Practise",
//   password: 'nothing',
//   login(username: string, password: string) {
//     return true;
//   }
// }

// interface IProduct {
//   id: number;
//   title: string;
//   price: number;
// }
// let ourTuple: [number, boolean, string];

// // initialize correctly
// ourTuple = [5, false, 'Coding God was here'];
// // ourTuple= [10,true, "changed"];
//
// console.log(ourTuple);

// const car = {
//   type: "Ford",
// }
//
//
//
// car.type = "verna";
// car.type = 20;// error : can't assined number to string value



// const car: { type: string, mileage: number } = {
//   type: "Toyota",// Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
//   // mileage: 10,
// };
// car.mileage = 2000;


//enum by default start from 0 and you can set to manually than set it one by one increment

// //Default
// enum CardinalDirections {
//   North ,
//   East,
//   South,
//   West,
// }
// console.log("CardinalDirections.North",CardinalDirections.North);
// console.log("CardinalDirections.South",CardinalDirections.South);

// // Fully Initialized
//
// enum CardinalDirections1 {
//   North = 1 ,
//   East,
//   South,
//   West,
// }
// console.log("CardinalDirections1.North",CardinalDirections1.North);
// console.log("CardinalDirections1.South",CardinalDirections1.South);

// enum customEnum {
//   myFrist = "first",
//   mySecond = "second",
// }
// console.log(customEnum.myFrist);


// interface

// interface Rectangle {
//   height: number,
//   width: number
// }
//
// interface colorName extends Rectangle{
//   color: string;
// }
//
// const colorName: colorName = {
//   height: 20,
//   width: 10,
//   color: "blue",
// };
// console.log(colorName.height)
// console.log(colorName.width)
// console.log(colorName.color)


// union

// function sayHello(arg: string | number)
// {
//   console.log(arg);
// }
// sayHello("hello");

// function printStatesCode(arg: string | number){
//   if (typeof arg !== "number") {
//     console.log(`the status of code ${arg.toUpperCase()}`);
//   }
//   else{
//     console.log(arg);
//   }
// }
// printStatesCode(123);
//Learning typescript : classes , inheritance ,genirics ,Enums ,Utility Types ,Casting
