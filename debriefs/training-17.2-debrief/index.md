# Training 17.2 Debrief

## What made you smile?

- Finally 🎉, I don't see an error message about broken links.
- I realized that decorators are a powerful feature.

## What did you find confusing?

- I asked for help on how to fix the remaining 4 links.
  - I didn't figure out how I can update nested properties: `for (const property of Object.values(target))`.
  - To fix SchemaProperties links, they should be defined as preprocessors. Otherwise, you will continue to see the "4 broken links" message, but in fact, they are not broken. Alternatively, you can use a decorator and the enter method (I changed the code to use this approach).
- 🐞 In version 0.97.4: `Failed to load the plugin "plugins/github.js"`. So I decided to stay on 0.97.3.
- 📖 It would be good to explain in which case to use leave/enter. In the sparkle example, `leave` modifies the content (which is probably wrong), but from the [Redocly documentation](https://redocly.com/docs/cli/custom-plugins/visitor) page, `leave` is used for reporting. As I noticed, `leave` for modifying content is buggy.
- TypeScript could be useful, or at least update the docs so we can check parameters.
- 🐞 API Catalog is not working for another language.
- 🐞 Decorators are not applied for API Catalog. I created a separate `apis` config with `root` pointing to `products/api-hub/petstore.yaml`, and the plugin is not invoked for this API. It also doesn't work if you apply decorators at the top level without `apis`.
- ⚠️ Warning in terminal: `React does not recognize the 'separatorLine' prop on a DOM element`.
- For Revel/Realm, show that plugins are applied for each language.
- Is it possible to specify the order of plugins? For instance, I want to apply the sparkle decorator only after swapping description and summary.

{% code-snippet file="/redocly.yaml" title="redocly.yaml" to=11 /%}

{% code-snippet file="/plugins/github.js" title="plugins/github.js" /%}

{% code-snippet file="/plugins/decorators/external-links-fix.js" title="external-links-fix.js" /%}

{% code-snippet file="/plugins/decorators/webhhoks-swap-description-and-summary.js" title="webhhoks-swap-description-and-summary.js" /%}

