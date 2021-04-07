import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import Data from "./data.json"
import TestComponent from './TestComponent';

type USERS = typeof Data;

const name = "hello";

let nameChange = "hello";
nameChange = "hello2";

let username: String = "Hello"
let dummyNum: number = 2;
let bool: boolean = true;

let array1 = [true, false, true];
let array2 = [0,1,"hello"];


interface NAME {
  first: String;
  last?: String | null;
};

let nameObj: NAME = {first:"Yamada", last: "Taro"};
let nameObj2: NAME = {first:"Yamada"};
let nameObj3: NAME = {first:"Yamada", last: null};

const func1 = (x: number, y:number): number => {
  return x + y;
};

//Intersection Types
type PROFILE = {
  age: number;
  city: String;
};

type LOGIN = {
  username: String;
  password: String;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "XXX",
  password: "yyy",
};

//Union Types
let value: boolean | number
value = true;
value = 10;

let arrayUni: (number | String)[];
arrayUni = [0,1,2, "hello"];

let company: "Facebook" | "Google" | "Amazon"
company = "Amazon"

let memory: 256 | 512;
memory = 512;

//typrof
let msg: String = "Hi";
let msg2: typeof msg;

let animal = {cat: "small cat"};
let newAnimal: typeof animal = {cat: "bigCat"};

//keyof
type KEYS = {
  primary: String,
  secondary: string,

};

let key: keyof KEYS;
key = "primary";

//typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;
keySports = "soccer";

//enum
enum OS {
  Windows,
  Mac,
  Linux,
};

interface PC {
  id: number;
  OSType: OS;
};

const PC1: PC = {
  id:1,
  OSType: OS.Windows,
};

const PC2: PC = {
  id:2,
  OSType: OS.Mac,
};

const PC3: PC = {
  id:3,
  OSType: OS.Linux,
};


//型の互換性
const comp1 = "test";
let comp2:String = comp1;

let funcComp1 = (x: number) => {};
let funcComp2 = (x: String) => {};

//Generics
interface GEN<T>{
  item: T;
};
const gen0: GEN<String> = {item: "hello"};
const gen2: GEN<number> = {item: 100};

interface GEN1<T=String>{
  item: T;
};

const gen3: GEN1 = {item: "hello"};

interface GEN2<T extends String | number>{
  item: T;
};

const gen4: GEN2<String> = {item: "hello"};

function funcGen<T>(props: T) {
  return {item: props};
};

const gen6 = funcGen<String>("test");
const gen7 = funcGen<String | null>(null);

function funcGen1<T extends String | null>(props: T) {
  return { value: props};
};

const gen8 = funcGen1("hello");

interface Props {
  price: number;
};

function funcGen3<T extends Props>(props: T) {
  return {value: props.price};
};

const gen10 = funcGen3({price:10});

const funcGen4 = <T extends Props>(props: T) => {
  return {value: props.price};
};




const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello from App" />
      </header>
    </div>
  );
}

export default App
