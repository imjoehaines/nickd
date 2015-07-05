var extend = require('lodash/object/extend')

var Nickd = function (tasks) {
  this.tasks = tasks ? tasks : []
}

Nickd.prototype = extend(Nickd.prototype, {
  add: function add (task) {
    this.tasks.push(task)
  },

  remove: function remove (index) {
    index = index - 1
    if (this.tasks.length > index) {
      this.tasks.splice(index, 1)
    }
  },

  edit: function edit (index, edit) {
    index = index - 1
    if (this.tasks.length > index) {
      this.tasks[index] = edit
    }
  }
})

module.exports = Nickd
