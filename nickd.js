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
  },

  list: function list () {
    this.tasks.map(function (task) {
      this.output(task)
    }.bind(this))
  },

  output: function output (message) {
    this.cli.display(message)
  }
})

module.exports = Nickd
