export default class StringCalculator {
  constructor() {}
  Add(numberString: string = ""): number | boolean {
    if (numberString === "") {
      return 0;
    }
    const delimeter: string | boolean = this.isDelimeterPresent(numberString);
    if (delimeter) {
      numberString = this.ReplaceDelimeter(numberString, delimeter.toString());
    }
    const sanitizedNumberString = this.SanitizeString(numberString);
    if (!sanitizedNumberString) {
      return 0;
    }
    const numbers = sanitizedNumberString
      .split(",")
      .map((item) => Number(item || 0));
    return numbers.reduce((acc, item) => (acc += item), 0);
  }

  isDelimeterPresent(numberString: string = ""): string | boolean {
    if (numberString.substr(0, 2) === "//") {
      return numberString[2];
    }
    return false;
  }
  ReplaceDelimeter(numberString: string = "", delimeter: string): string {
    return numberString.substr(3).replace(RegExp(delimeter, "g"), ",");
  }
  SanitizeString(numberString: string = ""): string {
    return numberString.replace(/\n/g, ",");
  }
}
