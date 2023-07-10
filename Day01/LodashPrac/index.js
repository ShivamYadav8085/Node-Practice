import * as fs from 'node:fs/promises'

import _ from 'lodash';


fs.readFile("/Users/shivamy2/Desktop/Practice/NodeJs/Day01/Data/samples.json").then((content)=>{
    const data = JSON.parse(content)


    const malePopulation = _.filter(data,(person)=>person.gender==='male').length
    const femalePopulation = _.filter(data,(person)=>person.gender==='female').length
    console.log(`Male population: ${malePopulation}`);
    console.log(`Female population: ${femalePopulation}`);


    const vinayGajjarRecord = _.find(data,(person)=>person.name.firstName==='Vinay'&&person.name.lastName==='Gajjar')
    console.log(vinayGajjarRecord);

    const maleIds = []
    const femaleIds = []

    const maleUsers = []
    const femaleUsers=[]

    _.forEach(data,(person)=>{
        if(person.gender==='male'){
            maleUsers.push(`${person.name.firstName} ${person.name.lastName}`)
            maleIds.push(person.id)
        }
        else{
            femaleUsers.push(`${person.name.firstName} ${person.name.lastName}`)
            femaleIds.push(person.id)
        }
    })
    console.log("All Male User Id");
    console.log(maleIds);
    
    console.log("All Male User Id");
    console.log(femaleIds);

    console.log("All male users Full Name");
    console.log(maleUsers);

    console.log("All Female users full name");
    console.log(femaleUsers);


    const maleWithInterestInC = _.filter(data,(person)=>{
        return person.gender==='male'&&_.includes(person.interests,"c")
    }) 
    const femaleWithInterestInC = _.filter(data,(person)=>{
        return person.gender==='female'&&_.includes(person.interests,"c")
    }) 

    console.log(`Male with Interest In C language: ${maleWithInterestInC.length}`);
    console.log(`Female with Interest In C language: ${femaleWithInterestInC.length}`);


    // const sameInterestUser = _.intersectionWith(data,data,(arr1,arr2)=>{
    //      console.log(arr1);
    //      console.log(arr2);
    //      console.log(_.isEqual(arr1.interests,arr2.interests));
    //     return _.isEqual(arr1.interests,arr2.interests)
    // })   
    const groupByInterest = _.groupBy(data,"interests")

    const sameInterestUser = _.filter(groupByInterest,(group)=>group.length>1)

    const nameOfUserWithSameInterest = _.map(sameInterestUser,(sameInterestUserSet)=>{
        const fullNameArr = _.map(sameInterestUserSet,(users)=>{
            return `${users.name.firstName} ${users.name.lastName}`
        })
        return fullNameArr;
    })

    console.log("Same Interest Users");
    console.dir(nameOfUserWithSameInterest,{depth:null});

    const sortById = _.orderBy(data,['id'],['desc'])
    const sortByName = _.orderBy(data,['name.firstName'],['desc'])

    console.log("Sort Users By Id");
    console.log(sortById);

    console.log("Sort Users By First Name");
    console.log(sortByName);
})

