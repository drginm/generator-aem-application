'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-aem-application:clientlibs', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/clientlibs'))
      .withPrompts({ someAnswer: true });
  });

  it('creates files', () => {
    assert.file(['dummyfile.txt']);
  });
});
