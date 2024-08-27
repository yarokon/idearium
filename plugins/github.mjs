import { OperationExternalLinksFix } from './decorators/operation-external-links-fix.mjs';
import { WebhooksMapSwapDescriptionAndSummary } from './decorators/webhhoks-map-swap-description-and-summary.mjs';
import { SchemaPropertiesExternalLinksFix } from './preprocessors/schema-properties-external-links-fix.mjs';

export default function sparklePlugin() {
  return {
    id: 'git-hub',
    decorators: {
      oas3: {
        'operation-external-links-fix': OperationExternalLinksFix,
        'webhoks-map-swap-description-and-symmary': WebhooksMapSwapDescriptionAndSummary,
      },
    },
    preprocessors: {
      oas3: {
        'schema-properties-external-links-fix': SchemaPropertiesExternalLinksFix,
      },
    },
  };
}
