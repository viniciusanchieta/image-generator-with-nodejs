import nodeHtmlToImage from 'node-html-to-image';
export default async function generateImage(text) {
    const html = `
    <html>
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;700&display=swap" rel="stylesheet">
        <style>
            body {
                background-color: #000;
                color: #fff;
                width: 720px;
                height: 1280px;
                font-family: 'Fira Code', monospace;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;">
        <h1 style="font-size: 72px;">${text}</h1>
    </body>
    </html>
    `;

    const options = {
        output: './output.png',
        type: 'png',
    };

    nodeHtmlToImage({ html, ...options })
        .then(() => {
            console.log('Imagem gerada com sucesso!');
        })
        .catch((error) => {
            console.error(error);
        });
}