# generator-aem-application [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> A set of subgenerators for helping you when working with AEM applications.  Current supported generators will help you create:
* AEM components 
* Custom Workflow Step
* Galen submodule

## Installation

First, install [Yeoman](http://yeoman.io) and generator-aem-application using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-aem-application
```

## Supported subgenerators:

All Subgenerators should be executed from the root path of your AEM application

### Simple AEM Component
```bash
yo aem-application:aem-component
```

You can also supply parameters from the console
```bash
yo aem-application:aem-component
```

### Workflow Step
```bash
yo aem-application:workflow
```

You can also supply parameters from the console
```bash
yo aem-application:workflow workflowName="Sample Application - Sample Workflow Process Step" mavenAppsModuleName=ui.apps componentParentPath=workflow-step-dialog/components/workflow componentNodeName=workflow-process  mavenBundleModuleName=core javaRootPackageName=co.dlighthouse.aem.workflowstepdialog.core javaWorkflowRelativePackageName=workflows javaWorkflowClassName=SampleWorkflowProcess
```

### A Galen Submodule
```bash
yo aem-application:galen-module
```

You can also supply parameters from the console
```bash
yo aem-application:galen-module
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.

## development

For adding new sub generators:

yo generator:subgenerator `<name>`


 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

Apache-2.0 © [drginm](dlighthouse)


[npm-image]: https://badge.fury.io/js/generator-aem-application.svg
[npm-url]: https://npmjs.org/package/generator-aem-application
[travis-image]: https://travis-ci.com/drginm/generator-aem-application.svg?branch=master
[travis-url]: https://travis-ci.com/drginm/generator-aem-application
[daviddm-image]: https://david-dm.org/drginm/generator-aem-application.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/drginm/generator-aem-application
[coveralls-image]: https://coveralls.io/repos/drginm/generator-aem-application/badge.svg
[coveralls-url]: https://coveralls.io/r/drginm/generator-aem-application
