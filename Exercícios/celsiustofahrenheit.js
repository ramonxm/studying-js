function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrenheiExists = degree.toUpperCase().includes("F");

  if (!celsiusExists && !fahrenheiExists) {
    throw new Error("Grau não identificado");
  }

  let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  let degreeSign = "C";

  if (celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = (celsius) => (celsius * 9) / 5 + 32;
    degreeSign = "F";
  }

  return formula(updatedDegree) + degreeSign;
}

try {
  console.log(transformDegree("50C"));
} catch (error) {
  console.log(error.message);
}
