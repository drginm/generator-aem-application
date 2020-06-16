'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const patternRename = require('gulp-pattern-rename');
const utilities = require('../utilities/utilities');

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(`Welcome to the remarkable ${chalk.red('generator-aem-application:clientlibs')} generator!`),
    );

    const prompts = [
      {
        type: 'input',
        name: 'clientlibsPath',
        message: 'What\'s the path to the clientlib',
        default: 'ui.apps/src/main/content/jcr_root/apps/basic-component/clientlibs/clientlib-example'
      },
      {
        type: 'input',
        name: 'categories',
        message: 'Enter the categories for the new clientlib',
        default: 'clientlib-example'
      }
    ];

    utilities.extractArguments(this.args, prompts);

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;

      this.registerTransformStream(patternRename({
        props: this.props,
        meta: {
          clientlibsPath: {
            createSubfolders: true,
            folderSeparator: '/'
          },
        }
      }));
    });
  }

  writing() {
    utilities.copyEverything(this);
  }
};
