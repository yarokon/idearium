module.exports = OperationSparkle;

function OperationSparkle() {
  console.log("Adding sparkles ... ");
  
  return {
    Operation: {
      leave(target) {
        if(target.description) {
          target.description = "✨123 " + String(target.description);
        }
      }
    },
  }
};
