# Estrutura do Projeto - PaceX

## 📋 Visão Geral

O **PaceX** é uma aplicação full-stack para gerenciamento e análise de treinos de corrida com recursos avançados de acompanhamento de desempenho. O projeto é divido em três camadas principais:

- **Backend**: API REST em Java/Spring Boot
- **Frontend**: Interface web em React
- **Documentação**: Requisitos, arquitetura e testes

---

## 🏗️ Arquitetura Geral

```
PaceX/
├── backend/          # API REST (Java/Spring Boot)
├── frontend/         # Interface web (React)
├── docs/             # Documentação do projeto
├── postman/          # Collections para testes de API
└── [configs]         # Arquivos de configuração (README, LICENSE, etc)
```

---

## 📁 Estrutura de Diretórios

### Backend (`/backend`)

#### Descrição
API REST desenvolvida em **Java 11+** com **Spring Boot** e **Maven**. Implementa a lógica de negócios da aplicação PaceX.

#### Estrutura
```
backend/
├── pom.xml                    # Configuração e dependências Maven
├── mvnw                       # Maven Wrapper (Linux/Mac)
├── mvnw.cmd                   # Maven Wrapper (Windows)
│
├── src/main/
│   ├── java/com/corridaapp/corridatreino/
│   │   ├── CorridaTreinoApplication.java    # Classe principal da aplicação
│   │   ├── config/                          # Configurações (Security, CORS, etc)
│   │   ├── controller/                      # Controllers (endpoints HTTP)
│   │   ├── service/                         # Lógica de negócios
│   │   ├── repository/                      # Acesso a dados (JPA/Spring Data)
│   │   ├── entity/                          # Entidades JPA (modelos de dados)
│   │   ├── dto/                             # Data Transfer Objects
│   │   └── enums/                           # Enumerações
│   │
│   └── resources/
│       └── application.properties            # Configurações da aplicação
│
├── src/test/
│   ├── java/com/corridaapp/corridatreino/   # Testes unitários
│   └── resources/
│       └── application-test.properties       # Configurações para testes
│
└── target/                                   # Artefatos compilados (gerado)
    ├── classes/                              # Classes compiladas
    ├── generated-sources/                    # Código gerado (anotações, etc)
    ├── surefire-reports/                     # Relatórios de testes
    └── *.jar                                 # JARs gerados
```

#### Stack Backend
- **Framework**: Spring Boot
- **Linguagem**: Java
- **Gerenciador de Dependências**: Maven
- **BD**: (A ser configurado em `application.properties`)
- **Testes**: JUnit, Surefire

### Frontend (`/frontend`)

#### Descrição
Interface web desenvolvida em **React** com componentes modernos e gerenciamento de estado. Fornece a experience do usuário para o PaceX.

#### Estrutura
```
frontend/
├── package.json                 # Dependências e scripts NPM
│
├── public/
│   ├── index.html              # HTML principal
│   ├── manifest.json           # Metadados PWA
│   └── robots.txt              # Diretivas para crawlers
│
└── src/
    ├── index.js                # Ponto de entrada da aplicação
    ├── App.js                  # Componente raiz
    ├── App.css                 # Estilos globais do App
    ├── index.css               # Estilos globais
    │
    ├── components/             # Componentes reutilizáveis
    │   └── Navbar.jsx
    │
    ├── pages/                  # Páginas/Telas da aplicação
    │   ├── Home.jsx
    │   ├── Login.jsx
    │   ├── Register.jsx
    │   ├── Dashboard.jsx
    │   └── Perfil.jsx
    │
    ├── services/               # Serviços (API, autenticação)
    │   ├── Api.js              # Configuração de requisições HTTP
    │   └── Services.js         # Lógica de chamadas à API
    │
    ├── context/                # Context API (gerenciamento de estado)
    │   └── AuthContext.js      # Contexto de autenticação
    │
    ├── styles/                 # Estilos adicionais
    │   └── global.css
    │
    └── setupTests.js           # Configuração de testes
```

