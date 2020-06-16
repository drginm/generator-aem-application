'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const patternRename = require('gulp-pattern-rename');
const utilities = require('../utilities/utilities');

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(`Welcome to the gnarly ${chalk.red('generator-aem-application:workflow')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'workflowName',
        message: 'What\'s the name for the Workflow Process Step',
        default: 'Sample Application - Sample Workflow Process Step'
      },
      {
        type: 'input',
        name: 'mavenAppsModuleName',
        message: 'What\'s the name for the component\'s maven module',
        default: 'ui.apps',
        store: true
      },
      {
        type: 'input',
        name: 'componentParentPath',
        message: 'What\'s the path for the component',
        default: 'myApp/components/content'
      },
      {
        type: 'input',
        name: 'componentNodeName',
        message: 'What\'s the name for the component\'s node',
        default: 'workflow-process'
      },
      {
        type: 'input',
        name: 'mavenBundleModuleName',
        message: 'What\'s the name for the bundle\'s maven module',
        default: 'core',
        store: true
      },
      {
        type: 'input',
        name: 'javaRootPackageName',
        message: 'What\'s the name for the root package for the application',
        default: 'com.client.application',
        store: true
      },
      {
        type: 'input',
        name: 'javaWorkflowRelativePackageName',
        message: 'What\'s the relative name for the package for the workflow (without the root package)',
        default: 'workflows'
      },
      {
        type: 'input',
        name: 'javaWorkflowClassName',
        message: 'What\'s the name for the Workflow process class',
        default: 'SampleWorkflowProcess'
      },
    ];

    utilities.extractArguments(this.args, prompts);

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;

      this.registerTransformStream(patternRename({
        props: this.props,
        meta: {
          componentParentPath: {
            createSubfolders: true,
            folderSeparator: '/'
          },
          javaRootPackageName: {
            createSubfolders: true,
            folderSeparator: '.'
          },
        }
      }));
    });
  }

  writing() {
    utilities.copyEverything(this);
  }
};
