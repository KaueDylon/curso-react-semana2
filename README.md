# 📋 Gerenciador de Tarefas

Projeto desenvolvido com **React (Vite) + TailwindCSS + JSON Server** com o objetivo de praticar conceitos fundamentais de front-end, como componentização, gerenciamento de estado e consumo de API.

---

## 🚀 Funcionalidades

- ✅ Criar novas tarefas
- ✏️ Editar tarefas existentes (via modal)
- 🗑️ Remover tarefas
- 🔍 Buscar tarefas dinamicamente (com debounce)
- 📡 Integração com API fake usando json-server

---

## 🧠 Conceitos praticados

- Componentes reutilizáveis
- Props e comunicação entre componentes
- Hooks do React:
  - `useState`
  - `useEffect`
  - `useReducer`
- Custom Hooks (`useDebounce`)
- Manipulação de listas e estado imutável
- Consumo de API com `fetch`
- Debounce para otimização de requisições

---

## 🛠️ Tecnologias utilizadas

- React
- TailwindCSS
- json-server
- Lucide Icons

---

## ▶️ Como rodar o projeto

### 1. Instale as dependências do projeto:

```bash
npm install
```

### 2. Inicie a dependência na porta correta:

```bash
npx json-server --watch db.json --port 3001
```

obs: a porta padrão do json-server sempre é a 3000.

### 3. Rode o projeto React:

```bash
npm run dev
```
