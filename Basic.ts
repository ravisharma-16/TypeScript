
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
console.log(checkVal);

let ravi : String = 'ravi sharma';

console.log(ravi,"hello");