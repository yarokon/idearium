export function WebhooksSwapDescriptionAndSummary() {
  console.log('🔁 Swapping description and summary...');

  return {
    WebhooksMap: {
      Operation: {
        enter(operation) {
          const description = operation.description ?? '';
          const summary = operation.summary ?? '';

          operation.summary = removeTextAfterDot(description);
          operation.description = summary;
        },
      },
    },
  };
}

function removeTextAfterDot(description) {
  const dotIndex = description.indexOf('.');

  return dotIndex !== -1 ? description.substring(0, dotIndex + 1) : description;
}
