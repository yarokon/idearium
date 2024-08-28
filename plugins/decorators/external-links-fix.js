export function ExternalLinksFix() {
  console.log('🔧 Fixing links...');

  return {
    Operation: {
      enter(operation) {
        fixBrokenLinksInDescription(operation);
      },
    },
    SchemaProperties: {
      enter(schemaProperties) {
        for (const property of Object.values(schemaProperties)) {
          fixBrokenLinksInDescription(property);
        }
      },
    },
  };
}

function fixBrokenLinksInDescription(target) {
  const description = target.description;

  if (!description) {
    return;
  }

  target.description = description.replace(
    /\[([^\]]+)\]\(\/([^\)]+)\)/g,
    (_, text, link) => `[${text}](https://docs.github.com/${link})`,
  );
}
