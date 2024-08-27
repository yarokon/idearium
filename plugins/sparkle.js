import { OperationSparkle } from './decorators/operation-sparkle.js';

export default function sparklePlugin() {
  return {
    id: 'sparkle',
    decorators: {
      oas3: {
        'operation-sparkle': OperationSparkle,
      },
    },
  };
}
