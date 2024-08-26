import { OperationSparkle } from "./decorators/operation-sparkle.mjs";

export default function sparklePlugin() {
  return {
    id: "sparkle",
    decorators: {
      oas3: {
        "operation-sparkle": OperationSparkle,
      },
    },
  };
}
