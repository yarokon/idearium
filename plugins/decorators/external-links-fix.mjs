function fixBrokenLinksInDescription(target) {
  const description = target.description;

  if (!description) {
    return;
  }

  target.description = description.replace(
    /\[([^\]]+)\]\(\/([^\)]+)\)/g,
    (_, text, link) => `[${text}](https://docs.github.com/${link})`
  );
}

export function ExternalLinksFix() {
  console.log("Fixing links ... ");

  return {
    Operation: {
      leave(target) {
        fixBrokenLinksInDescription(target);
      },
    },
  };
}
