var chai = require('chai')

chai.use(function (chai, utils) {
  chai.Assertion.overwriteProperty('be', function (_super) {
    return function () {
      var be = function (x) {
        var obj = utils.flag(this, 'object')
        if (typeof x != 'undefined')
          new chai.Assertion(obj).to.equal(x)
        _super.apply(this, arguments)
      }
      be.__proto__ = this
      return be
    }
  })
})

module.exports = chai
