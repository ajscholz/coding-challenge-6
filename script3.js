// Question 3: Write a function that converts HEX to RGB. Then Make that
// function auto-dect the formats so that if you enter HEX color format it
// \returns RGB and if you enter RGB color format it returns HEX.

// I sourced a lot of this code from Stack Exchange, and made some
// tweaks I preferred. The RGB "input" accepts a string
const hex = '#2e819f';
const rgb = '234, 155, 19'

const hexOrRgb = value => {
  return value.includes(',') ? rgbToHex(value) : hexToRgb(value);
}

const rgbToHex = (value) => {
  let rgbArray = value.match(/(\d{1,3})/g);
  return '#' + rgbArray.map(x => {
    const hex = Number(x).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
}

const hexToRgb = hex =>
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16)).toString();
