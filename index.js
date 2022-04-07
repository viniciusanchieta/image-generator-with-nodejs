import generateImage from './generateImage.js';
import getTextTerminal from './getTextTerminal.js';

async function main() {
    const text = await getTextTerminal('Informe o texto que deseja adicionar na imagem: ');
    console.log(`Gerando imagem com o texto "${text}"`);
    await generateImage(text);
}


await main();
