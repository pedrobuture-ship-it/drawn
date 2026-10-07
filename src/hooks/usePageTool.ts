import { useEffect } from "react";

type PageTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  annotations: { readOnlyHint: boolean; untrustedContentHint: boolean };
  execute: (input: unknown) => unknown;
};
type ModelContext = {
  registerTool: (
    tool: PageTool,
    options: { signal: AbortSignal },
  ) => void | Promise<void>;
};

/** Optional browser support: the regular interface remains the source of truth. */
export function usePageTool(tool: PageTool) {
  useEffect(() => {
    const context = (document as Document & { modelContext?: ModelContext })
      .modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    try {
      Promise.resolve(
        context.registerTool(tool, { signal: lifecycle.signal }),
      ).catch(() => {
        console.warn(
          "A ferramenta de página está indisponível. Use a interface da oficina.",
        );
      });
    } catch {
      console.warn(
        "A ferramenta de página está indisponível. Use a interface da oficina.",
      );
    }
    return () => lifecycle.abort();
  }, [tool]);
}
