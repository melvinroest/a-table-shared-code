export function toSnakeCase(string: string) {
  // https://stackoverflow.com/questions/52963900/convert-different-strings-to-snake-case-in-javascript
  return string.charAt(0).toLowerCase() + string.slice(1) // lowercase the first character
    .replace(/\W+/g, " ") // Remove all excess white space and replace & , . etc.
    .replace(/([a-z])([A-Z])([a-z])/g, "$1 $2$3") // Put a space at the position of a camelCase -> camel Case
    .split(/\B(?=[A-Z]{2,})/) // Now split the multi-uppercases customerID -> customer,ID
    .join(' ') // And join back with spaces.
    .split(' ') // Split all the spaces again, this time we're fully converted
    .join('_') // And finally snake_case things up
    .toLowerCase() // With a nice lower case
}
  
export function arrayBufferToBase64(buffer: ArrayBuffer) {
  let binary = '';
  let bytes = new Uint8Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}