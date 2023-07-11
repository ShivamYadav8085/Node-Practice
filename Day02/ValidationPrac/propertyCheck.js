const checkProperty = (object, property) => {
  if (property) return object[property] ? "yes" : "no";

  if (object === undefined)
    throw new Error("Please enter the object and property name to check");
  else throw new Error("Please enter the property name to check");
};
try {
  console.log(checkProperty({ name: "raj", gender: "male" }, "gender"));
  // yes
  console.log(checkProperty({ name: "raj", gender: "male" }, "interests"));
  //no
  console.log(checkProperty({ name: "raj", gender: "male" }));
  //Please enter the property name to check
  console.log(checkProperty());
  //Please enter the object and property name to check
} catch (error) {
  console.log(error.message);
}
