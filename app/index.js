'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var GnarGenerator = module.exports = function GnarGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(GnarGenerator, yeoman.generators.Base);

GnarGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  // var prompts = [{
  //   type: 'confirm',
  //   name: 'someOption',
  //   message: 'Would you like to enable this option?',
  //   default: true
  // }];

  // this.prompt(prompts, function (props) {
    // this.someOption = props.someOption;

    cb();
  // }.bind(this));
};

GnarGenerator.prototype.createDirLayout = function createDirLayout() {
  this.directory('src', 'src');
};

GnarGenerator.prototype.git = function git() {
  this.copy('gitignore', '.gitignore');
};

GnarGenerator.prototype.bower = function bower() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('_bower.json', 'bower.json');
};

GnarGenerator.prototype.packageFile = function packageFile() {
  this.copy('_package.json', 'package.json');
};

GnarGenerator.prototype.editorConfig = function editorConfig() {
  this.copy('editorconfig', '.editorconfig');
};

GnarGenerator.prototype.jshint = function jshint() {
  this.copy('jshintrc', '.jshintrc');
};
