import { launch } from 'puppeteer';
import fs from 'fs';

const showsString = fs.readFileSync('./full-shows.json', 'utf-8')
const shows = JSON.parse(showsString)

const string = fs.readFileSync('./slugs.json', 'utf-8')
const array = JSON.parse(string)

const COUNT = 59;

const init = async () => {
        const { seasons, id, slug } = array[COUNT - 1]

        const promises = new Array(seasons).fill(null).map(async (_, index) => {
            const browser = await launch({ headless: true });
            const page = await browser.newPage();

            await page.goto(`https://wondery.com/shows/${slug}/season/${index + 1}/`, { timeout: 0 });
            await page.waitForSelector('.episode-card')
            await page.waitForSelector('.episodes-list .episode-card')

            await page.waitForTimeout(9000);

            const response = {
                season: index + 1,
                title: await page.$eval('.title', response => response.innerText.replace(/Season.+\:/i, '').trim() || null),
                image: await page.$eval('.hero-image', response => response.src),
                episodes: await page.$$eval('.episodes-list .episode-card', response => {
                    return Array.from(response).map((node, index) => {
                        return {
                            title: node.querySelector('h3').innerText,
                            description: node.querySelector('p')?.innerText,
                            episode: index + 1,
                            file: 'https://podcast-api.netlify.app/placeholder-audio.mp3',
                        }
                    })
                })
            }

            await browser.close();
            return response
        })

        const result = await Promise.all(promises)

        fs.writeFileSync(`./dist/${id}.json`, JSON.stringify({
            ...shows.find(item => item.id === id),
            seasons: result,
        }, null, 2))
}



init()