import { ExternalLinksFix } from "./decorators/external-links-fix.mjs";

export default function sparklePlugin() {
  return {
    id: "git-hub",
    decorators: {
      oas3: {
        "external-links-fix": ExternalLinksFix,
      },
    },
  };
}
