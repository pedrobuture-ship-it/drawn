import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { business } from "./src/data/business";
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "business-metadata",
      transformIndexHtml(html) {
        return html.replaceAll("%SITE_URL%", business.url).replace(
          "%LOCAL_BUSINESS%",
          JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: business.name,
            url: business.url,
            telephone: "+55 42 99808-3069",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Ponta Grossa",
              addressRegion: "PR",
              addressCountry: "BR",
            },
            openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-12:00"],
          }),
        );
      },
    },
  ],
});
