import StringCalculator from "../app/StringCalculator";
const stringCalculator = new StringCalculator();
test("Should give answer 0 for empty or no string", () => {
  expect(stringCalculator.Add("")).toBe(0);
  expect(stringCalculator.Add()).toBe(0);
});

test("Should give sum of all numbers separated by comma's", () => {
  // const stringCalculator = new StringCalculator();
  expect(stringCalculator.Add("1,2,3,4,5,6")).toBe(21);
  expect(stringCalculator.Add("23,12")).toBe(35);
});

test("Should give sum of all numbers separated by comma's but including new line", () => {
  // const stringCalculator = new StringCalculator();
  expect(stringCalculator.Add("1,2,\n3,4,\n5,6")).toBe(21);
  expect(stringCalculator.Add("\n23,\n12")).toBe(35);
});

test("Should give sum of all numbers separated by delimeter", () => {
  // const stringCalculator = new StringCalculator();
  expect(stringCalculator.Add("//;\n1;2,\n3;4;\n5;6")).toBe(21);
  expect(stringCalculator.Add("//;\n1;2")).toBe(3);
});
