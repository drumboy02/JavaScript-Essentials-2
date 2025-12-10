/*
Scenario:
create a Users class that will allow you to create objects containing a collection of individual
users (users are created using the User class from the previous task).

to create a collection, use a Map class (the key should be the email address, and the value
should be the User object). the class should provide the following methods:

    - add: add a single user, arguments are name, surname and email

    - delete: remove the user from the collection (the argument is the email)

    - get: retrieve a single user from the collection (the argument is the email)

    - getAll: retrieve all users from the collection (the argument is the name of the field by
      which the array is to be sorted: name, surname, or email)
      
test your solution using the following code:

let users = new Users();
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Xxxx", "Oooo", "dddd@gmail.com");
console.log(users.get("dddd@gmail.com"));
console.log(users.getAll("name").map(u => u.name));
console.log(users.getAll("surname").map(u => u.surname));
console.log(users.getAll("email").map(u => u.email));
*/

let nameRegExp = /^[A-Z][a-z]+$/;
let emailRegExp = /^([a-zA-Z]+\.)*[a-zA-Z]+@([a-zA-Z]+\.)+[a-zA-Z]{2,3}$/;

class User {
    #name;
    #surname;
    #email;

    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    get name() {
        return this.#name;
    }
    set name(val) {
        if (typeof val === 'string' && val.match(nameRegExp)) {
            this.#name = val;
        } else {
            throw(new Error(`Incorrect name format: ${val}`));
        }
    }
    get surname() {
        return this.#surname;
    }
    set surname(val) {
        if (typeof val === 'string' && val.match(nameRegExp)) {
            this.#surname = val;
        } else {
            throw(new Error(`Incorrect surname format: ${val}`));
        }
    }
    get email() {
        return this.#email;
    }
    set email(val) {
        if (typeof val === 'string' && val.match(emailRegExp)) {
            this.#email = val;
        } else {
            throw(new Error(`Incorrect email format: ${val}`));
        }
    }
}

class Users {
    #users;

    constructor() {
        this.#users = new Map();
    }

    add(name, surname, email) {
        try {
            this.#users.set(email, new User(name, surname, email));
        } catch (err) {
            console.log(err);
        }
    };

    delete(email) {
        this.#users.delete(email);
    };

    get(email) {
        return this.#users.get(email);
    };

    getAll(field) {
        // console.log('field:', field);
        let retVal = new Array();

        for (let user of this.#users.values()) {
            retVal.push(user);
        }

        retVal.sort((a, b) => {
            if (a[field] > b[field]) {
                return 1;
            } else if (a[field] < b[field]) {
                return -1;
            }
            return 0;
        })

        return retVal
    };
}





// sample solution:
// class Users {
//     #users;

//     constructor() {
//         this.#users = new Map();
//     }

//     add(name, surname, email) {
//         try{
//             this.#users.set(email, new User(name, surname, email));
//         } catch(e) {
//             console.log(e.message);
//         }
//     }

//     delete(email) {
//         return this.#users.delete(email);
//     }

//     get(email) {
//         return this.#users.get(email);
//     }

//     getAll(sortBy) { //name,surname,email
//         return [...this.#users].sort((u1,u2) => u1[1][sortBy] > u2[1][sortBy] ? 1 : -1).map(u => u[1]);
//     }
// }

let users = new Users();
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Mmmm", "Ffff", "eeee@gmail.com");
users.add("Aaaa", "Bbbb", "cccc@gmail.com");
users.add("Xxxx", "Oooo", "dddd@gmail.com");
console.log(users.get("dddd@gmail.com"));
console.log(users.getAll("name").map(u => u.name));
console.log(users.getAll("surname").map(u => u.surname));
console.log(users.getAll("email").map(u => u.email));