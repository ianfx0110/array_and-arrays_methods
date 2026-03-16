// ===== Bonus Challenge — Student Class System =====

class Student {
  constructor(id, name, course) {
    this.id = id;
    this.name = name;
    this.course = course;
    this.registered = new Date().toISOString().split("T")[0];
  }
}

const studentIDs = new Set();

function registerStudent(id, name, course) {
  if (studentIDs.has(id)) {
    console.log("Student ID already exists");
    return null;
  }

  const student = new Student(id, name, course);
  studentIDs.add(id);

  const jsonData = JSON.stringify(student, null, 2);
  console.log(jsonData);

  return student;
}

// Example
registerStudent(101, "Kevin", "JavaScript");


// ===== Question 21 — Inventory Matcher =====

function matchInventories(invA, invB) {
  const uniqueItems = new Set([...invA, ...invB]);

  const isIdentical =
    invA.length === invB.length &&
    invA.every((item, index) => item === invB[index]);

  return {
    totalUnique: uniqueItems.size,
    isIdentical
  };
}


// ===== Question 22 — Score Aggregator =====

function aggregateScores(scoreArray) {
  const result = {};
  const unique = new Set(scoreArray.map(String));

  unique.forEach(score => {
    result[score] = scoreArray.filter(x => String(x) === score).length;
  });

  return result;
}


// ===== Question 23 — Username Sanitizer =====

function sanitizeUsernames(users) {
  const names = new Set();

  users.forEach(user => {
    let name = user.name.trim();
    name = name[0].toUpperCase() + name.slice(1);
    names.add(name);
  });

  return [...names];
}


// ===== Question 24 — Tag Filter =====

function addDefaultTags(posts, newTag) {
  posts.forEach(post => {
    const tagSet = new Set(post.tags);

    if (!tagSet.has(newTag)) {
      post.tags.push(newTag);
    }
  });

  return posts;
}


// ===== Question 25 — Config Merger =====

function buildConfig(userConfig) {
  const defaults = { theme: "light", retries: 3 };

  const config = {
    theme: userConfig.theme ?? defaults.theme,
    retries: userConfig.retries ?? defaults.retries
  };

  const themeChars = [...new Set(config.theme.split(""))];

  return {
    ...config,
    themeChars
  };
}


// ===== Question 26 — Event Manager (Closure) =====

function createEventManager() {
  const events = [];
  const uniqueEvents = new Set();

  return {
    trigger(eventName) {
      events.push(eventName);
      uniqueEvents.add(eventName);
    },

    getEvents() {
      return events;
    }
  };
}


// ===== Question 27 — Array Intersection =====

function intersectArrays(arr1, arr2) {
  const set1 = new Set(arr1);

  return arr2.filter(item => set1.has(item));
}


// ===== Question 28 — Cart Formatter =====

function formatCart(cartArray) {
  const prices = new Set();

  cartArray.forEach(item => {
    if (typeof item === "string") {
      prices.add(Number(item));
    } else if (typeof item === "object") {
      prices.add(item.price);
    }
  });

  let total = 0;

  prices.forEach(price => {
    total += price;
  });

  return total;
}


// ===== Question 29 — Value Swapper =====

function swapCoordinates(pointObj) {
  const { x, y } = pointObj;

  const swapped = `${y},${x}`;

  return [swapped];
}


// ===== Question 30 — Role Manager =====

function updateRoles(userObj, rolesArray) {
  rolesArray.forEach(role => userObj.roles.add(role));

  userObj.roles.delete("guest");

  const rolesList = [...userObj.roles];

  return `${userObj.name} has ${rolesList.length} roles: ${rolesList.join(", ")}`;
}
