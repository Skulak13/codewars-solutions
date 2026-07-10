export function pigLatin(str: string): string | null {
  str = str.toLowerCase();
  if (!/^[a-z]+$/.test(str)) return null;

  if (/^[aeiou]/.test(str)) return str + "way";

  const i = str.search(/[aeiou]/);
  return i === -1 ? str + "ay" : str.slice(i) + str.slice(0, i) + "ay";
}


/*No regex version

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

*/
