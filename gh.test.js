describe("Github page tests", () => {
  let page;

  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(() => {
    page.close();
  });

  test("The h1 header content on the second page", async () => {
    await page.goto("https://github.com/features");
    await page.waitForSelector('h1', { timeout: 5000 });
    const title = await page.title();
    expect(title).toEqual('Features · GitHub');
  });

  test("The h1 header content on the third page", async () => {
    await page.goto("https://github.com/contact");
    await page.waitForSelector('h1', { timeout: 5000 });
    const title = await page.title();
    expect(title).toEqual('Contact GitHub · GitHub');
  });

  test("The h1 header content on the fourth page", async () => {
    await page.goto("https://github.com/about");
    await page.waitForSelector('h1', { timeout: 5000 });
    const title = await page.title();
    expect(title).toEqual('About · GitHub');
  });

  test("The first link attribute on the second page", async () => {
    await page.goto("https://github.com/features");
    const actual = await page.$eval("a", link => link.getAttribute('href'));
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button on the third page", async () => {
    await page.goto("https://github.com/contact");
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, { visible: true });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Sign up for free");
  });
});
