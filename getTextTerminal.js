import readline from 'readline';

export default async function getTextTerminal(text) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        rl.question(`${text}`, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}