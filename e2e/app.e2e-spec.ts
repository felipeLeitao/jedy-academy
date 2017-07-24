import { JedyAcademyPage } from './app.po';

describe('jedy-academy App', () => {
  let page: JedyAcademyPage;

  beforeEach(() => {
    page = new JedyAcademyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
