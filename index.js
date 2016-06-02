require('colors')
var exec = require('exec-sh')

var ShellReporter = function (baseReporterDecorator, config) {
  baseReporterDecorator(this)

  var defaultConfig = {
    command: 'echo \'"karma-shell-reporter" is missing a "command" option\'',
    onlyOnWatch: false,
    onlyOnFail: false
  }
  var reporterConfig = Object.assign(defaultConfig, config.shellReporter)

  // This has to be overwritten, else the base reporter prints text
  this.specFailure = function () {
  }

  // On completion, execute the command
  this.onRunComplete = function (browsers, results) {
    if (reporterConfig.onlyOnWatch && !config.watch) {
      return
    }

    if (reporterConfig.onlyOnFail && results.failed === 0) {
      return
    }

    exec(reporterConfig.command)
  }
}

ShellReporter.$inject = ['baseReporterDecorator', 'config']
module.exports = {'reporter:shell': ['type', ShellReporter]}
