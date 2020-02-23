enum Role {ADMIN = 'ADMIN', READ_ONLY = 'READ_ONLY', AUTHOR = 'AUTHOR'}

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: Role
} = {
    name: 'Artur',
    age: 35,
    hobbies: ['Bycicle', 'Piano'],
    role: Role.ADMIN
}

console.log(person.name)
console.log(person.role)

for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase())
}

