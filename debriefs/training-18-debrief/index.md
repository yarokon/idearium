# Training 18 Debrief

[How to Buy a Ticket for a Special Event [GUIDE]](https://idearium.apishowdown.com/step-by-step)

## What made you smile?

- The step-by-step guide on how to add a split tag was easy to follow.
- We liked the `replay-openapi` Markdoc tag 😍.

## What did you find confusing?

- It would be helpful to have a built-in code walkthrough with the ability to pass variables from previous steps, similar to how it's implemented in Postman via the "Tests" tab.
- The mock server doesn't work for the `replay-openapi` tag (we had to add the mock server URL manually).
```
{% replay-openapi
  descriptionFile="products/museum/@v1/museum.yaml"
  operationId="listSpecialEvents"
  environment="https://api.museum-example.com"
  environments={
    "https://api.museum-example.com": {
      "MuseumPlaceholderAuth_username": "username",
      "MuseumPlaceholderAuth_password": "password",
    }
  }
  parameters={
    query: {
      startDate: "2024-01-01", // Only double quotes are supported
      endDate: "2024-02-01", 
      page: 1,
      limit: 30
    },
  }
/% } // 🐞 The Markdoc tag couldn't be used inside a block quote
```
- You cannot delete a variable in `replay-openapi`. The save option is disabled if you clear the input.
- `exampleKey` updates the body but not the label for "Pick an example" option.
- We were unable to move this guide inside museum v1 (the file isn't openable on click).
- We had to install `@redocly/theme` to run it locally (though it works on Reunite without this package).
- Additional error locally:
✘ [ERROR] Could not resolve "/Users/@theme/Templates/SideBySide.tsx"
```
---
template: './@theme/Templates/SideBySide.tsx'
---
```
The correct path should be: "/Users/yaroslav/Redocly/idearium/@theme/Templates/SideBySide.tsx".
- "Mock server error. Could not generate response. No supported media type found in definition."


### Museum API suggestions

- We have a protected API, but there's no way to register to get a username and password. We should add a registration endpoint, similar to what the Petstore API has, or remove the protection like the Train API did.
- The `listSpecialEvents` endpoint should return separate events for each day. After that, we can remove the `ticketDate` parameter from the `buyMuseumTickets` endpoint.
