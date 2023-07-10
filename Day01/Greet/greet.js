import {argv} from 'node:process'

const greet = ()=>{
    console.log(`Good Morning, ${argv[2]}`);
}

export {greet};