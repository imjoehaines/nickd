var data = require('prettiest')()
var map = require('lodash/collection/map')

var Nickd = require('../src/nickd')
var nickd = new Nickd(data.tasks)

function add (task) {
  if (task) {
    task = task.join(' ')
    nickd.add(task)
    data.tasks = nickd.tasks
  }
}

function remove (task) {
  if (task) {
    task = task.join(' ')
    nickd.remove(task)
    data.tasks = nickd.tasks
  }
}

function list () {
  map(nickd.tasks, function (task, index) {
    var taskNumber = index + 1
    console.log('%s: %s', taskNumber, task)
  })
}

module.exports = {
  commands: {
    'add': {
      func: add,
      description: 'Adds a new task',
      help: 'add <task>'
    },

    'remove': {
      func: remove,
      description: 'Removes a new task',
      help: 'remove <task>'
    },

    'list': {
      func: list,
      description: 'Lists all tasks',
      help: 'list <task>'
    }
  }
}
