'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const patternRename = require('gulp-pattern-rename');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the sensational ${chalk.red('generator-aem-application')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'mavenModuleName',
        message: 'What\'s the name for the component\'s maven module',
        default: 'ui.apps'
      },
      {
        type: 'input',
        name: 'componentParentPath',
        message: 'What\'s the path for the component',
        default: 'myApp/components/content'
      },
      {
        type: 'input',
        name: 'componentPath',
        message: 'What\'s the name for the component\'s node',
        default: 'hello-world'
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'What\'s the name for the component',
        default: 'Component Name'
      },
      {
        type: 'input',
        name: 'componentGroup',
        message: 'What\'s the name for the component Group',
        default: 'Components'
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
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
    //https://stackoverflow.com/questions/19178523/can-yeoman-generators-update-existing-files
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
  }
};
