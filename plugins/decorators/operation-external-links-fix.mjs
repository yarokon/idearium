import { fixBrokenLinksInDescription } from '../utils/fix-broken-links-in-description.mjs';

export function OperationExternalLinksFix() {
  console.log('Fixing operation links ... ');

  return {
    Operation: {
      leave(target) {
        fixBrokenLinksInDescription(target);
      },
    },
  };
}
