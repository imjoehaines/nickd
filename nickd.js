var extend = require('lodash/object/extend')
var without = require('lodash/array/without')

var Nickd = function () {
  this.list = []
}

Nickd.prototype = extend(Nickd.prototype, {
  add: function (task) {
    this.list.push(task)
  },

  remove: function (task) {
    this.list = without(this.list, task)
  }
})

module.exports = Nickd
