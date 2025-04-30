// Convert JS object to JSON string
function toJSONString(obj) {
    try {
        return JSON.stringify(obj);
    } catch (err) {
        console.error("Error stringifying object:", err.message);
        return null;
    }
}

// Parse JSON string to JS object
function fromJSONString(jsonStr) {
    try {
        return JSON.parse(jsonStr);
    } catch (err) {
        console.error("Error parsing JSON string:", err.message);
        return null;
    }
}

// Testing
const exampleAnimal = { id: 4, species: "Tiger", name: "Rajah", age: 7 };
const jsonStr = toJSONString(exampleAnimal);
console.log("JSON String:", jsonStr);

const parsedAnimal = fromJSONString(jsonStr);
console.log("Parsed Object:", parsedAnimal);

// Invalid case test
fromJSONString("{ bad json }");

function validateAnimal(animal) {
    const requiredFields = ["id", "species", "name", "age"];
    const errors = [];

    requiredFields.forEach(field => {
        if (!(field in animal)) {
            errors.push(`Missing field: ${field}`);
        }
    });

    if (typeof animal.id !== "number") errors.push("id must be a number");
    if (typeof animal.species !== "string") errors.push("species must be a string");
    if (typeof animal.name !== "string") errors.push("name must be a string");
    if (typeof animal.age !== "number") errors.push("age must be a number");

    if (errors.length > 0) {
        console.error("Validation errors:", errors);
        return false;
    }

    return true;
}

// Validation tests
console.log("Valid animal:", validateAnimal(parsedAnimal));
console.log("Missing fields:", validateAnimal({ name: "NoID" }));
console.log("Wrong types:", validateAnimal({ id: "abc", species: 123, name: true, age: "old" }));
