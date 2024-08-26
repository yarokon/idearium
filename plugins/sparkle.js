const OperationSparkle = require('./decorators/operation-sparkle.js');

module.exports = function sparklePlugin() {
  return {
    id: "sparkle",
    decorators: {
      oas3: {
        "operation-sparkle": OperationSparkle,
      },
    },
  };
}

// module.exports = {
//   id: "sparkle",
//   decorators: {
//     oas3: {
//       "operation-sparkle": OperationSparkle,
//     },
//   },
// };
