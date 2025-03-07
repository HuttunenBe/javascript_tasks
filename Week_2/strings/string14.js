let description = " Javascript is fun and powerful ";

description = description.trim();
description = description.toLowerCase();
description = description.replace("powerful", "amazing");
let included = description.includes("fun");

console.log("Finald description: ", description);
console.log("Does it include 'fun' ", included);
