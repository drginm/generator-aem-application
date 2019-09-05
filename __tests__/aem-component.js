'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-aem-application:aem-component', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/aem-component'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file(['dummyfile.txt']);
  });
});
