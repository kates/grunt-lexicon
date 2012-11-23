# grunt-lexicon

grunt plugin for lexicon

**This project has moved to https://github.com/englishtown/grunt-lexicon**

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-lexicon`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-lexicon');
grunt.config.init({
  lexicon: {
    all: {
      src: ["src/**/*.js"],
      dest: "docs",
      options: {
        title: "The Docs",
        format: "html"
      }
    }
  }
});
```
And finally invoke it by
```bash
grunt lexicon
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 kates  
Licensed under the MIT license.
