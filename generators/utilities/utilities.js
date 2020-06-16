
module.exports.extractArguments = function(args, prompts) {
  args.forEach(function (arg) {
    let defaultValue = arg.split('=');

    prompts.forEach(function (prompt) {
      if (prompt.name === defaultValue[0]) {
        prompt.default = defaultValue[1];
      }
    });
  });
}

module.exports.copyEverything = function(generator) {
  generator.fs.copyTpl(
    generator.templatePath('**/**'),
    generator.destinationPath(), generator.props
  );

  generator.fs.copyTpl(
    generator.templatePath('**/.*'),
    generator.destinationPath(), generator.props
  );
}
