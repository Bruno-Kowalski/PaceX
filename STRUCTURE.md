# Estrutura Final do Projeto

## 📂 Organização do Diretório

O projeto foi reorganizado seguindo as melhores práticas de projetos profissionais:

```
corrida-treino/
├── .github/
│   └── workflows/
│       └── ci.yml                 # Pipeline CI/CD com GitHub Actions
├── backend/                       # Spring Boot (Java 21)
│   ├── .mvn/                      # Maven wrapper
│   ├── src/
│   │   ├── main/java/com/corridaapp/corridatreino/
│   │   │   ├── config/            # JwtUtil, JwtFilter, SecurityConfig
│   │   │   ├── controller/        # REST endpoints
│   │   │   ├── service/           # Business logic
│   │   │   ├── repository/        # Data access (JPA)
│   │   │   ├── entity/            # JPA entities
│   │   │   ├── dto/               # Data transfer objects
│   │   │   ├── enums/             # Java enums
│   │   │   └── CorridaTreinoApplication.java
│   │   └── test/java/
│   ├── pom.xml                    # Maven configuration
│   ├── mvnw                       # Maven wrapper (Linux/Mac)
│   ├── mvnw.cmd                   # Maven wrapper (Windows)
│   └── target/                    # Build output (gitignored)
├── frontend/                      # React 19.2.4
│   ├── src/
│   │   ├── components/            # React components
│   │   ├── pages/                 # Page components
│   │   ├── context/               # Context API (AuthContext)
│   │   ├── services/              # API calls (Api.js, Services.js)
│   │   ├── styles/                # CSS files
│   │   ├── App.js
│   │   └── index.js
│   ├── public/                    # Static assets
│   ├── package.json               # npm dependencies
│   ├── .eslintrc.json             # ESLint configuration
│   ├── .prettierrc                # Prettier configuration
│   └── node_modules/              # Dependencies (gitignored)
├── docs/                          # Documentation
│   ├── requirements.md            # Functional & non-functional requirements
│   └── architecture.md            # System architecture & design
├── postman/                       # API testing collections
│   ├── globals/                   # Postman globals
│   └── resources.yaml
├── .gitignore                     # Git ignore patterns (backend + frontend)
├── .gitattributes                 # Git attributes
├── README.md                      # Project overview (13 mandatory points)
├── CHANGELOG.md                   # Version history
├── CONTRIBUTING.md                # Contribution guidelines
└── LICENSE                        # MIT license

Nota: O diretório `corrida-treino-frontend/` (antiga estrutura) será removido 
após fechar processos que possam estar usando-o.
```

## 🔄 Mudanças Realizadas

### Backend Reorganização
- ✅ Movido `.mvn/` → `backend/.mvn/`
- ✅ Movido `src/` → `backend/src/`
- ✅ Movido `pom.xml` → `backend/pom.xml`
- ✅ Movido `mvnw` → `backend/mvnw`
- ✅ Movido `mvnw.cmd` → `backend/mvnw.cmd`
- ✅ Movido `target/` → `backend/target/`

### Frontend Reorganização
- ✅ Movido `corrida-treino-frontend/` → `frontend/`
- ✅ Estrutura React mantida idêntica
- ✅ Configurações ESLint e Prettier preservadas

### Documentação
- ✅ Criado `docs/requirements.md` (RF e RNF)
- ✅ Criado `docs/architecture.md` (visão geral, componentes, padrões)

### CI/CD Atualização
- ✅ Atualizado `.github/workflows/ci.yml` com novos paths:
  - Backend: `working-directory: ./backend`
  - Frontend: `working-directory: ./frontend`

### Postman
- ✅ Movido `.postman/` → `postman/`
- ✅ Collections consolidadas

## 📊 Informações do Projeto

| Aspecto | Valor |
|---------|-------|
| **Nome** | Corrida Treino |
| **Versão** | v1.0.0 |
| **Backend** | Java 21, Spring Boot 3.4.3 |
| **Frontend** | React 19.2.4 |
| **Database** | PostgreSQL 15+ |
| **Build Tool** | Maven 3.9+, npm 10+ |
| **License** | MIT |
| **Repository** | https://github.com/Bruno-Kowalski/corrida-treino |

## 🚀 Próximos Passos

1. **Remover `corrida-treino-frontend/`**: Execute `Remove-Item -Path corrida-treino-frontend -Recurse -Force` após fechar VS Code se necessário
2. **Verificar CI/CD**: Faça um push para triggerar o pipeline e validar os novos paths
3. **Testar Build**:
   - Backend: `cd backend && mvn clean package`
   - Frontend: `cd frontend && npm install && npm build`

## ✅ Validação

```bash
# Verificar estrutura
ls -la backend/src/
ls -la frontend/src/

# Verificar CI/CD pipeline
cat .github/workflows/ci.yml | grep "working-directory"

# Verificar documentação
wc -l docs/*.md
```

## 📝 Notas

- **Git LF/CRLF**: Warnings são normais em Windows (Git converterá automaticamente)
- **Build Isolation**: Backend e Frontend agora podem ser desenvolvidos e deployados independentemente
- **Monorepo**: Estrutura permite gerenciar ambos os projetos no mesmo repositório com pipelines separados
