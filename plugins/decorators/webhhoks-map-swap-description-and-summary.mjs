export function WebhooksMapSwapDescriptionAndSummary() {
  console.log('Swapping description and summary ... ');

  return {
    WebhooksMap: {
      Operation: {
        leave(target) {
          const description = target.description ?? '';
          const summary = target.summary ?? '';

          target.summary = description;
          target.description = summary;
        },
      },
    },
  };
}
