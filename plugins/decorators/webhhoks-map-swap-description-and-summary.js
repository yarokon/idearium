export function WebhooksMapSwapDescriptionAndSummary() {
  console.log('🔁 Swapping description and summary ... ');

  return {
    WebhooksMap: {
      Operation: {
        leave(target) {
          const description = target.description ?? '';
          const summary = target.summary ?? '';

          target.summary = removeTextAfterDot(description);
          target.description = summary;
        },
      },
    },
  };
}

function removeTextAfterDot(text) {
  const dotIndex = text.indexOf('.');

  return dotIndex !== -1 ? text.substring(0, dotIndex + 1) : text;
}
