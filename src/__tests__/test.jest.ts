import StringCalculator from "../app/StringCalculator";

test("Should give answer 0 for empty or no string", () => {
  const stringCalculator = new StringCalculator();
  expect(stringCalculator.Add("")).toBe(0);
  expect(stringCalculator.Add()).toBe(0);
});
