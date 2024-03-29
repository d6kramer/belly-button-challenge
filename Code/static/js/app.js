//d3 read 
const sample = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

let sampleData = d3.json(sample).then(data => console.log(data));

console.log(sampleData);
