import puppeteer from "puppeteer";
import axios from "axios"

const appUrlBase = process.env.BASE_URL;
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({});
  page = await browser.newPage();
});
describe("Page Heading", () => {
  test("Heading", async () => {
    await page.goto(`${appUrlBase}/`);
    await page.waitForSelector("h1");
    const result = await page.evaluate(() => {
      return document.querySelector("h1").innerText;
    });
    expect(result).toEqual("TO DO LIST");
  });


  test("Todo List", async () => {
    await page.goto(`${appUrlBase}/`);
    await page.waitForSelector(".list");
    const todos = await page.evaluate(() => {
      return [...document.querySelectorAll(".list .title")].map(
        (el) => el.innerText
      );
    });

    expect(todos[0]).toEqual("My Todos");
  });
});
afterAll(() => {
  browser.close();
});
afterEach(() => {
  return axios.delete('http://localhost:8080/todos?_cleanup=true').catch(err => err)
})
beforeEach(() => {
  const todos = [
    {"name": "Refactoring", "id": 1},
    {"name": "Domain-driven design", "id": 2}
  ]
  return todos.map(item => axios.post('http://localhost:8080/todos', item, {headers: { 'Content-Type': 'application/json' }}))
})