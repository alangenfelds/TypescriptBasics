"use strict";
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["READ_ONLY"] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Artur',
    age: 35,
    hobbies: ['Bycicle', 'Piano'],
    role: Role.ADMIN
};
console.log(person.name);
console.log(person.role);
for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase());
}
