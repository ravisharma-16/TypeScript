
// tsx basic.ts help of run commend

// function get(name : String) : String
// {
//     return `Hello ji ${name}`;
// }

// console.log(get('Ravi'));
// console.log(get(42));

let cup : number = 12;
let Name : string = "ravi";
let ApiRequest : number | string = '1M';
let ApiResponse : 'Pending' | 'Success' | 'erroe' | 'reject' = 'erroe';



let arr = ['23','35','67','87'];
let checkVal : string | undefined;
for(let idx of arr)
{
    if(idx === '35')
    {
        checkVal = idx;
        break;
    }
}
// console.log(checkVal);

let ravi : String = 'ravi sharma';

// console.log(ravi,"hello");

// let check2 : 'correct' | 'notccorrect' | 'sahi_hai' | 'sahi_nahi_hai' = 'correct';
// check2 = "notccorrect"

//                                SPECIAL TYPES (any , never , unknown ,  UNDEFINED & NULL)

let check = (num : Number) : void => 
{
    console.log(num);
}

//                          ANY
// The any type is the most flexible type in TypeScript.
// It essentially tells the compiler to skip type checking for a particular variable.
// While this can be useful in certain situations, it should be used sparingly as it bypasses TypeScript's type safety features.
let check2 = (num : any) : void => 
{
    console.log(num);
}

//                           NEVER
// The never type represents the type of values that never occur.
// It's used to indicate that something never happens or should never happen.
type numberof = 11 | 22;
let check3 = (num : numberof) : void => 
{
    console.log(num);
}

//                          UNKNOWN
// The unknown type is a type-safe counterpart of any.
// It's the type-safe way to say "this could be anything, so you must perform some type of checking before you use it".
let check4 = (val : unknown) : void => 
{
    if(typeof val === 'string')
    {
        console.log(val.toUpperCase());
    }
    else if(typeof val === 'number')
        {
            console.log(typeof val);
        }
}

// check(44);
// check2('ravi');
// check3(22);
// check4(77);

//                          UNDEFINED & NULL
// In TypeScript, both undefined and null have their own types, just like string or number.
// By default, these types can be assigned to any other type, but this can be changed with TypeScript's strict null checks.

let y : undefined = undefined;
let x : null = null;

