const request = require('request');
const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');
const { JSDOM } = require('jsdom');

function getPics(hrefs) {
  hrefs.forEach(itm => {
    request(itm.href, (err, res, body) => {
      const document = new JSDOM(body).window.document;
      const imgs = Array.from(document.querySelectorAll('p a img')).slice(0, -1);
      const allPicHrefs = imgs.map(itm => {
        const uri = 'https:' + itm.parentElement.getAttribute('href');
        return /\?(\S*)&name/.exec(uri)[1];
      });

      saveImgs(itm, allPicHrefs);
    });
  });
}

function saveImgs(curBook, allPicHrefs) {
  const curDir = `./results/${curBook.title}`;
  mkdirIfNotExist(curDir);

  printLog(`// start book "${curDir}", contains ${allPicHrefs.length} img:\n`);
  allPicHrefs.forEach(itm => {
    const curFileName = /([_0-9]*\.jpg)$/.exec(itm)[0];
    request('https:' + itm).pipe(fs.createWriteStream(path.join(curDir,curFileName)));
    printLog(`\t\tend img ${curFileName}`)
  });
  printLog(`// end book "${curDir}"`);
}

function mkdirIfNotExist(dir) {
  if ( !fs.existsSync(path.join(__dirname,dir)) ) {
    fs.mkdirSync(path.join(__dirname, dir));
  }
}

function printLog(str) {
  console.log(str);
  fs.appendFileSync(path.join(__dirname, './results', 'record.txt'), str, 'utf8');
}

request('https://www1.pconline.com.cn/pcedu/specialtopic/wowmh/',{encoding: null}, (err, res, body) => {
  const document = new JSDOM(iconv.decode(body, 'gb2312')).window.document;
  const imgs = Array.from(document.querySelectorAll('td a img')).slice(1);
  const allPageHrefs = imgs.map((itm, i)=> {
    const title = itm.getAttribute('alt');
    const href = itm.parentElement.getAttribute('href');
    return {
      href: i===2?href:href.substring(0, href.length - 5) + '_all.html#content_page_1',
      title
    };
  });

  mkdirIfNotExist('./results');
  printLog('//目录链接: \n' + JSON.stringify(allPageHrefs));
  getPics(allPageHrefs);
});
