var extend = require('lodash/object/extend')
var without = require('lodash/array/without')
var contains = require('lodash/collection/contains')

var Nickd = function () {
  this.tasks = []
}

Nickd.prototype = extend(Nickd.prototype, {
  add: function add (task) {
    this.tasks.push(task)
  },

  remove: function remove (task) {
    this.tasks = without(this.tasks, task)
  },

  edit: function edit (task, edit) {
    if (contains(this.tasks, task)) {
      this.tasks[this.tasks.indexOf(task)] = edit
    }
  }
})

module.exports = Nickd
