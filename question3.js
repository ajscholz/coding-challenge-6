// Question 3 solution

const hex = '#2e819f';
const rgb = '234, 155, 19'

const hexOrRgb = value => value.includes(',') ? rgbToHex(value) : hexToRgb(value);

const rgbToHex = (value) => {
  let rgbArray = value.match(/(\d{1,3})/g); // Get r, g, b values individually
  let hexArray = rgbArray.map(x => { // Get an array of the three hex values
    const hex = Number(x).toString(16); // Convert string to int then hex
    return hex.length === 1 ? `0${hex}` : hex;
  });
  return `#${hexArray.join('')}`; // Hex value
}

const hexToRgb = hex => {
  if (hex.length === 4) hex = threeToSix(hex);
  let rgbVal = hex.substring(1)  // Get numbers only (no #)
                  .match(/.{2}/g) // Get array of pairs
                  .map(x => parseInt(x, 16)); // Change hex pairs to rgb values
  return rgbVal.toString(); // Return a string (not the array)
}

const threeToSix = hex => { // Makes a 3-digit hex code 6
  const regEx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  return hex.replace(regEx, (m, r, g, b) => '#' + r + r + g + g + b + b);
}
