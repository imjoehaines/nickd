var extend = require('lodash/object/extend')
var without = require('lodash/array/without')

var Nickd = function (cli) {
  this.tasks = []
  this.cli = cli ? cli : require('clicolor').cli()
}

Nickd.prototype = extend(Nickd.prototype, {
  add: function add (task) {
    this.tasks.push(task)
  },

  remove: function remove (task) {
    this.tasks = without(this.tasks, task)
  }
})

module.exports = Nickd
