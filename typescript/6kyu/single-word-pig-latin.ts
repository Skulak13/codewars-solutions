//No regex version

export function pigLatin(string:string):string|null{
  const stringLow = string.toLowerCase();
  const chars = stringLow.split('');
  const vowels = ["a", "e", "i", "o", "u"];
  
  if (!chars.every(char => char >= 'a' && char <= 'z')) return null;
  
  if (vowels.includes(chars[0])) {
    return stringLow + "way";
  }
  
  else {
    for (let i = 0; i < chars.length; i++) {
      if (vowels.includes(chars[i])) {
        const sliced = stringLow.slice(0, i);
        return stringLow.slice(i) + sliced +"ay";
      }
    }
    return stringLow + "ay";
  }
}
