# Apiki Dev Blog - Front-end Challenge

Um blog headless moderno e responsivo desenvolvido em React com TypeScript, consumindo a API do WordPress da Apiki.

## 🌐 Demo Online

**Acesse o projeto em:** [https://front-end-challenge-ten-theta.vercel.app](https://front-end-challenge-ten-theta.vercel.app)

## 🚀 Sobre o Projeto

Este projeto é uma implementação completa de um blog headless que consome dados da API do WordPress da Apiki. O objetivo é criar uma experiência de usuário moderna e intuitiva para desenvolvedores, com foco em performance, SEO e responsividade.

### ✨ Funcionalidades Principais

- **Página Inicial**: Listagem das últimas postagens da categoria Desenvolvimento
- **Página Interna**: Visualização completa de cada post com conteúdo rico
- **Paginação Infinita**: Botão "Load More" para carregar mais posts
- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **SEO Otimizado**: Meta tags, Open Graph e estrutura semântica
- **Performance**: Lazy loading de imagens e otimizações de carregamento

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca principal para interface
- **TypeScript** - Type safety e melhor DX
- **React Router** - Navegação entre páginas
- **Axios** - Requisições HTTP para a API
- **CSS3** - Estilização com metodologia BEM
- **HTML5** - Estrutura semântica

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── Button/          # Botão customizado com variantes
│   ├── Header/          # Cabeçalho da aplicação
│   ├── Loading/         # Componente de loading
│   ├── PostCard/        # Card de post para listagem
│   └── index.ts         # Exportações centralizadas
├── pages/               # Páginas principais
│   ├── Home/            # Página inicial com listagem
│   └── Post/            # Página interna do post
├── services/            # Serviços e APIs
│   └── api.ts           # Configuração e funções da API
├── types/               # Definições TypeScript
│   └── index.ts         # Interfaces e tipos
├── App.tsx              # Componente principal
├── App.css              # Estilos globais
└── index.tsx            # Ponto de entrada
```

## 🎨 Metodologia CSS - BEM

O projeto utiliza a metodologia **BEM (Block Element Modifier)** para organização do CSS:

- **Block**: Componente principal (ex: `.post-card`)
- **Element**: Elemento dentro do bloco (ex: `.post-card__title`)
- **Modifier**: Variação do bloco (ex: `.button--primary`)

### Exemplo de Estrutura BEM:
```css
.post-card {                    /* Block */
  background: white;
}

.post-card__title {             /* Element */
  font-size: 1.25rem;
}

.post-card__image {             /* Element */
  width: 100%;
}

.button--primary {              /* Modifier */
  background: linear-gradient(...);
}
```

## 🔌 Integração com API

### Endpoints Utilizados

1. **Listagem de Posts**:
   ```
   GET https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page={page}
   ```

2. **Post Individual**:
   ```
   GET https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug={slug}
   ```

### Headers de Paginação
- `X-WP-Total`: Total de posts na categoria
- `X-WP-TotalPages`: Total de páginas disponíveis

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:

- **Desktop**: > 768px
- **Tablet**: 768px - 480px  
- **Mobile**: < 480px

### Grid System
- **Desktop**: Grid com 3 colunas
- **Tablet**: Grid com 2 colunas
- **Mobile**: Grid com 1 coluna

## 🔍 SEO e Performance

### Meta Tags Implementadas
- Title dinâmico
- Description otimizada
- Keywords relevantes
- Open Graph para redes sociais
- Twitter Cards
- Viewport responsivo

### Otimizações de Performance
- Lazy loading de imagens
- Componentes otimizados com React.memo
- CSS otimizado com metodologia BEM
- Bundle splitting automático

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta
cd front-end-challenge

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm start
```

### Scripts Disponíveis
```bash
npm start          # Executa em modo desenvolvimento
npm run build      # Gera build de produção
npm test           # Executa testes
npm run eject      # Eject do Create React App
```

## 📋 Critérios de Avaliação Atendidos

### ✅ Organização do Código
- Estrutura de pastas clara e organizada
- Componentes reutilizáveis
- Separação de responsabilidades
- TypeScript para type safety

### ✅ Responsividade
- Design mobile-first
- Breakpoints bem definidos
- Grid system flexível
- Componentes adaptáveis

### ✅ Reaproveitamento de Código
- Componentes modulares
- Hooks customizados
- Utilitários reutilizáveis
- CSS com metodologia BEM

### ✅ SEO
- Meta tags completas
- Estrutura HTML semântica
- URLs amigáveis
- Open Graph implementado

## 🎯 Funcionalidades Extras

### Estados de Loading
- Spinners customizados
- Estados de loading por componente
- Feedback visual durante carregamento

### Tratamento de Erros
- Páginas de erro elegantes
- Mensagens de erro informativas
- Botões de retry

### Acessibilidade
- Focus states visíveis
- Navegação por teclado
- Alt text em imagens
- Estrutura semântica

### UX/UI
- Animações suaves
- Hover effects
- Transições elegantes
- Design moderno com gradientes

## 🔧 Configurações

### TypeScript
- Configuração estrita
- Interfaces bem definidas
- Type safety completo

### ESLint
- Regras de qualidade de código
- Integração com TypeScript
- Prevenção de erros comuns

### Build
- Otimização automática
- Minificação de assets
- Geração de service worker

## 📄 Licença

Este projeto foi desenvolvido como parte do desafio front-end da Apiki.

---

**Desenvolvido por Lucas Sens usando React + TypeScript**
