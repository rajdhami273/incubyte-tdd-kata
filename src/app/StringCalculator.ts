export default class StringCalculator {
  constructor() {}
  /**
   * 
   * @param numberString 
   * @returns number | boolean
   */
  public Add(numberString: string = ""): number | boolean {
    // take care of empty string
    if (numberString === "") {
      return 0;
    }

    // get the delimeter if present else False
    const delimeter: string | boolean = this.isDelimeterPresent(numberString);

    // if delimeter is present then replace that delimeter with "," else do nothing
    if (delimeter) {
      numberString = this.ReplaceDelimeter(numberString, delimeter.toString());
    }

    // get Sanitized string i.e., replacing new line with commas
    const sanitizedNumberString = this.SanitizeString(numberString);

    // if after sanitizing the string is empty, return False
    if (!sanitizedNumberString) {
      return 0;
    }

    // Now we have the final set of numbers, so get them inside an array
    const numbers = sanitizedNumberString
      .split(",")
      .map((item) => Number(item || 0));

    // If numbers contain any negative number, return false
    if (this.isNegativeNumberPresent(numbers)) {
      return false;
    }

    // Add all the numbers
    return numbers.reduce((acc, item) => (acc += item), 0);
  }

  /**
   * 
   * @description Checks presence of delimeter, returns it else returns false
   * @param numberString string 
   * @returns string | boolean
   */
  private isDelimeterPresent(numberString: string = ""): string | boolean {
    if (numberString.substr(0, 2) === "//") {
      return numberString[2];
    }
    return false;
  }

  /**
   * 
   * @description Replaces delimeter with ","
   * @param numberString string
   * @param delimeter string
   * @returns string
   */
  private ReplaceDelimeter(
    numberString: string = "",
    delimeter: string
  ): string {
    return numberString.substr(3).replace(RegExp(delimeter, "g"), ",");
  }

  /**
   * 
   * @description Sanitizes numberString i.e., replaces "\n" with ","
   * @param numberString 
   * @returns string
   */
  private SanitizeString(numberString: string = ""): string {
    return numberString.replace(/\n/g, ",");
  }

  /**
   * 
   * @description Checks for negative numbers, true if present else false
   * @param numbers number[]
   * @returns boolean
   */
  private isNegativeNumberPresent(numbers: number[] = []) {
    for (let number of numbers) {
      if (number < 0) {
        return true;
      }
    }
    return false;
  }
}
