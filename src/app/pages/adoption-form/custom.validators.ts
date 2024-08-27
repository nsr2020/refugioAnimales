import { ValidatorFn } from '@angular/forms';

export function validateDNI(): ValidatorFn {
  return (control) => {
    // Check if dni is valid
    const dni = control.value;
    if (!dni) { return null; }
    const dniRegex = /^\d{8}[a-zA-Z]$/;
    if (!dniRegex.test(dni)) { return { invalidDNI: true }; }
    // Check if dni letter is valid
    const dniLetter = dni[dni.length - 1];
    const dniNumber = dni.slice(0, dni.length - 1);
    const dniLetterCode = dniNumber % 23;
    const validLetters = 'TRWAGMYFPDXBNJZSQVHLCKET';
    if (validLetters[dniLetterCode] !== dniLetter.toUpperCase()) {
      return { invalidDNI: true };
    }
    return null;
  };
}

