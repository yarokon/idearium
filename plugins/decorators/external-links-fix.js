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
  const description = target.description;

  if (!description) {
    return;
  }

  target.description = description.replaceAll(
    /\[([^\]]+)\]\(\/([^\)]+)\)/g,
    (_, text, link) => `[${text}](https://docs.github.com/${link})`,
  );
}
