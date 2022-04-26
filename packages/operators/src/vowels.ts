const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'œ'];
const vowelsAndH = [...vowels, 'h'];

export const getDeburredFirstCharacter = (str: string) => str.replace('œ', 'oe')[0]?.normalize('NFKD').replace(/[^\w]/g, '').toLowerCase() ?? '';

export const isFirstCharAVowel = (str?: string) => (str ? vowels.includes(getDeburredFirstCharacter(str)) : false);
export const isFirstCharAVowelOrAnH = (str?: string) => (str ? vowelsAndH.includes(getDeburredFirstCharacter(str)) : false);
