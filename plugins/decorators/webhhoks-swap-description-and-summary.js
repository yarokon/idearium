export function WebhooksSwapDescriptionAndSummary() {
  console.log('🔁 Swapping description and summary...');

  return {
    WebhooksMap: {
      Operation: {
        enter(operation) {
          const { summary, description } = operation;

          if (summary && description) {
            operation.summary = description;
            operation.description = summary;
          }

          operation.summary = removeTextAfterDot(operation.summary);
        },
      },
    },
  };
}

function removeTextAfterDot(description) {
  const dotIndex = description.indexOf('.');

  return dotIndex !== -1 ? description.substring(0, dotIndex + 1) : description;
}
