var mocha = require('mocha')
var expect = require('expect')

var Nickd = require('../src/nickd')

var describe = mocha.describe
var it = mocha.it
var beforeEach = mocha.beforeEach

describe('nickd', function () {
  var nickd
  beforeEach(function () {
    nickd = new Nickd()
  })

  it('should be initialisable', function () {
    expect(function () {
      new Nickd() // eslint-disable-line no-new
    }).toNotThrow()
  })

  it('should initialise the task list as an empty array', function () {
    expect(nickd.tasks).toEqual([])
  })

  it('should accept a list of tasks as an argument', function () {
    expect(new Nickd(['a task']).tasks).toEqual(['a task'])
    expect(new Nickd(['a task', 'another task']).tasks).toEqual(['a task', 'another task'])
  })

  describe('add', function () {
    it('should exist', function () {
      expect(nickd.add).toExist()
    })

    it('should add a task to the list', function () {
      nickd.add('a task')
      expect(nickd.tasks).toEqual(['a task'])
    })

    it('should add multiple tasks to the list', function () {
      nickd.add('a task')
      nickd.add('another task')
      expect(nickd.tasks).toEqual(['a task', 'another task'])
    })
  })

  describe('remove', function () {
    it('should exist', function () {
      expect(nickd.remove).toExist()
    })

    it('should remove a given task from the list', function () {
      nickd.add('a task')
      nickd.remove(1)
      expect(nickd.tasks).toEqual([])
    })

    it('should only remove one task', function () {
      nickd.add('a task')
      nickd.add('another task')
      nickd.remove(1)
      expect(nickd.tasks).toEqual(['another task'])
    })

    it('should do nothing when the given task isn\'t in the list', function () {
      nickd.add('a task')
      nickd.add('another task')
      nickd.remove(3)
      expect(nickd.tasks).toEqual(['a task', 'another task'])
    })
  })

  describe('edit', function () {
    it('should exist', function () {
      expect(nickd.edit).toExist()
    })

    it('should edit a given task', function () {
      nickd.add('a task')
      nickd.edit(1, 'an edited task')
      expect(nickd.tasks).toEqual(['an edited task'])
    })

    it('should do nothing when the given task doesn\'t exist', function () {
      nickd.add('a task')
      nickd.edit(200, 'an edited task')
      expect(nickd.tasks).toEqual(['a task'])
    })

    it('should leave other tasks alone', function () {
      nickd.add('a task')
      nickd.add('another task')
      nickd.add('some other task')
      nickd.edit(1, 'an edited task')
      expect(nickd.tasks).toEqual(['an edited task', 'another task', 'some other task'])
    })

    it('should keep the same ordering', function () {
      nickd.add('a task')
      nickd.add('another task')
      nickd.add('some other task')
      nickd.edit(2, 'another edited task')
      expect(nickd.tasks).toEqual(['a task', 'another edited task', 'some other task'])
    })
  })
})
