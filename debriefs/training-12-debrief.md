# Training 12 Debrief

## Top 9 Issues

1. **Reunite** and **Realm** names are confusing. Consider renaming them to **Cloud Editor** and **Project**.
2. Allow cloning projects locally to enable users to work either with the cloud version or locally simultaneously.
3. Rename **WYSIWYG** in the UI and documentation to **Live Preview**.
4. Add a **green save icon** on top of the Editor with a tooltip that changes to "Automatically Saved" (Command + S should show this tooltip). Also, show a red icon if the Editor loses connection with the syncer or Live Preview, and prompt a restart.
5. Add an explanation of what branches are, why they are needed, and the difference between Live Preview and deploy builds per branch. Additionally, consider not forcing users to create a new branch at the beginning; allow them to work in the main branch.
6. Improve the content and structure of the documentation (it is hard to find what you need without searching by keywords). Also, we do not have a learning guide.

### Minor Customer Issues:

7. Highlight visual changes in "Visual Preview."
8. Add an image markdown shortcut.
9. Add a description stating that you cannot merge a PR without approval.

## Pricing Calculation for 3 Users

![pricing](/images/pricing.png)

### Why We Chose the PRO (Redoc + Revel) Plan:

- As a small company, we do not need SSO, and 100 pages will be enough for us. One question remains: Do we count API endpoints or tags as separate pages?
- We chose Redoc + Revel because we need basic functionality from Redoc and the ability to create docs, change styles, and have a landing page.
- Our total budget is **$54/month**.

## Can We Go to Public Release Now?

Our **Top 9 issues** from customers do not contain critical issues, but it would be great to polish the product and documentation a little more. Additionally, we are not 100% confident about preserving content that hasn't been committed, as well as editor freezing and broken Live Preview sync after some changes.

## What Made You Smile?

- What seemed simple to us seemed confusing to users (from watching interviews).
- We like how users name certain features (like Live preview).

## What Did You Find Confusing?

- When calculating the cost for a project on the `pricing` page, it was difficult to understand what items were included in the plan or product. It would be helpful to always see three products: Redoc, Reef, and Revel, wrapped by Realm.
- Each product page should have a list of features with explanations and examples/images. Currently, not all features are described, and the pages contain a lot of unnecessary information.
