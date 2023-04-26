const delay = ms => new Promise(res => setTimeout(res, ms));

describe('Component test for the TodoForm', function() {

  browser.baseUrl = browser.baseUrl || 'http://localhost:3000';

  it('render and test the component', async function(browser) {
    const component = await browser.mountComponent('/test/component/ToDoForm_TestHarness.vue');
    browser.expect(component).to.be.visible;

    expect(await component.find('label[for="new-todo-input"]'))
        .text.toContain('What needs to be done?');

    expect(await component.find('#testHarnessOutput')).text.toBe('todo-added:', );

    //await delay(10000);
    browser.clearValue('#new-todo-input')
        .sendKeys('#new-todo-input', "abc")
        .click("button")
        .clearValue('#new-todo-input')
        .sendKeys('#new-todo-input', "def")
        .click("button");

    expect(await component.find('#testHarnessOutput')).text.toBe('todo-added: abcdef', );


  });

  after(function(browser) {
    browser.quit();
  });

});