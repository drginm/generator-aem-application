'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const patternRename = require('gulp-pattern-rename');

module.exports = class extends Generator {
  prompting() {
    console.log(this.args);

    this.args.forEach(function (argument) {
      console.log(argument.split('='));
    });

    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the awesome ${chalk.red('generator-aem-application')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'groupId',
        message: 'What\'s the maven groupId?',
        default: 'com.client',
      },
      {
        type: 'input',
        name: 'artifactId',
        message: 'What\'s the maven artifactId?',
        default: 'site',
      },
      {
        type: 'input',
        name: 'version',
        message: 'What\'s the maven version?',
        default: '1.0.0',
      },
      {
        type: 'input',
        name: 'mavenModuleName',
        message: 'What\'s the name for the apps maven module',
        default: 'ui.npm.galen'
      },
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;

      this.registerTransformStream(patternRename({
        props: this.props,
        meta: {
          packageName: {
            createSubfolders: true,
            folderSeparator: '.'
          }
        }
      }));
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('**/**'),
      this.destinationPath(), this.props
    );

    this.fs.copyTpl(
      this.templatePath('**/.*'),
      this.destinationPath(), this.props
    );
  }

  install() {
    this.installDependencies();
  }
};
