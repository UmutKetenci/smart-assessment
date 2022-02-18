const positions = [
  {
    name: "pos0",
    orgId: "1427ff32-ad88-4a46-ab2b-0b61337c1a11",
  },
  {
    name: "pos1",
    orgId: "a6e3b058-3596-413a-9810-66f5098f7c30",
  },
  {
    name: "pos2",
    orgId: "b9b88fd0-d36e-48ba-8607-07377f5c2907",
  },
  {
    name: "pos3",
    orgId: "1427ff32-ad88-4a46-ab2b-0b61337c1a11",
  },
];

const organizations = [
  {
    id: "a6e3b058-3596-413a-9810-66f5098f7c30",
    name: "org0",
  },
  {
    id: "b9b88fd0-d36e-48ba-8607-07377f5c2907",
    name: "org1",
  },
  {
    id: "1427ff32-ad88-4a46-ab2b-0b61337c1a11",
    name: "org2",
  },
];

// ASSESSMENT:
// Using array methods, create a new array of objects named 'positionsWithOrgNames'
// We want to put position name and its organization name together, using the orgId relationship
// Bonus point if you think about the time complexity, a fast solution, these arrays can be huge (thousands of elements maybe!)
// SOLUTION:

/* My Code */

//Function is named mergeArrays which kind of acts like a join in SQL.
const mergeArrays = (positions, organizations) => {
  //function takes 2 parameters.
  let result = positions.map((position) => {
    //position is only used for it's orgId to compare id's with the organization.
    const orgNameBySameId = organizations.find(
      // The most important part in this project is to find and return the organization item where organization's id is equal to the positions's orgId and return their names as an object afterwards.
      (organization) => organization.id === position.orgId
    );
    return {
      name: position.name,
      orgName: orgNameBySameId.name,
    }; //Returning the names object where id and orgId is the same.
  });
  return result; //Passing the result to the positionsWithOrgNames.
};

const positionsWithOrgNames = mergeArrays(positions, organizations);

/* My Code */

// so that when we log the final result
console.log(positionsWithOrgNames);
/* Should print:

[
  {name: "pos0", orgName: "org2"},
  {name: "pos1", orgName: "org0"},
  {name: "pos2", orgName: "org1"},
  {name: "pos3", orgName: "org2"}
]

*/
