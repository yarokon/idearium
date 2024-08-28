# Training 17.2 Debrief

## What made you smile?

- Finally 🎉, I do not see an error message with broken links.
- I realized that decorators is a powerful feature.
  
## What did you find confusing?

- I asked a help how to fix remaing 4 links. 
  - I didn't figure out how I can updated nested properies: `for (const property of Object.values(target))`
  - SchemaPropertiesExternalLinksFix should be defined as a preprocessors. Othervise, you will continue to see 4 broken links message, but in fact they are not broken.
- 🐞 in version 0.97.4: Failed to load plugin "plugins/github.js". So I desided to stay on 0.97.3
- It would be good to explain in which case use leave/enter. In sparkele example leave modifes the contetn, but form https://redocly.com/docs/cli/custom-plugins/visitor page leace usues for reporting
- TypeScript could be useful, or at least udapte docs so we can check parameters
- 🐞 API Catalog not working for another language
- 🐞 decorators are not applied for API Catalog. I created separate api config with root pointing to `products/api-hub/petstore.yaml` and plugin is not invoked for this api. It also dosent work if apply decorators in top level without apis.
- ⚠️ Warning in terminal: `React does not recognize the 'separatorLine' prop on a DOM element`
- For Revel/Realm show that decorators applied for each language.
- How to spicify the order of plugins?
- 