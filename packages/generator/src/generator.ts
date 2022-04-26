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
  generate: (conf: { subject: { word?: string; form: WordForm } }) => Omit<GeneratedConfig, 'form'>;
};
type FormImposerGenerator = {
  imposeForm: true;
  generate: () => GeneratedConfig;
};
export type Generator = BaseGenerator | FormImposerGenerator;

function getSpacer({ generated, previouslyGenerated }: { generated: SpacerConfig; previouslyGenerated: SpacerConfig | null | undefined }) {
  if (!previouslyGenerated) {
    return '';
  }

  return generated.noSpaceBefore || previouslyGenerated.noSpaceAfter ? '' : ' ';
}

const getDummySubject = (): { form: WordForm } => ({ form: { gender: Math.random() > 0.5 ? 'f' : 'm', isPlural: Math.random() > 0.5 } });

export function generate(wordGenerators: Generator[]) {
  const { generate: subjectGenerator } = (wordGenerators.find(({ imposeForm }) => imposeForm) ?? {}) as FormImposerGenerator;

  const subject = subjectGenerator?.() ?? getDummySubject();
  let sentence = '';
  let previouslyGenerated = null;
  for (const { generate } of wordGenerators) {
    if (generate === subjectGenerator) {
      sentence += getSpacer({ previouslyGenerated, generated: subject }) + subject.word;
      previouslyGenerated = subject;
    } else {
      const generated = generate({ subject });
      sentence += getSpacer({ previouslyGenerated, generated }) + generated.word;
      previouslyGenerated = generated;
    }
  }

  return sentence;
}
