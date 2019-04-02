export interface UserInterface {
    name: string,
    surname: string,
    age: number
}

export class User implements UserInterface {
    constructor(
        public name: string = '',
        public surname: string = '',
        public age: number = 0
    ) { }
}