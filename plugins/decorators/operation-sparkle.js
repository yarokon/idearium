module.exports = OperationSparkle;

function OperationSparkle() {
  console.log("adding sparkles ... ");
  
  return {
    Operation: {
      leave(target) {
        if(target.description) {
          target.description = "✨ " + String(target.description);
        }
      }
    },
  }
};
