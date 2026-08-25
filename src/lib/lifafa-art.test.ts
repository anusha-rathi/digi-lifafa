import { test } from "node:test";
import assert from "node:assert/strict";
import { SCATTER, FAN } from "./decor.ts";
import { templateById } from "./templates.ts";

test("every decorative lifafa id resolves to a real template", () => {
  for (const { id } of [...SCATTER, ...FAN]) {
    assert.ok(templateById(id), `${id} is not a template`);
  }
});
