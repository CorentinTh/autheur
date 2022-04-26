export const transformers: { endingPattern: string; transformer: (radical: string) => string }[] = [
  { endingPattern: 'e', transformer: (radical) => radical },
  { endingPattern: 'if', transformer: (radical) => radical.replace(/f$/, 've') },
  { endingPattern: 'x', transformer: (radical) => radical.replace(/x$/, 'se') },
  { endingPattern: 'g', transformer: (radical) => `${radical}ue` },
  { endingPattern: '', transformer: (radical) => `${radical}e` },
];

export function feminize(radical: string) {
  const radicalLowercase = radical.toLowerCase();

  const { transformer } = transformers.find(({ endingPattern }) => radicalLowercase.endsWith(endingPattern)) ?? { transformer: (s: string) => s };

  return transformer(radicalLowercase);
}
