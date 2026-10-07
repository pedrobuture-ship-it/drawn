# Oficina Discos Voadores & Drones

Site responsivo em React, TypeScript e Vite, com Tailwind CSS, Framer Motion e Lucide React. Fontes hospedadas no próprio projeto e desenhos SVG originais; nenhuma imagem ou fonte externa é necessária.

## Executar

Use Node.js 20.19+ da linha 20 ou Node.js 22.12+.

```bash
npm install
npm run dev
```

## Verificação

```bash
npm test
npm audit
```

Os testes protegem os dados comerciais originais e validam as mensagens dos dez planos, incluindo adicionais e codificação de caracteres.
Também verificam a escolha inicial do tema, a prioridade da preferência salva e o funcionamento quando o armazenamento está indisponível.

## Temas claro e escuro

O botão de sol/lua no header alterna a paleta do mesmo caderno técnico. Na primeira visita, o site acompanha `prefers-color-scheme`; uma escolha manual fica salva em `localStorage`, na chave `theme`. Sem escolha salva, mudanças do tema do sistema são acompanhadas automaticamente. A preferência também é sincronizada entre abas.

As cores e texturas dos dois temas estão em `src/theme.css`. `public/theme-init.js` aplica o tema antes do primeiro desenho da página; `src/hooks/useTheme.ts` gerencia a preferência e `src/components/ThemeToggle.tsx` expõe o controle acessível. Transições de cor respeitam `prefers-reduced-motion`. Não há fontes, desenhos ou componentes alternativos para o tema escuro.

## Produção

```bash
npm run build
npm run preview
```

O build está em `dist/` e pode ser servido em uma hospedagem estática.

## Conteúdo e organização

- `src/data/controllers.ts`: consoles, peças, preços, garantias e adicionais.
- `src/data/droneServices.ts`: serviços e descrições de drones.
- `src/data/team.ts`: equipe, qualificações e competências por modo.
- `src/data/business.ts`: telefone, localização, horários e URL oficial.
- `src/sections/`: hero, relatório, serviços, processo, especialistas e contato.
- `src/components/`: marca, navegação, seletor de modo, tabs, fichas de reparo, equipe, etapas e atalhos de WhatsApp.
- `src/context/RepairQuote.tsx`: ficha compartilhada pelos atalhos de contato.
- `src/illustrations/TechnicalDrawing.tsx`: drone, controle e UFO em SVG.
- `src/utils/whatsapp.ts`: montagem de mensagens e URLs com `encodeURIComponent`.
- `src/styles.css`: sistema visual de caderno técnico, responsividade, estados de foco e movimento reduzido.
- `src/illustrations/BenchSketches.tsx`: desenhos de analógico, joystick TMR, placa, gimbal, motor e sensores; círculos, setas e divisores em SVG.

Drones e Controles alternam sem recarregar a página. No modo Controles, escolha um console e um reparo, selecione opcionais e abra o WhatsApp com o resumo. Os adicionais e serviços de drones são sob consulta. O site prepara a mensagem; o visitante confirma o envio no WhatsApp.

O processo de diagnóstico, orçamento aprovado e reparo é executado pela oficina. O site não recebe pagamentos ou registra pedidos em um servidor.

## Metadados e hospedagem

`index.html` contém title, description, Open Graph, favicon e theme-color. O plugin em `vite.config.ts` inclui canonical e JSON-LD de LocalBusiness no HTML servido em desenvolvimento e no build. A URL vem de `src/data/business.ts`; ajuste esse campo se a hospedagem oficial mudar.

O projeto existente usa Sites, configurado em `.openai/hosting.json`. A versão de revisão continua com o acesso privado já configurado.

A revisão técnica e visual está registrada em [PRODUCTION_REVIEW.md](PRODUCTION_REVIEW.md).
