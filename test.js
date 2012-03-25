describe('My Example', function() {
  var isGreat = true;

  it('should be great', function() {
    expect(isGreat).to.equal(true);
  });

  it('should fail if it expects anything but greatness', function() {
    expect(isGreat).to.equal(true);
  });

	it('should be an async test', function(done) {
	  setTimeout(function() {
		  expect(done).to.be.a(Function); // Calling done lets mocha know the test exec'd
		  done();
		},50);
	});

  it('should have a pending test');
});