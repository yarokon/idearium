import { fixBrokenLinksInDescription } from '../utils/fix-broken-links-in-description.js';

export function SchemaPropertiesExternalLinksFix() {
  console.log('🔧 Fixing schema properties links ... ');

  return {
    SchemaProperties: {
      leave(target) {
        for (const property of Object.values(target)) {
          fixBrokenLinksInDescription(property);
        }
      },
    },
  };
}
