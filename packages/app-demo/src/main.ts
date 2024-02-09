import { generate, noun } from '@autheur/generator';
import 'normalize.css';
import { registerPlausible } from './plugins/plausible';
import './style.less';

// Register plugins
registerPlausible();

const refreshButton = document.querySelector<HTMLButtonElement>('#refresh-button')!;
const sentenceContainer = document.querySelector<HTMLDivElement>('#sentence-container')!;

function refreshSentence() {
  sentenceContainer.innerText = generate([noun()]) + ' | ' + generate([noun()]);
}

refreshButton.onclick = refreshSentence;

refreshSentence();
