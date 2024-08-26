# Training 14 Debrief

## What made you smile?

Adding the product picker was easy, but configuring it correctly was impossible for us.

## What did you find confusing?

1. We couldn't find documentation on how to use multiple products together with versioning and the API catalog.
2. We were not able to configure the API hub product:

   1. It completely ignores the navbar configuration in local `redocly.yaml`. We see the navbar from the root, not API hub navbar {% code-snippet file="/products/api-hub/redocly.yaml" language="yaml" title="/products/api-hub/redocly.yaml" /%} {% code-snippet file="/redocly.yaml" language="yaml" from=12 to=20 title="redocly.yaml" /%}
   2. The search inside the API hub is not isolated.
   3. After opening the API hub, it redirects you to the first API catalog item (Admin api).
   4. We even invited Ivan T. and Roman H. to help us with the configuration.
   5. To fix the main navbar links to the API catalog and scorecard, the paths should start and end with `/`. For example, `/products/api-hub/` will work, but `products/api-hub` or `products/api-hub/` will result in the links being displayed but not clickable.

   Working example (was find together with Ivan T.):
   {% code-snippet file="/redocly.yaml" language="yaml" from=6 to=11 title="redocly.yaml" /%}

## Content disappearing

- We lost two uncommitted images when we returned after lunch.
