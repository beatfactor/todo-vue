describe('Component test for the TodoForm', function() {

  browser.baseUrl = browser.baseUrl || 'http://localhost:3000';

  it('render and test the component', async function(browser) {
    const component = await browser.mountVueComponent('/src/components/ToDoForm.vue');
    browser.expect(component).to.be.visible;

    const labelEl = await component.find('label[for="new-todo-input"]');
    expect(labelEl).text.toContain('What needs to be done?');

  });

  after(function(browser) {
    browser.quit();
  });

});