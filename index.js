
const TelegramBot           = require('node-telegram-bot-api');
const { createWriteStream } = require("node:fs");
const { appendFile }        = require('node:fs/promises');
const { join }              = require("node:path")
const { spawn }             = require('child_process');

const bot = new TelegramBot( process.env.BOT_TOKEM, { polling: true } );

async function sendMedia(chatID, fileAudio)
    {
        const date      = new Date();
        const filename  = `${date.getFullYear()}${date.getMonth()}${date.getDay()}${date.getHours()}${date.getMinutes()}`
        const options   = [
            '-i', './assets/base.mp4',
            '-i', fileAudio,
            '-c:v', 'copy', // Copiar o vídeo sem reencodificação
            '-c:a', 'libmp3lame', // Codec de áudio
            '-map', '0:v:0', // Mapear o vídeo do primeiro arquivo de entrada
            '-map', '1:a:0', // Mapear o áudio do segundo arquivo de entrada
            '-shortest', // Duração do vídeo igual ao áudio
            `./results/${filename}.mp4`
        ];

        const listener = spawn( "ffmpeg", options )

        listener.stderr.on( "data", (data) => {
            appendFile("logFfmpeg.txt", `${data.toString()}\n`)
        } )

        listener.on( "close", async () => {
            await bot.sendVideo( chatID, `./results/${filename}.mp4`)
        })
    }



bot.on('message', async (msg) => {

    const fileID = msg.voice?.file_id
    const chatID = msg.chat.id

    if( !msg.voice ) {
        bot.sendMessage( chatID, "Processamos apenas audio! 😁" )
        return
    }


    await bot.sendAnimation(chatID, "./assets/lina-poe-lalafell.gif")

    const fileStream    = bot.getFileStream( fileID );
    const filePath      = join(__dirname, 'assets', 'voices', `${fileID}.ogg`);
    const writeStream   = createWriteStream( filePath );

    fileStream
        .pipe(writeStream);

    writeStream.on('finish', async () => await sendMedia(chatID, filePath) );

    writeStream.on('error', async (err) => {

        console.error(`Erro ao baixar o arquivo: ${err}`);
        await bot.sendMessage(chatID, "problema no donwload, contate o suporte!");
    });

});

