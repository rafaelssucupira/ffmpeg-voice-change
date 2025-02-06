# ffmepg-voice-change
### Projeto de evangelização por meio de automação de audiocast

Problema: Criar um sistema que permita trocar o áudio de um vídeo existente, mantendo as imagens originais, para possibilitar a criação de audiocasts de maneira automatizada.

Desafios:

- Implementar uma rotina de automação para trocar o áudio de vídeos usando FFmpeg.
- Utilizar uma biblioteca para integração com o Telegram, para receber e processar solicitações de troca de áudio.
- Otimizar o uso de recursos no VPS, escolhendo o Telegram em vez do WhatsApp devido ao baixo consumo de memória.

O que Aprendi:

- Desenvolvi habilidades com a biblioteca FFmpeg para processar áudio e vídeo.
- Pratiquei o uso do módulo Spawn do Node.js para executar comandos de sistema.
- Apreendi a processar arquivos sob demanda com streams no Node.js, melhorando a eficiência do sistema.

# Guia
- [Features](#Features)
- [Instruções de execução](#Instruções-para-execução)
- [Contribua](#Contribua)

# Features
![Features](./feature.png)

**1.**  Envio do Áudio: O usuário envia um arquivo de áudio para o servidor.

**2.** Troca de Áudio com FFmpeg: O servidor utiliza o FFmpeg para iniciar a troca de áudio do vídeo original, utilizando streams para processar o arquivo de áudio sob demanda enviado pelo usuário.

**3.** Entrega do Novo Vídeo: O servidor envia o novo arquivo de vídeo (.mp4) com o áudio substituído para o usuário.

# Instruções de execução
```
git clone https://github.com/rafaelssucupira/ffmpeg-voice-change.git
```
Crie um arquivo .env para definir o tokem do bot no telegram
```
BOT_TOKEM=xxxxxx
```
Agora você estará pronto para executar
```
npm run start
```

# Contribua
Estou muito feliz em saber que você está interessado em contribuir com esse projeto! Se você quer nos ajudar, dê uma olhadinha nas nossas issues abertas e siga uma das seguintes opções:

- Reportar um novo bug.
- Discutir a respeito das issues atuais e possíveis novas features.
- Corrigir um Bug ou implementar uma nova feature.
- Corrigir erros de digitação ou adicionar traduções.

Para enviar novos **Pull Requests**, siga os seguintes passos:
- Crie um fork do projeto
- Faça suas mudanças e implemente testes pra ela.
- Garanta que todos os testes passem.
- Crie seu Pull Request e aguarde o review.
