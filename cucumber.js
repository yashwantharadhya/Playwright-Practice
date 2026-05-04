module.exports = {
  default: [
    "features/**/*.feature",
    "--require features/support/**/*.js",
    "--require features/step_definitions/**/*.js",
    "--format progress",
    "--format html:cucumber-report.html"
  ].join(" ")
};
