'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-aem-application:custom-console', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/custom-console'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file(['dummyfile.txt']);
  });
});