#### Stack Frontend
- **Framework**: React
- **Gerenciador de Estado**: Context API
- **Gerenciador de Pacotes**: npm
- **Estilos**: CSS puro
- **Navegação**: (A ser configurado)

### Documentação (`/docs`)

```
docs/
├── architecture.md            # Documentação de arquitetura
└── requirements.md            # Requisitos funcionais e não-funcionais
```

### Testes de API (`/postman`)

```
postman/
├── resources.yaml             # Definições de endpoints
└── globals/
    └── workspace.globals.yaml  # Variáveis globais
```

---

## 🔄 Fluxo de Arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (React)                         │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Pages (Home, Login, Dashboard, Perfil)              │   │
│  │ ├── Components (Navbar, etc)                        │   │
│  │ ├── Context (AuthContext)                           │   │
│  │ └── Services (Api.js, Services.js)                  │   │
│  └──────────────────────────────────────────────────────┘   │
└────────────────────────────┬────────────────────────────────┘
                             │ HTTP/REST
                             │
┌────────────────────────────▼────────────────────────────────┐
│                  BACKEND (Java/Spring)                      │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Controllers (Endpoints HTTP)                        │   │
│  │ ├── Services (Lógica de Negócios)                   │   │
│  │ ├── Repository (Acesso a Dados)                     │   │
│  │ └── Entities (Modelos de Dados)                     │   │
│  └──────────────────────────────────────────────────────┘   │
└────────────────────────────┬────────────────────────────────┘
                             │ JDBC/SQL
                             │
┌────────────────────────────▼────────────────────────────────┐
│                    DATABASE                                 │
│  (Configurar em backend/src/main/resources/)               │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Como Executar

### Backend

```bash
cd backend

# Usando Maven Wrapper
./mvnw spring-boot:run        # Linux/Mac
mvnw.cmd spring-boot:run      # Windows

# Ou com Maven instalado
mvn spring-boot:run

# Construir artefato
./mvnw clean package
```

**Porta padrão**: `http://localhost:8080`

### Frontend

```bash
cd frontend

# Instalar dependências
npm install

# Executar em desenvolvimento
npm start

# Construir para produção
npm run build
```

**Porta padrão**: `http://localhost:3000`

---

## 📦 Arquivos de Configuração Principais

| Arquivo | Descrição |
|---------|-----------|
| `README.md` | Documentação geral do projeto |
| `CONTRIBUTING.md` | Guia para contribuidores |
| `LICENSE` | Licença do projeto |
| `CHANGELOG.md` | Histórico de mudanças |
| `STRUCTURE.md` | Este arquivo (estrutura do projeto) |

---

## 🧪 Testes

### Backend
- **Framework**: JUnit
- **Execução**: `./mvnw test` ou `mvn test`
- **Relatórios**: `backend/target/surefire-reports/`

### Frontend
- **Configuração em**: `src/setupTests.js`
- **Execução**: `npm test`

### API
- **Collection Postman**: `postman/resources.yaml`
- **Variáveis Globais**: `postman/globals/workspace.globals.yaml`

---

## 📝 Convenções do Projeto

### Nomenclatura
- **Java**: `CamelCase` para classes, `camelCase` para métodos e variáveis
- **JavaScript/React**: `camelCase` para funções e variáveis, `PascalCase` para componentes
- **Arquivos**: Usar extensão `.jsx` para componentes React

### Estrutura de Commits
*(Ver `CONTRIBUTING.md` para detalhes)*

---

## 🔗 Próximos Passos

1. Configure o banco de dados em `backend/src/main/resources/application.properties`
2. Implemente os endpoints REST necessários
3. Crie os componentes e páginas do frontend
4. Configure autenticação e autorização
5. Adicione testes unitários e de integração

---

## 📚 Documentação Adicional

- [Arquitetura Detalhada](./docs/architecture.md)
- [Requisitos do Projeto](./docs/requirements.md)
- [Contribuindo](./CONTRIBUTING.md)

