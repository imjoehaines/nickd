var mocha = require('mocha')
var expect = require('expect')
var sinon = require('sinon')
var clicolor = require('clicolor')
var cli = clicolor.cli()

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

  describe('output', function () {
    it('should exist', function () {
      expect(new Nickd().output).toExist()
    })

    it('should log whatever is passed to it', function () {
      var nickd = new Nickd(cli)
      var stub = sinon.stub(cli, 'display')
      nickd.output('test')

      expect(stub.calledWith('test')).toBe(true)
      cli.display.restore()
    })
  })

  describe('list', function () {
    var stub
    beforeEach(function () {
      stub = sinon.stub(cli, 'display')
    })

    afterEach(function () {
      cli.display.restore()
    })

    it('should exist', function () {
      var nickd = new Nickd()
      expect(nickd.list).toExist()
    })

    it('should log a task in the list', function () {
      var nickd = new Nickd(cli)
      nickd.add('a task')
      nickd.list()

      expect(stub.calledWith('a task')).toBe(true)
    })

    it('should log all tasks in the list', function () {
      var nickd = new Nickd(cli)
      nickd.add('a task')
      nickd.add('another task')
      nickd.add('a third task')
      nickd.list()

      expect(stub.calledWith('a task')).toBe(true)
      expect(stub.calledWith('another task')).toBe(true)
      expect(stub.calledWith('a third task')).toBe(true)
    })
  })
})
