# ConectaFácil - Design de Interface

## Visão Geral

ConectaFácil é um aplicativo de videoconferência extremamente simplificado, projetado especificamente para idosos. A interface segue princípios de acessibilidade digital, com foco em clareza, tamanho grande de elementos e navegação intuitiva.

---

## 📱 Orientação e Contexto

- **Orientação**: Portrait (9:16)
- **Uso**: Uma mão
- **Público-alvo**: Idosos com pouca experiência em tecnologia
- **Paradigma**: Tela única, sem navegação complexa

---

## 🎨 Paleta de Cores

| Elemento | Cor | Justificativa |
|----------|-----|---------------|
| Fundo | Branco (`#FFFFFF`) | Alto contraste, clareza máxima |
| Texto Principal | Cinza Escuro (`#1A1A1A`) | Legibilidade excelente |
| Botão Primário | Azul Vibrante (`#0066CC`) | Cor quente, fácil de localizar |
| Botão Hover/Press | Azul Mais Escuro (`#0052A3`) | Feedback visual claro |
| Texto do Botão | Branco (`#FFFFFF`) | Contraste máximo |
| Borda | Cinza Claro (`#E0E0E0`) | Separação suave |

---

## 📐 Tipografia

| Elemento | Tamanho | Peso | Notas |
|----------|--------|------|-------|
| Título Principal | 32px | Bold | Bem visível, hierarquia clara |
| Rótulo do Campo | 18px | Regular | Fácil leitura |
| Texto do Botão | 24px | Bold | Grande, claro, legível |
| Texto Secundário | 16px | Regular | Instruções adicionais |

---

## 🖼️ Estrutura de Telas

### Tela Única: "Entrar na Chamada"

**Objetivo**: Permitir que o usuário entre em uma chamada com um toque.

#### Elementos (de cima para baixo):

1. **Cabeçalho**
   - Ícone/Logo do app (opcional, simples)
   - Título: "ConectaFácil"
   - Subtítulo: "Videoconferência para a Família"

2. **Campo de Entrada de Nome**
   - Rótulo: "Seu Nome"
   - Placeholder: "Digite seu nome..."
   - Tamanho: Grande (altura ~56px)
   - Fonte: 18px
   - Padding interno: 16px
   - Borda: Cinza claro, arredondada (8px)
   - Foco: Borda azul, sem animação complexa

3. **Botão Principal**
   - Texto: "Entrar na Chamada"
   - Tamanho: 64px de altura (MUITO GRANDE)
   - Largura: 90% da tela (máx 320px)
   - Fonte: 24px, bold, branco
   - Cor: Azul vibrante
   - Borda: Arredondada (12px)
   - Padding: 16px vertical
   - Feedback: Escurece ao pressionar, sem animação exagerada
   - Haptic: Leve vibração ao tocar

4. **Texto de Instruções (opcional)**
   - Pequeno texto explicativo abaixo do botão
   - Cor: Cinza médio
   - Tamanho: 14px
   - Exemplo: "Você entrará na sala 'familia-conecta'"

---

## 🎯 Fluxo de Usuário

1. **Abertura do App**
   - Tela carrega com campo vazio e botão desabilitado (cinza)

2. **Usuário Digita Nome**
   - Campo fica com foco (borda azul)
   - Botão ativa (azul vibrante, habilitado)

3. **Usuário Toca no Botão**
   - Feedback visual: botão escurece
   - Haptic: Vibração leve
   - App abre o Jitsi Meet automaticamente
   - Nome digitado é usado como `displayName`
   - Sala: `familia-conecta`

4. **Chamada Ativa**
   - Usuário está em videoconferência
   - Vídeo e áudio ativados por padrão

---

## ♿ Acessibilidade

- **Contraste**: Mínimo 4.5:1 (WCAG AA)
- **Tamanho de Toque**: Botões com mínimo 48x48dp
- **Espaçamento**: Padding generoso entre elementos
- **Sem Gestos Complexos**: Apenas toques simples
- **Sem Temporizadores**: Nenhuma ação automática com prazo
- **Feedback Claro**: Cada ação tem resposta visual/tátil

---

## 🎨 Estilo Visual

- **Minimalismo**: Sem elementos decorativos desnecessários
- **Alinhamento Central**: Todos os elementos centralizados verticalmente
- **Espaçamento Vertical**: 24px entre seções principais
- **Bordas Suaves**: Arredondamento de 8-12px em campos e botões
- **Sombras Sutis**: Apenas para elevar botão primário (opcional)

---

## 📝 Notas de Implementação

- Usar `react-native-jitsi-meet` ou SDK oficial do Jitsi
- Validar nome antes de ativar botão (não vazio)
- Armazenar nome em `AsyncStorage` para próximas sessões (opcional)
- Testar com usuários idosos para validar acessibilidade
- Garantir que o app funcione offline (até o ponto de chamar Jitsi)

---

## 🚀 Diferencial

Este design prioriza:
1. **Simplicidade Radical**: Uma tela, um botão, uma ação
2. **Acessibilidade**: Alto contraste, fontes grandes, elementos grandes
3. **Inclusão Digital**: Reduz fricção para usuários com pouca experiência
4. **Confiança**: Interface clara e previsível
