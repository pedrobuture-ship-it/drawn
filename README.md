# Oficina Discos Voadores & Drones

Site responsivo em React, TypeScript e Vite, com Tailwind CSS, Framer Motion e Lucide React. Fontes hospedadas no próprio projeto e desenhos SVG originais; nenhuma imagem ou fonte externa é necessária.

## Executar

```bash
npm ci
npm run dev
```

## Produção

```bash
npm run build
npm run preview
```

O build está em `dist/` e pode ser servido em uma hospedagem estática.

## Conteúdo e organização

- `src/data/services.ts`: consoles, peças, preços, garantias, opcionais e serviços de drones.
- `src/sections/`: hero, relatório, serviços, processo, especialistas e contato.
- `src/components/`: cabeçalho, marca e títulos das seções.
- `src/illustrations/TechnicalDrawing.tsx`: drone, controle e UFO em SVG.
- `src/utils/whatsapp.ts`: número de contato e montagem de mensagens com `encodeURIComponent`.
- `src/styles.css`: identidade visual, responsividade e animações.

Drones e Controles alternam sem recarregar a página. No modo Controles, escolha um console e um reparo, selecione opcionais e abra o WhatsApp com o resumo. Os adicionais e serviços de drones são sob consulta. O site prepara a mensagem; o visitante confirma o envio no WhatsApp.

O processo de diagnóstico, orçamento aprovado e reparo é executado pela oficina. O site não recebe pagamentos ou registra pedidos em um servidor.
