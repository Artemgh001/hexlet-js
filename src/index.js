import _ from "lodash";
function df() {
  console.log("Hello, Hexlet!");
  return _.last(["one", "two"]);
}

const capitalize = (text) => {
  if (text === "") {
    return "";
  }
  const firstChar = text[0].toUpperCase();
  const restSubstring = text.slice(1);
  return `${firstChar}${restSubstring}`;
};
export default capitalize;
