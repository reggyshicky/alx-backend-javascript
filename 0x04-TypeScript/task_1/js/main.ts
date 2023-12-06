interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    location: string
    yearsOfExperience?: number,
    [key: string]: any
}

interface Directors extends Teacher {
    numberOfReports: number
}


//The PrintTeacherFunction interface describes a function 
//that takes two string parameters (firstName and lastName) 
//and returns a string.
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}