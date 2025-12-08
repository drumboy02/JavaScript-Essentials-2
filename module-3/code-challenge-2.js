/*
Scenario:
declare a User class that will allow you to create objects with user information (first name,
last name, email).

the data should be passed to the constructor and stored as private properties.

create setters and getters to handle them. use regular expressions to check if the data passed
to the constructor or setter is in the correct format (first and last name consist of letters
only, first letter upper-case, proper email address format). for simplicity, assume that an
email address can only consist of letters, while strings of letters can be seperated by dots.

for example, abc.def@ghi.jk or a@abc.def.gh will be valid, while a_b@abc.def or abcd1@efg.hi.jk
will be invalid.

if data is incompatible with the format, do not save it and throw an exception (Error class)
with an appropriate message.

test your solution using the following code:

try {
    let user1 = new User('Aaaa', 'Bbbb', 'Aaaa@gmail.com');
    console.log(user1);
    let user2 = new User('aaaa', 'Bbbb', 'Aaaa@gmail.com'); // -> Error
    
} catch(err) {
    console.log(err.message);
}
*/

class User {
    #fname;
    #lname;
    #email;

    constructor(fname, lname, email) {
        this.fname = fname;
        this.lname = lname;
        this.email = email;
    }
    
    set fname(name) {
        let re = /[A-Z][a-z]+$/
        if (re.test(name)) {
            this.#fname = name;
        } else {
            throw new Error("Name must consist of letters only, first letter upper-case");
        }
    };
    get fname() { return this.#fname };

    set lname(name) {
        let re = /[A-Z][a-z]+$/;
        if (re.test(name)) {
            this.#lname = name;
        } else {
            throw new Error("Name must consist of letters only, first letter upper-case");
        }
    };
    get lname() { return this.#lname };

    set email(email) { 
        let re = /^[a-z]+[\.a-z]*@[a-z]+\.[a-z]+[\.a-z]*/
        if (re.test(email)) {
            this.#email = email;
        } else {
            throw new Error("Email must use proper email address format");
        }
    };
    get email() { return this.#email };
}





// sample solution:
// let nameRegExp = /^[A-Z][a-z]+$/;
// let emailRegExp = /^([a-zA-Z]+\.)*[a-zA-Z]+@([a-zA-Z]+\.)+[a-zA-Z]{2,3}$/;

// class User {
//     #name;
//     #surname;
//     #email;

//     constructor(name, surname, email) {
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//     }

//     get name() {
//         return this.#name;
//     }
//     set name(val) {
//         if (typeof val === 'string' && val.match(nameRegExp)) {
//             this.#name = val;
//         } else {
//             throw(new Error(`Incorrect name format: ${val}`));
//         }
//     }
//     get surname() {
//         return this.#surname;
//     }
//     set surname(val) {
//         if (typeof val === 'string' && val.match(nameRegExp)) {
//             this.#surname = val;
//         } else {
//             throw(new Error(`Incorrect surname format: ${val}`));
//         }
//     }
//     get email() {
//         return this.#email;
//     }
//     set email(val) {
//         if (typeof val === 'string' && val.match(emailRegExp)) {
//             this.#email = val;
//         } else {
//             throw(new Error(`Incorrect email format: ${val}`));
//         }
//     }
// }

try {
    let user1 = new User('Aaaa', 'Bbbb', 'Aaaa@gmail.com');
    console.log(user1);
    let user2 = new User('aaaa', 'Bbbb', 'Aaaa@gmail.com'); // -> Error
} catch (err) {
    console.log(err.message);
}