const { createWorker } = require('tesseract.js');
const path = require('path');


(async () => {

const worker = await createWorker({
  langPath: path.join(__dirname, 'data'),
  logger: m => console.log(m), // Add logger here
});


  await worker.loadLanguage('eng');
  await worker.initialize('eng');

await worker.setParameters({
    tessedit_char_whitelist: '0123456789',
  });

  const { data: { text } } = await worker.recognize('./game.png');

  console.log(text);
  await worker.terminate();
})();
