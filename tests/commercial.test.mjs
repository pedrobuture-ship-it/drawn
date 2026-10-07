import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

// Run pure TypeScript data/helpers with the project's existing compiler.
const root = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const modules = new Map();
async function moduleUrl(relativePath) {
  const filename = path.resolve(root, relativePath);
  if (modules.has(filename)) return modules.get(filename);
  const source = await fs.readFile(filename, "utf8");
  let js = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  for (const match of js.matchAll(/from\s+["'](\.[^"']+)["']/g)) {
    const imported = path.resolve(path.dirname(filename), match[1] + ".ts");
    js = js.replace(
      match[0],
      `from ${JSON.stringify(await moduleUrl(imported))}`,
    );
  }
  const url =
    "data:text/javascript;base64," + Buffer.from(js).toString("base64");
  modules.set(filename, url);
  return url;
}
const controllers = await import(await moduleUrl("src/data/controllers.ts"));
const drones = await import(await moduleUrl("src/data/droneServices.ts"));
const { business } = await import(await moduleUrl("src/data/business.ts"));
const { planMessage, whatsappUrl } = await import(
  await moduleUrl("src/utils/whatsapp.ts")
);
const reference = JSON.parse(
  await fs.readFile(path.join(root, "tests/fixtures/commercial.json")),
);

test("preços, peças, garantias e informações comerciais permanecem idênticos", () => {
  assert.deepEqual(controllers.consoles, reference.consoles);
  assert.deepEqual(controllers.additionalRepairs, reference.additionalRepairs);
  assert.deepEqual(drones.droneServices, reference.droneServices);
  assert.equal(business.phone, "5542998083069");
});

for (const equipment of reference.consoles) {
  for (const plan of equipment.plans) {
    test(`${equipment.name}: mensagem completa do reparo ${plan.tier}`, () => {
      const extras = reference.additionalRepairs.map((extra) => extra.name);
      const message = planMessage(equipment.name, plan, extras);
      const url = new URL(whatsappUrl(message));
      assert.equal(url.origin, "https://wa.me");
      assert.equal(url.pathname, "/5542998083069");
      assert.equal(url.searchParams.get("text"), message);
      for (const value of [
        equipment.name,
        `Reparo ${plan.tier}`,
        plan.part,
        `R$ ${plan.price}`,
        ...extras,
      ])
        assert.ok(message.includes(value), `Mensagem deve incluir: ${value}`);
      assert.ok(message.includes("\n\n"));
      assert.ok(!message.includes("\\n"));
    });
  }
}

test("mensagem sem adicionais e codificação de caracteres especiais", () => {
  const equipment = reference.consoles[0];
  assert.ok(
    planMessage(equipment.name, equipment.plans[0], []).includes(
      "Nenhum selecionado",
    ),
  );
  const message =
    "Olá! Gimbal & câmera, diagnóstico + precisão?\nPeça: JS13 Pro+ #01";
  assert.equal(new URL(whatsappUrl(message)).searchParams.get("text"), message);
});
