import 'normalize.css';
import './style.less';
import { generate, nounPhrase } from '@autheur/generator';

const refreshButton = document.querySelector<HTMLButtonElement>('#refresh-button')!;
const sentenceContainer = document.querySelector<HTMLDivElement>('#sentence-container')!;

function refreshToken() {
  sentenceContainer.innerText = generate(nounPhrase());
}

refreshButton.onclick = () => {
  refreshToken();
};

refreshToken();
