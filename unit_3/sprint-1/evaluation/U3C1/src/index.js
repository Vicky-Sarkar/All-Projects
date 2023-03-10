import { template } from "@babel/core";

// Problem 1. complete the below function
function school(schoolName, location, established, ...subjects) {
  let obj = {}
  //"ABC School was established in 1991 at New Delhi."

  obj.name = `${schoolName}`;
  obj.location = `${location}`;
  obj.established = `${established}`;
  obj.subjects = `${subjects}`;
  obj.getGeneralInfo = () => {
    return `${schoolName} was established in ${established} at ${location}.`
  }
  //At ABC School we teach English, Hindi, Mathematics."
  obj.getSubjectsInfo = () => {
    return `At ${schoolName} we teach ${subjects.join(", ")}.`
  }
  return obj
}

// Problem 2.
let categoriesDirectory = {
  3: "Dessert",
  1: "MainCourse",
  2: "Starter"
};

let areas = [
  { id: 1, name: "British" },
  { id: 2, name: "Malaysian" }
];

let areasDirectory = areas.reduce((acc, item) => {
  acc[item.id] = item.name;


  return acc;
}, {});

let inputArray = [
  {
    idMeal: "52768",
    strMeal: "Apple Frangipan Tart",
    Category: 3,
    Area: 1,
  },

  {
    idMeal: "53049",
    strMeal: "Apam balik",
    Category: 3,
    Area: 2,
  },
  {
    idMeal: "52767",
    strMeal: "Bakewell tart",
    Category: 3,
    Area: 1,
  }
];
let newResult = [inputArray, categoriesDirectory, areasDirectory];

newResult.reduce((acc, item) => {

  //let x = []
  acc.push([{ productId: item.idMeal, productTitle: item.strMeal, Category: item.Category, Area: item.Area }])
  return acc
}, [])
let outputArray = ['Your solution here.']

export { inputArray, outputArray, school, categoriesDirectory, areas, areasDirectory };
