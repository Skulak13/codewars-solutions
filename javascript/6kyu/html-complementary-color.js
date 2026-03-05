function getReversedColor(hexColor) {
  if (typeof hexColor !== "string" || !/^[0-9A-Fa-f]{0,6}$/.test(hexColor)) {
    throw new Error("Incorrect color format");
    }
  else {
    hexColor = hexColor.padStart(6, "0");
    
    const resultNumber = parseInt("FFFFFF", 16) - parseInt(hexColor, 16);
    
    return "#" + resultNumber.toString(16).toUpperCase().padStart(6, "0");
  }
}
