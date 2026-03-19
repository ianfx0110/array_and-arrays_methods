// Helper function to display output on the webpage
function display(title, data) {
  const app = document.getElementById("app");

  const section = document.createElement("div");
  section.style.marginBottom = "20px";

  const heading = document.createElement("h3");
  heading.textContent = title;

  const pre = document.createElement("pre");
  pre.textContent = typeof data === "object"
    ? JSON.stringify(data, null, 2)
    : data;

  section.appendChild(heading);
  section.appendChild(pre);
  app.appendChild(section);
}

// ===== STUDENT CLASS =====
// A class is like a blueprint for creating students
class Student {
  constructor(id, name, course) {
    this.id = id; // student ID
    this.name = name; // student name
    this.course = course; // course name

    // Get today's date
    this.registered = new Date().toISOString().split("T")[0];
  }
}

// Set is used to store unique student IDs (no duplicates allowed)
const studentIDs = new Set();

function registerStudent(id, name, course) {
  // Check if ID already exists
  if (studentIDs.has(id)) {
    return "Student ID already exists";
  }

  // Create new student
  const student = new Student(id, name, course);

  // Save ID
  studentIDs.add(id);

  return student;
}

// Test student registration
display("Student Registration", registerStudent(101, "Kevin", "JavaScript"));

// ===== QUESTION 1: Inventory Matcher =====
function matchInventories(invA, invB) {
  // Combine both arrays and remove duplicates
  const uniqueItems = new Set([...invA, ...invB]);

  // Check if arrays are exactly the same
  const isIdentical =
    invA.length === invB.length &&
    invA.every((item, index) => item === invB[index]);

  return {
    totalUnique: uniqueItems.size,
    isIdentical
  };
}

display("Inventory Matcher", matchInventories(["pen", "book"], ["pen", "book"]));

// ===== QUESTION 2: Score Aggregator =====
function aggregateScores(scores) {
  const result = {};

  // Loop through scores
  scores.forEach(score => {
    // Convert to string so keys match
    const key = String(score);

    // Count occurrences
    result[key] = (result[key] || 0) + 1;
  });

  return result;
}

display("Score Aggregator", aggregateScores([10, 20, 10, 30, 20]));

// ===== QUESTION 3: Username Sanitizer =====
function sanitizeUsernames(users) {
  const names = new Set();

  users.forEach(user => {
    let name = user.name.trim(); // remove spaces

    // Capitalize first letter
    name = name[0].toUpperCase() + name.slice(1);

    names.add(name);
  });

  return [...names]; // convert Set back to array
}

display("Username Sanitizer", sanitizeUsernames([
  { name: "  kevin" },
  { name: "kevin" },
  { name: "john" }
]));

// ===== QUESTION 4: Tag Filter =====
function addDefaultTags(posts, newTag) {
  posts.forEach(post => {
    const tagSet = new Set(post.tags);

    // Add tag only if it doesn't exist
    if (!tagSet.has(newTag)) {
      post.tags.push(newTag);
    }
  });

  return posts;
}

display("Tag Filter", addDefaultTags([
  { title: "Post1", tags: ["js"] },
  { title: "Post2", tags: ["html"] }
], "web"));

// ===== QUESTION 5: Config Merger =====
function buildConfig(userConfig) {
  const defaults = { theme: "light", retries: 3 };

  // Use user values or defaults
  const config = {
    theme: userConfig.theme ?? defaults.theme,
    retries: userConfig.retries ?? defaults.retries
  };

  // Get unique letters from theme
  const themeCharacters = [...new Set(config.theme.split(""))];

  return {
    ...config,
    themeCharacters
  };
}

display("Config Merger", buildConfig({ theme: "dark" }));

// ===== QUESTION 6: Event Manager =====
function createEventManager() {
  const events = [];

  return {
    trigger(eventName) {
      events.push(eventName);
    },

    getEvents() {
      return events;
    }
  };
}

const manager = createEventManager();
manager.trigger("click");
manager.trigger("scroll");

display("Event Manager", manager.getEvents());

// ===== QUESTION 7: Array Intersection =====
function intersectArrays(arr1, arr2) {
  const set1 = new Set(arr1);

  return arr2.filter(item => set1.has(item));
}

display("Array Intersection", intersectArrays([1, 2, 3], [2, 3, 4]));

// ===== QUESTION 8: Cart Formatter =====
function formatCart(cartArray) {
  const prices = new Set();

  cartArray.forEach(item => {
    if (typeof item === "string") {
      prices.add(Number(item));
    } else {
      prices.add(item.price);
    }
  });

  let total = 0;

  prices.forEach(price => {
    total += price;
  });

  return total;
}

display("Cart Formatter", formatCart([
  "10",
  { price: 20 },
  "10"
]));

// ===== QUESTION 9: Value Swapper =====
function swapCoordinates(point) {
  const swapped = `${point.y},${point.x}`;

  return [swapped];
}

display("Value Swapper", swapCoordinates({ x: 5, y: 10 }));

// ===== QUESTION 10: Role Manager =====
function updateRoles(user, rolesArray) {
  rolesArray.forEach(role => user.roles.add(role));

  // Remove guest role
  user.roles.delete("guest");

  const rolesList = [...user.roles];

  return `${user.name} has ${rolesList.length} roles: ${rolesList.join(", ")}`;
}

const user = {
  name: "Kevin",
  roles: new Set(["guest"])
};

display("Role Manager", updateRoles(user, ["admin", "editor"]));
