export function pxToInt(str) {
  return parseInt(str.replace("px", ""));
}

export function intToPx(num) {
  return num + "px";
}

export function fisrtToUpper(str) {
  return str.replace(str[0], str[0].toUpperCase());
}
