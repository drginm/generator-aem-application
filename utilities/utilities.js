
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
