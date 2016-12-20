(function(){
	describe('HelloWorld Module test', function() {
		beforeEach(function(){
		    browser.driver.manage().window().setSize(379, 666);
		    browser.ignoreSynchronization = true;
		});

		it('should load helloworld module', function() {
			browser.get('/#/menu-abcd/hello');
			isPresent('.helloworld android-item');

      //Painting and cycles to complete
      browser.sleep(2000);

      expectmodule();

		});
		function isPresent(selector) {
			browser.wait(function() {
					return $(selector).isPresent();
			}, 6000, 'Main (' + selector + ') not present');
		}
		function expectmodule() {
			//Expect text
      var locator = by.css('.helloworld android-item');
      var item = element.all(locator).first();
      expect(item.getText()).toContain('Hello Name');
		}

		afterEach(function() {
			browser.ignoreSynchronization = false;
		});
	});
}());
