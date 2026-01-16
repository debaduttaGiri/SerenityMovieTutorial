namespace SereneMovieTutorial.Modules.Default.Person {
    export enum Gender {
        Male = 1,
        Female = 2
    }
    Serenity.Decorators.registerEnumType(Gender, 'SereneMovieTutorial.Modules.Default.Person.Gender', 'MovieDB.Gender');
}

