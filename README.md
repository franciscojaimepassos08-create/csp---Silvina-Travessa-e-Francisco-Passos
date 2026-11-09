# Convite digital — Silvina & Francisco

Convite responsivo em HTML, CSS e JavaScript, preparado para publicação na Vercel.

## Conteúdo incluído
- Capa com botão para abrir o convite.
- Mensagem de boas-vindas e versículo bíblico.
- Contagem decrescente para 24 de dezembro de 2026.
- Palavras do noivo e da noiva.
- Bênção e identificação dos pais.
- Programa: cerimónia civil às 10h30; passeata e fotografias entre as 13h30; Cerimónia Religiosa às 13h30; copo de água às 17h00.
- Localização da Sala Magna da Universidade Lúrio, com ligação para o Google Maps.
- Código de traje e formulário de confirmação por WhatsApp.
- Fotografias reais dos noivos aplicadas na capa e numa galeria de quatro imagens.
- Fundo da capa suavemente desfocado e escurecido para reforçar a leitura; tipografia ampliada e maior contraste.

## Personalizações importantes antes de publicar
1. Abra `script.js` e confirme o número em `WEDDING.whatsapp`. O número atualmente configurado foi mantido do projeto anterior: `258842820764`.
2. Confirme se a localização da Sala Magna está correta no mapa. A ligação está configurada para a Universidade Lúrio, em Nampula.
3. Para música de fundo, coloque na pasta principal um ficheiro de áudio a que tenha direito de utilização, em `audio/musica.mp3` (já incluído no projeto). A reprodução só começa após uma interação do visitante, devido às regras dos navegadores. A faixa de áudio incluída deve ser publicada apenas se tiveres os direitos ou autorização necessários para a utilizar online.
4. Para fotografias que apareçam a todos os convidados, coloque os ficheiros na pasta do projeto e defina-os como fundos no CSS, ou use o painel de personalização e depois incorpore os ficheiros no projeto antes de publicar. As imagens carregadas pelo painel ficam apenas no navegador de quem as carregou.

## Verificações antes de publicar
- Confirma o número de WhatsApp em `script.js` (`WEDDING.whatsapp`). Está configurado como `258842820764` e ficará visível no código público.
- Confirma os nomes, os nomes dos pais, os horários e o endereço/localização da celebração.
- O formulário não grava respostas numa base de dados: abre uma conversa do WhatsApp com a mensagem preenchida.
- O painel de personalização guarda as imagens apenas no navegador utilizado; não altera os ficheiros publicados para os outros convidados.
- O site é estático e não contém dependências npm nem um processo de build.

## Publicar no GitHub e na Vercel
1. Extrai o ZIP para uma pasta.
2. Cria um repositório no GitHub e envia para a raiz do repositório os ficheiros `index.html`, `style.css`, `script.js`, `vercel.json` e as pastas `imagens/` e `audio/`.
3. Na Vercel, escolhe **Add New → Project**, importa o repositório GitHub e mantém **Framework Preset: Other**.
4. Deixa **Build Command** vazio e define **Output Directory** como `.` (raiz do projeto). Faz o deploy.
5. Testa o endereço publicado num telemóvel e num computador, incluindo o botão de WhatsApp e a música.


- Extraia o ZIP.
- Envie a pasta do projeto para o repositório GitHub ou importe-a na Vercel.
- Não é necessário processo de build: é um site estático.
- O ficheiro `vercel.json` mantém a configuração de publicação estática.


## Melhorias de experiência (versão atualizada)
- Ao clicar em **Entrar no convite**, a reprodução da música é iniciada e o botão de música aparece no canto inferior direito.
- Se o navegador bloquear a reprodução, o botão aparece na mesma e permite iniciar a música com um toque.
- As secções entram com uma animação mais suave ao fazer scroll.
- Os três momentos do cronograma surgem em sequência, com um pequeno intervalo entre cada um.
- A preferência de movimento reduzido do dispositivo é respeitada.
