import type { Gender } from '@autheur/datasets';

type WordForm = {
  gender: Gender;
  isPlural: boolean;
};

export type SpacerConfig = {
  noSpaceBefore?: boolean;
  noSpaceAfter?: boolean;
};

type GeneratedConfig = {
  word: string;
  form: WordForm;
} & SpacerConfig;

type BaseGenerator = {
  imposeForm: false;
  generate: (conf: { subject: { word?: string; form: WordForm }; nextWordConfig: ({ word?: string } & SpacerConfig) | null }) => Omit<GeneratedConfig, 'form'>;
};
type FormImposerGenerator = {
  imposeForm: true;
  generate: () => GeneratedConfig;
};
export type Generator = BaseGenerator | FormImposerGenerator;

function getSpacer({ currentWordConfig, nextWordConfig }: { currentWordConfig: SpacerConfig; nextWordConfig: SpacerConfig | null | undefined }) {
  if (!nextWordConfig) {
    return '';
  }

  return nextWordConfig.noSpaceBefore || currentWordConfig.noSpaceAfter ? '' : ' ';
}

const getDummySubject = (): { form: WordForm } => ({ form: { gender: Math.random() > 0.5 ? 'f' : 'm', isPlural: Math.random() > 0.5 } });

function createNextWordGetter() {}

export function generate(wordGenerators: Generator[]) {
  const { generate: subjectGenerator } = (wordGenerators.find(({ imposeForm }) => imposeForm) ?? {}) as FormImposerGenerator;

  const subject = subjectGenerator?.() ?? getDummySubject();
  let reversedSentence = [];
  let nextWordConfig = null;
  for (const { generate } of wordGenerators.slice().reverse()) {
    if (generate === subjectGenerator) {
      reversedSentence.push(getSpacer({ nextWordConfig, currentWordConfig: subject }), subject.word);
      nextWordConfig = subject;
    } else {
      const currentWordConfig: Omit<GeneratedConfig, 'form'> = generate({ subject, nextWordConfig });
      reversedSentence.push(getSpacer({ nextWordConfig, currentWordConfig }), currentWordConfig.word);
      nextWordConfig = currentWordConfig;
    }
  }

  return reversedSentence.slice().reverse().join('');
}
