describe('My Example', function() {
  var isGreat = true;

  it('should be great', function() {
    expect(isGreat).to.equal(true);
  });

  it('should fail if it expects anything but greatness', function() {
    expect(isGreat).to.equal(false);
  });

  it('should have a pending test');
});