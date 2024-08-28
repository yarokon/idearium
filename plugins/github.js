import { ExternalLinksFix } from './decorators/external-links-fix.js';
import { WebhooksSwapDescriptionAndSummary } from './decorators/webhhoks-swap-description-and-summary.js';

export default function githubPlugin() {
  return {
    id: 'github',
    decorators: {
      oas3: {
        'external-links-fix': ExternalLinksFix,
        'webhoks-swap-description-and-symmary': WebhooksSwapDescriptionAndSummary,
      },
    },
  };
}
