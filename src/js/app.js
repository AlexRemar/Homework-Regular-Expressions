class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const cleanBeginNumbers = /^[^\d]/.test(this.name);
    const cleanBeginDash = /^[^-]/.test(this.name);
    const cleanBeginUnderlining = /^[^_]/.test(this.name);
    const cleanEndNumbers = /[^\d]+$/.test(this.name);
    const cleanEndDash = /[^-]+$/.test(this.name);
    const cleanEndUnderlining = /[^_]+$/.test(this.name);
    const threeNumbersInLine = !(/(\d)(\1{3,})/.test(this.name));
    const cleanGarbage = /^[a-z0-9\-_]+$/i.test(this.name);
    const arr = [cleanBeginNumbers, cleanBeginDash, cleanBeginUnderlining,
      cleanEndNumbers, cleanEndDash, cleanEndUnderlining,
      threeNumbersInLine, cleanGarbage];
    const result = arr.every((i) => i === true);
    return result;
  }
}

export default Validator;
