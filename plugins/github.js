const ExternalLinksFix = require("./decorators/external-links-fix.js");

module.exports = function sparklePlugin() {
  return {
    id: "git-hub",
    decorators: {
      oas3: {
        "external-links-fix": ExternalLinksFix,
      },
    },
  };
};
