describe('To-Do List End-to-End Tests', function() {

  // using the new element() global utility in Nightwatch 2 to init elements
  // before tests and use them later
  const todoElement = element('#new-todo-input');
  const addButtonEl = element('#todo-list button[type="submit"]');

  it('should add a todo using global element()', function() {
    ///////////////////////////////////////////////////
    // browser can now also be accessed as a global   |
    ///////////////////////////////////////////////////

    // adding a new task to the list
    browser
      .navigateTo(browser.baseUrl)
      .sendKeys(todoElement, 'what is nightwatch?')
      .click(addButtonEl);

    ///////////////////////////////////////////////////
    // global expect is equivalent to browser.expect  |
    ///////////////////////////////////////////////////

    // verifying if there are 3 tasks in the list
    expect.elements('#todo-list ul li').count.toEqual(5);

    // verifying if the 5th task if the one we have just added
    const lastElementTask = element({
      selector: '#todo-list ul li',
      index: 4
    });

    expect(lastElementTask).text.toContain('what is nightwatch?');

    // find our task in the list and mark it as done
    lastElementTask.findElement('input[type="checkbox"]', function(inputResult) {
      if (inputResult.error) {
        throw inputResult.error;
      }

      const inputElement = element(inputResult.value);
      browser.click(inputElement);
    });

    // verify if there are 2 tasks which are marked as done in the list
    expect.elements('#todo-list ul li input:checked').count.toEqual(3);
  });

});
