export function pxToNum(str) {
  return parseInt(str.replace("px", ""));
}

export function numToPx(num) {
  return num + "px";
}

export function fisrtToUpper(str) {
  return str.replace(str[0], str[0].toUpperCase());
}
