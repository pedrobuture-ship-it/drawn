# Revisão de produção — Oficina Discos Voadores & Drones

Revisão técnica e visual concluída em 6 de outubro de 2026. A identidade de caderno de engenharia foi preservada, assim como os preços, peças, garantias, descrições comerciais, equipe, horários e telefone.

## Responsividade e experiência visual

A inspeção foi feita em navegador com emulação de viewport, incluindo a versão compilada servida por `npm run preview`.

| Larguras               | Drones    | Controles |
| ---------------------- | --------- | --------- |
| 1440 e 1280 px         | Revisados | Revisados |
| 1024, 900 e 768 px     | Revisados | Revisados |
| 430, 390, 375 e 360 px | Revisados | Revisados |

Nenhum overflow horizontal da página foi encontrado nessas larguras. As tabs têm rolagem própria. A comparação dos limites de texto e anotações não encontrou rabiscos sobre preços, botões ou conteúdo principal. Hero, relatório, serviços, processo, equipe e contato também passaram por inspeção visual.

No tablet, o terceiro plano ocupa uma ficha de duas colunas, eliminando o espaço vazio no grid. Em telas até 1100 px, o atalho de WhatsApp fica no fluxo do rodapé para não encobrir conteúdo. Os cards continuam com rotação discreta, bordas de papel e sombras sólidas.

## Interação e acessibilidade

- Header sticky, seletor de modo e menu mobile funcionais.
- Menu fecha ao navegar, trocar de modo ou pressionar Escape dentro dele.
- Âncoras existentes, scroll suave e foco no destino; link para pular ao conteúdo.
- Tabs testadas com setas, Home, End e Tab; a seleção permanece visível na faixa rolável.
- Botões têm semântica e estado de seleção; checkboxes possuem labels.
- Ícones decorativos ficam fora da leitura assistiva; desenhos informativos têm nome acessível.
- Um `main`, um `h1` e rodapé fora do conteúdo principal; relatório usa lista de definições.
- Contraste e tamanho dos textos essenciais revisados nos dois modos.
- `prefers-reduced-motion` é respeitado pelo CSS e pelos componentes animados: scroll instantâneo, transições reduzidas e desenhos sem animação de entrada. Animação contínua do UFO removida.

## Modos, serviços e WhatsApp

Foram verificadas as duas direções de troca de modo e a atualização de hero, desenho, serviços, relatório, processo, CTA e mensagem do rodapé.

As quatro tabs e os dez planos de controles foram testados. A ficha selecionada é compartilhada pelo resumo, menu, CTA, telefone do rodapé e atalho de WhatsApp. As mensagens incluem console, serviço, peça, preço e adicionais escolhidos. Todos os cinco adicionais foram selecionados na interface e conferidos nas mensagens.

Os links usam `https://wa.me/5542998083069`, `target="_blank"` e `rel="noopener noreferrer"`. Os URLs e mensagens codificadas foram validados; nenhuma mensagem foi enviada. Os cinco serviços de drones mantêm seus títulos e mensagens específicos. Nenhuma âncora quebrada ou link vazio foi encontrado.

## Código, dados e performance

- Dados comerciais separados em `src/data/controllers.ts`, `droneServices.ts`, `team.ts` e `business.ts`.
- Componentes reutilizáveis para seletor, tabs, fichas, etapas, equipe, marca, rodapé e links de WhatsApp.
- Estado da ficha compartilhado sem atualizar as seções que não dependem dele.
- Imports não utilizados verificados pelo TypeScript, com `noUnusedLocals` e `noUnusedParameters`.
- Seletores obsoletos e declarações repetidas removidos; estilos reunidos em um arquivo.
- Framer Motion usa `LazyMotion`/`m`; fontes locais servidas em WOFF2. Nenhuma imagem ou fonte remota necessária.
- JavaScript final: aproximadamente 346 KB, 112 KB gzip; antes da revisão eram 391 KB, 125 KB gzip.
- Dependências existentes revisadas; todas as dependências restantes são utilizadas.
- Sem `console.log`, marcadores de tarefa pendente, erros de TypeScript ou avisos de otimização CSS.

## SEO e validação

Title, description, Open Graph, canonical, favicon e theme-color presentes. JSON-LD de LocalBusiness inclui nome, Ponta Grossa/PR, telefone e horários existentes, sem inventar endereço de rua.

Resultados obtidos:

- `npm install`: concluído.
- `npm run dev`: servidor iniciou e interface foi testada.
- `npm test`: 12 testes aprovados, incluindo referência dos dados comerciais originais e mensagens dos dez planos.
- `npm audit`: nenhuma vulnerabilidade conhecida encontrada nas dependências verificadas.
- `npm run build`: concluído.
- `npm run preview`: build carregou com metadados corretos, sem erros ou avisos no console.
- `git diff --check`: sem problemas de whitespace.

Requisitos e comandos de execução estão em [README.md](README.md).

## Temas claro e escuro — 7 de outubro de 2026

O modo claro preserva a aparência anterior. A comparação de 551 elementos do conteúdo e rodapé, após estabilizar as animações, não encontrou diferenças em cores, fundos, bordas, fontes, dimensões ou transformações. As coordenadas, curvas e atributos geométricos dos SVGs também permanecem iguais. Dados comerciais, telefone e mensagens não foram alterados.

O modo escuro utiliza as mesmas seções e ilustrações, com papel noturno, traços ciano e notas laranja. As paletas e texturas ficam em `src/theme.css`, sem duplicar componentes. O WhatsApp mantém verde reconhecível. As transições de tema se limitam a superfícies e controles e são desativadas com movimento reduzido.

Foram verificadas as larguras 1440, 1280, 1024, 900, 768, 430, 390, 375 e 360 px, nos dois temas e modos. O seletor fica acessível e o conteúdo estável não apresenta rolagem horizontal da página. Cards e anotações mantêm suas posições. Menu mobile, Escape, quatro tabs de consoles, foco visível e alternância com Enter/Space foram conferidos. A ficha de reparo e o link preparado de WhatsApp permanecem iguais ao alternar o tema.

As duas preferências foram mantidas após recarregar a página. Testes de inicialização cobrem sistema claro/escuro, preferência salva sobrepondo o sistema, valores inválidos e armazenamento indisponível. O script bloqueante no head aplica o tema antes da interface. A versão compilada foi conferida em desktop e mobile; os textos HTML do modo escuro passaram pela leitura de contraste de 4,5:1, ou 3:1 para textos grandes.

Validação desta alteração: 20 testes aprovados, build TypeScript/Vite concluído e `git diff --check` sem problemas. Nenhuma dependência foi adicionada.
