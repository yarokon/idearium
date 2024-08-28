export function OperationSparkle() {
  console.log('✨ Adding sparkles...');

  return {
    Operation: {
      enter(operation) {
        if (operation.description && operation['x-github']?.category !== 'webhooks') {
          operation.description = `✨ ${operation.description}`;
        }
      },
    },
  };
}
