'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

const inquirer = require('inquirer');

const patternRename = require('gulp-pattern-rename');
const utilities = require('../utilities/utilities');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the sensational ${chalk.red('generator-aem-application:aem-component')} generator!`)
    );

    const prompts = [
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
      {
        type: 'list',
        name: 'useSlingModelExporter',
        message: 'Use the Sling Model Exporter?',
        default: false,
        choices: [
          {
            name: 'Yes',
            value: true
          },
          {
            name: 'No',
            value: false
          }
        ]
      },
      {
        type: 'confirm',
        name: 'shouldIncludeFieldExamples',
        message: 'Should I include field examples',
        default: false
      },
      {
        when: function(answers) {
          return answers.shouldIncludeFieldExamples;
        },
        type: 'checkbox',
        name: 'fields',
        message: 'Field examples to include?',
        choices: [
          {
            name: 'Text Field',
            value: 'includeTextFieldExample',
            checked: true
          },
          {
            name: 'Checkbox',
            value: 'includeCheckboxExample',
            checked: true
          },
          new inquirer.Separator(' = More = '),
          {
            name: 'Select/Drop Down/Combo Box',
            value: 'includeDropDownExample',
            checked: false
          },
          {
            name: 'Path Field',
            value: 'includePathfieldExample',
            checked: false
          },
          {
            name: 'Text Area',
            value: 'includeTextAreaExample',
            checked: false
          },
          {
            name: 'Image',
            value: 'includeImageFieldExample',
            checked: false
          },
          {
            name: 'Fieldset',
            value: 'includeFieldsetExample',
            checked: false
          },
          {
            name: 'Use Tabs',
            value: 'includeTabsExample',
            checked: false
          },
        ]
      },
      {
        type: 'list',
        name: 'includeModel',
        message: 'What type of model should I include for the component?',
        default: 'useSlingModel',
        choices: [
          {
            name: 'Sling Model',
            value: 'useSlingModel'
          },
          /*{
            name: 'WCM Use java model - NOT IMPLEMENTED YET',
            value: 'useWcmUseModel'
          },
          {
            name: 'No Models - NOT IMPLEMENTED YET',
            value: 'noModel'
          }*/
        ]
      },
      {
        when: function(answers) {
          return answers.includeModel !== 'noModel';
        },
        type: 'input',
        name: 'mavenBundleModuleName',
        message: 'What\'s the name for the bundle\'s maven module',
        default: 'core',
        store: true
      },
      {
        when: function(answers) {
          return answers.includeModel !== 'noModel';
        },
        type: 'input',
        name: 'javaRootPackageName',
        message: 'What\'s the name for the root package for the application',
        default: 'com.client.application.core',
        store: true
      },
      {
        when: function(answers) {
          return answers.includeModel !== 'noModel';
        },
        type: 'input',
        name: 'javaModelRelativePackageName',
        message: 'What\'s the relative name for the package for the model (without the root package)',
        default: 'models'
      },
      {
        when: function(answers) {
          return answers.includeModel !== 'noModel';
        },
        type: 'input',
        name: 'javaModelClassName',
        message: 'What\'s the name for the Model class',
        default: 'SampleModel'
      },
    ];

    utilities.extractArguments(this.args, prompts);

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;

      if (!this.props.shouldIncludeFieldExamples) {
        this.props.fields = [];
      }

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
          javaModelRelativePackageName: {
            createSubfolders: true,
            folderSeparator: '.'
          },
        }
      }));
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('component/**/**'),
      this.destinationPath(), this.props
    );

    this.fs.copyTpl(
      this.templatePath('component/**/.*'),
      this.destinationPath(), this.props
    );

    if(this.props.includeModel !== 'noModel') {
      this.fs.copyTpl(
        this.templatePath('bundle/**/**'),
        this.destinationPath(), this.props
      );
    }
  }
};
