type Combineble = number | string;
type ResultType = "asNumber" | "asText";

function combine(n1: Combineble, n2: Combineble, resultType: ResultType) {
  let result;
  if (typeof n1 === "number" && typeof n2 === "number") {
    result = n1 + n2;
  } else {
    result = n1.toString() + n2.toString();
  }

  if (resultType === "asNumber") {
    return +result;
  } else {
    return result.toString();
  }
}

const combinedAges = combine(30, 26, "asNumber");
const combinedStringAges = combine("30", "26", "asNumber");
const combinedNames = combine("Artur", "Rebecca", "asText");
console.log(combinedAges);
console.log(combinedStringAges);
console.log(combinedNames);
