export const transformers: { endingPattern: string; transformer: (radical: string) => string }[] = [
  { endingPattern: 's', transformer: (radical) => radical },
  { endingPattern: 'x', transformer: (radical) => radical },
  { endingPattern: 'au', transformer: (radical) => `${radical}x` },
  { endingPattern: 'al', transformer: (radical) => radical.replace(/l$/, 'ux') },
  { endingPattern: '', transformer: (radical) => `${radical}s` },
];

export function pluralize(radical: string) {
  const radicalLowercase = radical.toLowerCase();

  const { transformer } = transformers.find(({ endingPattern }) => radicalLowercase.endsWith(endingPattern)) ?? { transformer: (s: string) => s };

  return transformer(radicalLowercase);
}
