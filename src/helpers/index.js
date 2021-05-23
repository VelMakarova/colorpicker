export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}


export const componentToHex = (color) => {
  let hex = color.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

export const rgbToHex = (r, g, b) => "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
