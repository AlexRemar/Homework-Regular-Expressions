export class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const cleanBegin = /^[^\d\-_]/.test(this.name);
    const cleanEnd = /[^\d\-_]+$/.test(this.name);
    const threeNumbersInLine = /[^\d{4,}]/.test(this.name);
    const cleanGarbage = /^[a-z0-9\-_]+$/i.test(this.name);
    return (cleanBegin, cleanEnd, threeNumbersInLine, cleanGarbage);
  }
}
