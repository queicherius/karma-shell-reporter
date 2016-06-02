# karma-shell-reporter

Test reporter that runs a shell command after test completion (for Karma).

## Usage

```
npm install karma-shell-reporter --save-dev
```

Add the following to your karma.conf.js:

```js
plugins: ['karma-shell-reporter'],
reporters: ['shell'],
shellReporter: {
  command: 'notify "My tests failed :("',
  onlyOnWatch: true, // Only run the command when karma is in "watch" mode
  onlyOnFail: true // Only run the command if at least one test failed
}
```
