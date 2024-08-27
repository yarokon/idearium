export function fixBrokenLinksInDescription(target) {
  const description = target.description;

  if (!description) {
    return;
  }

  target.description = description.replace(
    /\[([^\]]+)\]\(\/([^\)]+)\)/g,
    (_, text, link) => `[${text}](https://docs.github.com/${link})`,
  );
}
