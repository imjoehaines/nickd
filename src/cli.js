var data = require('prettiest')()
var map = require('lodash/collection/map')
var chalk = require('chalk')

var Nickd = require('../src/nickd')
var nickd = new Nickd(data.tasks)

function add (task) {
  if (task) {
    task = task.join(' ')
    nickd.add(task)
    data.tasks = nickd.tasks
  }
}

function remove (index) {
  if (index) {
    nickd.remove(index)
    data.tasks = nickd.tasks
  }
}

function edit (args) {
  var index = args[0]
  var task = args.slice(1)

  if (index && task) {
    task = task.join(' ')
    nickd.edit(index, task)
    data.tasks = nickd.tasks
  }
}

function list () {
  map(nickd.tasks, function (task, index) {
    console.log('%s: %s', index + 1, chalk.blue(task))
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
      description: 'Removes a task',
      help: 'remove <task number>'
    },

    'edit': {
      func: edit,
      description: 'Edits a task',
      help: 'edit <task number> <edited task>'
    },

    'list': {
      func: list,
      description: 'Lists all tasks',
      help: 'list'
    }
  }
}
