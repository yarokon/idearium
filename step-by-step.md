---
template: './@theme/Templates/SideBySide.tsx'
---

## Step 1: Package installation

{% split %}

(Appears on the left.)
Write something interesting here.

---
(Appears on the right.)
Put an example or a Markdoc replay or openapi-code-sample here.

{% /split %}

{% split %}

(Appears on the left.)
Write something interesting here.

---

<!-- {% replay-openapi
  descriptionFile="products/museum/@v1/museum-guide.md"
  operationId="getMuseumHours"
/%} -->


{% /split %}

Hello

{% split %}

---

<!-- {% replay-openapi
  descriptionFile="vendors/github/rest-api/api.github.com.yaml"
  operationId="security-advisories/list-global-advisories"
/%} -->


{% /split %}


{% replay-openapi
  descriptionFile="products/museum/@v1/museum-guide.md"
  operationId="listSpecialEvents"
/%}



