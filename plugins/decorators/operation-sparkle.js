export function OperationSparkle() {
  console.log('✨ Adding sparkles...');

  return {
    Operation: {
      leave(operation) {
        const { description } = operation;

        if (description) {
          operation.description = `✨ ${description}`;
        }
      },
    },
  };
}
