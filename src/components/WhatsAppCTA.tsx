import type { ComponentProps } from "react";
import { whatsappUrl } from "../utils/whatsapp";

export function WhatsAppCTA({
  message,
  ...props
}: Omit<ComponentProps<"a">, "href" | "target" | "rel"> & { message: string }) {
  return (
    <a
      {...props}
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
    />
  );
}
