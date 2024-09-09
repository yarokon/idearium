export function OperationSparkle() {
  console.log('✨ Adding sparkles...');

  return {
    Operation: {
      enter(operation) {
        const { description } = operation;

        if (description) {
          operation.description = `✨ ${description}`;
        }
      },
    },
  };
}
