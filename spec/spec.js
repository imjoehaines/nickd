var mocha = require('mocha')
var expect = require('expect')

var Nickd = require('../src/nickd')

var describe = mocha.describe
var it = mocha.it
var beforeEach = mocha.beforeEach
var afterEach = mocha.afterEach

describe('nickd', function () {
  it('should be initialisable', function () {
    expect(function () {
      new Nickd() // eslint-disable-line no-new
    }).toNotThrow()
  })

  it('should initialise the task list as an empty array', function () {
    expect(new Nickd().tasks).toEqual([])
  })

  describe('add', function () {
    it('should exist', function () {
      var nickd = new Nickd()
      expect(nickd.add).toExist()
    })

    it('should add a task to the list', function () {
      var nickd = new Nickd()
      nickd.add('a task')
      expect(nickd.tasks).toEqual(['a task'])
    })

    it('should add multiple tasks to the list', function () {
      var nickd = new Nickd()
      nickd.add('a task')
      nickd.add('another task')
      expect(nickd.tasks).toEqual(['a task', 'another task'])
    })
  })

  describe('remove', function () {
    it('should exist', function () {
      var nickd = new Nickd()
      expect(nickd.remove).toExist()
    })

    it('should remove a given task from the list', function () {
      var nickd = new Nickd()
      nickd.add('a task')
      nickd.remove('a task')
      expect(nickd.tasks).toEqual([])
    })

    it('should only remove one task', function () {
      var nickd = new Nickd()
      nickd.add('a task')
      nickd.add('another task')
      nickd.remove('a task')
      expect(nickd.tasks).toEqual(['another task'])
    })

    it('should do nothing when the given task isn\'t in the list', function () {
      var nickd = new Nickd()
      nickd.add('a task')
      nickd.add('another task')
      nickd.remove('a non-existant task')
      expect(nickd.tasks).toEqual(['a task', 'another task'])
    })
  })
})
