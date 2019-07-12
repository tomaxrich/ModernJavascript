//alert('hello, world')
//console.log('hello, hello');

/*let age = 25;
let year = 2019;

console.log(age, year);

age = 30;
console.log(age);*/

const points = 100;
console.log(points);

var score = 75;
console.log(score);

//strings
let string = "this is a string";
console.log(string);
let email = 'mario@thenetninja.co.uk';

//string concat
let firstname = "George";
let lastname = "Sanderson";
let fullname = firstname + ' ' + lastname;
console.log(fullname);

//getting characters
console.log(fullname[3]);

//string length
console.log(fullname.length);

//string methods
console.log(fullname.toUpperCase());
let result = fullname.toLowerCase();
console.log(result, fullname);

let index = email.indexOf('@');
console.log(index);

//bool
let Boolean = true;
//null
let n_ull = null;
//for variables that haven't been defined yet
let notDefined = undefined;


//function declaration

greet();
greet();
greet();


function greet(){
    console.log('hello there');
}

//function expression
const speak = function(name = 'luigi', time = 'night'){
    console.log(`good ${time} ${name}`);
};

speak();
speak('dave');
speak('Mario', 'morning');
speak('Laura', 'day');
speak('George', 'evening');

/*const calcArea = function(radius){
    return 3.14 * radius**2;
    //console.log(area);
};*/


const calcVol = function(area){
    return area * 3;
};

// arrow function
const CalcArea = (radius) => {
    return 3.14 * radius**2;
}; 

const sayHello = () => console.log('Hello hello');

sayHello();
const area = CalcArea(5);
console.log(area);

console.log(calcVol(area));

//methods
const name = 'shawn';
name.toUpperCase();

//object literals
/*const blogs = [
    { title: 'why mac & cheese rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 50 }
];

console.log(blogs);
*/
let user = {
    name: 'çrystal', 
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'berlin',
    blogs: [
        { title: 'why mac & cheese rules', likes: 30 },
        { title: '10 things to make with marmite', likes: 50 }
        ],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    //can't use this in an arrow function
    //because it then refers to the global "this"
    logBlogs(){
        //console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
        console.log(this);
    }
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

console.log(user['email']);
user['name'] = 'çhung-li';
console.log(user['name']);

console.log(typeof user);

user.login();
user.logout();
user.logBlogs();


//Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area1 = 7.7;

console.log(Math.round(area1));
console.log(Math.floor(area1));
console.log(Math.ceil(area1));
console.log(Math.trunc(area1));

// random numbers

const random = Math.random();
//always between 0-1
console.log(random);
//between 1-100
console.log(Math.round(random * 100));
