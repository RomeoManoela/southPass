export function generatePassword(): string {
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  const allCharacters = lowercaseLetters + uppercaseLetters + numbers + specialCharacters;

  let password = '';

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * allCharacters.length);
    password += allCharacters[randomIndex];
  }

  return password;
}
