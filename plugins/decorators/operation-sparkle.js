export function OperationSparkle() {
  console.log('✨ Adding sparkles...');

  return {
    Operation: {
      leave(operation) {
        if (operation.description) {
          operation.description = `✨ ${operation.description}`;
        }
      },
    },
  };
}
