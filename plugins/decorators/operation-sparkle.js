export function OperationSparkle() {
  console.log('✨ Adding sparkles ... ');

  return {
    Operation: {
      leave(target) {
        if (target.description && target['x-github']?.category !== 'webhooks') {
          target.description = '✨ ' + (target.description ?? '');
        }
      },
    },
  };
}
