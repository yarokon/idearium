export function ExternalLinksFix() {
  console.log('🔧 Fixing links...');

  return {
    Operation: {
      enter(operation) {
        fixBrokenLinksInDescription(operation);
      },
    },
    Schema: {
      enter(schema) {
        fixBrokenLinksInDescription(schema);
      },
    },
  };
}

function fixBrokenLinksInDescription(target) {
  const { description } = target;

  if (description) {
    target.description = description.replaceAll(
      /\[([^\]]+)]\(\/([^)]+)\)/g,
      '[$1](https://docs.github.com/$2)',
    );
  }
}
