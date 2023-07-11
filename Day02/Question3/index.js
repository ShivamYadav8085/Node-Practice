import _ from "lodash";

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

console.log("Name of each company");
_.forEach(companies, (company) => {
  console.log(company.name);
});

const companiesStartedAfter1987 = _.filter(companies, (company) => {
  return company.start > 1987;
});

console.log("Name of each company started after 1987");
_.forEach(companiesStartedAfter1987, (company) => console.log(company.name));

const companiesSortedInAscendingOrderByEndDate = _.orderBy(
  companies,
  ["end"],
  ["asc"]
);
console.log("Companies sorted inascending order by End date");
console.log(companiesSortedInAscendingOrderByEndDate);

const companiesSortedByAges = _.orderBy(
  companies,
  [
    (company) => {
      return company.end - company.start;
    },
  ],
  ["desc"]
);

console.log("Companies sorted by ages");

console.log(companiesSortedByAges);

const sumOfAges = _.reduce(
  companies,
  (sumOfAge, company) => {
    const age = company.end - company.start;
    sumOfAge += age;
    return sumOfAge;
  },
  0
);

console.log("Sum of ages of companies");

console.log(sumOfAges);

const newCompany = {
  name: "Company One",
  category: "Finance",
};
console.log("Destructuring use");
const print = ({name})=>{
	console.log(name);
}
print(newCompany)

const  sumOfParams=(...arrOfNum)=>{
	let sum =0;
	for(const i of arrOfNum)
	{
		sum+=i;
	}
	return sum;
}
console.log("Sum of arguments");

console.log(sumOfParams(1,2,3,5,4,6));


const pushArgInArr = (...values)=>{
	const arr = [];
	for(const i of values){
		if(typeof i === 'object')
		arr.push(...i);
		else
		arr.push(i)
	}
	return arr;
}
console.log("Collection of arguments");

console.log(pushArgInArr([1,2],"sa"));

let count =0;
const incrementCounter = ()=>{
	return ++count;
}
incrementCounter()
incrementCounter()
incrementCounter()
console.log(incrementCounter());

const destructureQuery = (urlString)=>{
  const url = new URL(urlString);
  let queryObj = {}
  url.searchParams.forEach((value,name)=>{
    queryObj[name]=value;
  })
  console.log(queryObj);
}

destructureQuery(`https://example.org/abc?foo=bar&s=9'`)