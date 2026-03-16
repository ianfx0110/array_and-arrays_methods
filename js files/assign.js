// Remove Property From Object

// Write a function that removes a specified property from an object
// without modifying the original object.

function removeProperty(obj, property) {
  const newObj = { ...obj };
  delete newObj[property];
  return newObj;
}

// Add Property To Object
// Write a function that adds a specified property and value to an object
// without modifying the original object.
function addProperty(obj, property, value) {
  return { ...obj, [property]: value };
}

// Update Property Value In Object
// Write a function that updates a specified property value in an object
// without modifying the original object.
function updateProperty(obj, property, value) {
  if (!(property in obj)) return { ...obj };
  return { ...obj, [property]: value };
}

// Check Property Existence In Object
// Write a function that checks if a specified property exists in an object.
function hasProperty(obj, property) {
  return Object.prototype.hasOwnProperty.call(obj, property);
}

// List All Properties Of Object
// Write a function that returns an array of all property names in an object.
function listProperties(obj) {
  return Object.keys(obj);
}
