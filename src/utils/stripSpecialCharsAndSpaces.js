export default function stripSpecialCharsAndSpaces(str) {
  return str.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, '');
}
