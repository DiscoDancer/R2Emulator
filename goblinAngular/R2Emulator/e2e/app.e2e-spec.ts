import { R2EmulatorPage } from './app.po';

describe('r2-emulator App', () => {
  let page: R2EmulatorPage;

  beforeEach(() => {
    page = new R2EmulatorPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
