let urlDirectory = 'https://www.gotoauction.com/sales/viewDirectory'
const puppeteer = require('puppeteer')
async function scrape() {
   const browser = await puppeteer.launch({})
   const page = await browser.newPage()

   await page.goto(urlDirectory)
   const text = await page.evaluate(() => {
    const elements = document.querySelectorAll('div.featured_pic > div > div');
    const result = [];
    // document.title = 'New Title';
    for (let i = 0; i < elements.length; i++) {
      let txt = elements[i].textContent
      txt = txt.replace(/\n/g,' ')
      txt = txt.replace(/\t/g,'')
      result.push(txt.trim());
    }
    return result;
  });
    // var element = await page.waitForSelector("div.featured_pic")
    // var text = await page.evaluate(element)
    console.log(text)
  //  browser.close()
}
scrape()