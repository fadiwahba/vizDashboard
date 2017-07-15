import { VizDashboardPage } from './app.po';

describe('viz-dashboard App', () => {
  let page: VizDashboardPage;

  beforeEach(() => {
    page = new VizDashboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
