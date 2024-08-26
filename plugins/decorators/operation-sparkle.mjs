export function OperationSparkle() {
  console.log("Adding sparkles ... ");

  return {
    Operation: {
      leave(target) {
        if (target.summary) {
          target.summary = "✨" + String(target.summary);
        }
      },
    },
  };
}
