# Contribuindo para PaceX

Obrigado pelo interesse em contribuir! Este documento fornece diretrizes para ajudá-lo a contribuir de forma efetiva.

## Código de Conduta

Por favor, leia e siga nosso Código de Conduta (em desenvolvimento). Espera-se que todos os contribuidores mantenham um ambiente respeitoso e inclusive.

## Como Contribuir

### 1. Relatando Bugs

- Abra uma [Issue](https://github.com/seu_usuario/PaceX/issues) com:

- **Título claro e descritivo**
- **Descrição detalhada do comportamento observado**
- **Passos para reproduzir o problema**
- **Comportamento esperado vs comportamento atual**
- **Screenshots ou logs** (se aplicável)
- **Ambiente:** Sistema operacional, Java version, Node version, etc.

### 2. Sugerindo Melhorias

Ideias são bem-vindas! Para sugerir uma melhoria:

- Abra uma [Issue](https://github.com/seu_usuario/PaceX/issues)
- Use título claro como: \"**[FEATURE]** Adicionar análise de desempenho\"
- Descreva o problema que resolve
- Explique por que essa melhoria seria útil
- Liste exemplos de como seria usado

### 3. Enviando Pull Requests

Siga estes passos:

#### 3.1 Fork e Clone

```bash
# Fork no GitHub (clique em "Fork")
git clone https://github.com/seu_usuario/PaceX.git
cd PaceX
git remote add upstream https://github.com/usuario_original/PaceX.git
```

#### 3.2 Criar Branch

```bash
# Atualize a branch main
git fetch upstream
git checkout main
git merge upstream/main

# Crie uma branch para sua feature
git checkout -b feature/descricao-da-feature
# ou para bug fix
git checkout -b fix/descricao-do-bug
```

#### 3.3 Faça suas Alterações

- Escreva código limpo e bem documentado
- Siga os padrões de estilo para a linguagem
- Adicione ou atualize testes se necessário
- Execute linting localmente

```bash
# Backend
mvn checkstyle:check
mvn spotbugs:check
mvn test

# Frontend
cd frontend
npm run lint
npm test
```

#### 3.4 Commit

Use mensagens de commit descritivas:

```bash
git commit -m "feat: adicionar validação de email no registro"
# ou
git commit -m "fix: corrigir cálculo de ritmo médio"
# ou
git commit -m "docs: atualizar instruções de instalação"
```

**Formatos recomendados:**
- `feat:` para novas funcionalidades
- `fix:` para correções de bugs
- `docs:` para documentação
- `style:` para formatação
- `refactor:` para refatoração
- `test:` para testes
- `ci:` para CI/CD

#### 3.5 Push e Pull Request

```bash
git push origin feature/descricao-da-feature
```

Vá para GitHub e clique em "Compare & pull request"

**No pull request, inclua:**
- Descrição clara do que foi mudado
- Link da issue relacionada (ex: Closes #123)
- Screenshots se for alteração visual
- Teste os passos manualmente

```markdown
## Descrição
Adiciona validação de email no formulário de registro

## Issue Relacionada
Closes #45

## Tipo de Mudança
- [x] Bugfix
- [ ] Feature
- [ ] Breaking change
- [ ] Documentation

## Como foi Testado?
Testado em navegador Chrome e Firefox
```

## Padrões de Código

### Backend (Java)

```java
// Use nomes descritivos
private String nomeDoUsuario; // ✅ correto
private String name; // ❌ evitar

// Siga a estrutura Spring
@Service
public class PerfilService {
    @Autowired
    private PerfilRepository repository;
    
    public PerfilDTO criar(PerfilRequest request) {
        // implementação
    }
}

// Adicione Javadoc para métodos públicos
/**
 * Cria um novo perfil de corredor
 * @param request dados do perfil
 * @return perfil criado
 * @throws IllegalArgumentException se objetivo inválido
 */
public PerfilDTO criar(PerfilRequest request) {
    // implementação
}
```

### Frontend (React/JavaScript)

```javascript
// Use camelCase para variáveis
const userProfile = {}; // ✅ correto
const user_profile = {}; // ❌ evitar

// Use functional components
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return <nav>...</nav>;
}

// Use componentes com nomes em PascalCase
export default Navbar;
```

### Testes

```java
// Backend - nomenclatura clara
@Test
void test_WhenValidInputProvided_ThenShouldReturnSuccessfully() {
    // Arrange
    PerfilRequest request = new PerfilRequest();
    
    // Act
    PerfilDTO result = service.criar(request);
    
    // Assert
    assertNotNull(result);
}
```

```javascript
// Frontend - nomenclatura clara
test('should render Navbar with active links', () => {
  render(<Navbar />);
  expect(screen.getByRole('navigation')).toBeInTheDocument();
});
```

## Estrutura de Pastas

Mantenha a organização existente:

**Backend:**
```
src/main/java/com/corridaapp/corridatreino/
├── controller/          # REST endpoints
├── service/            # Lógica de negócio
├── repository/         # Acesso a dados
├── entity/             # Modelos JPA
├── dto/                # Data Transfer Objects
├── enums/              # Enumerações
└── config/             # Configurações
```

**Frontend:**
```
frontend/src/
├── components/         # Componentes reutilizáveis
├── pages/             # Páginas completas
├── services/          # Chamadas API
├── context/           # Context API
├── styles/            # Estilos CSS
└── App.js             # Componente raiz
```

## Configurações Locais

### ESLint + Prettier (Frontend)

```bash
cd frontend

# Formatar tudo
npm run lint -- --fix

# Checar formatação
npm run format
```

### Checkstyle (Backend)

```bash
# Verificar padrão
mvn checkstyle:check

# Gerar relatório detalhado
mvn checkstyle:checkstyle
# Relatório em: target/checkstyle-result.xml
```

## Antes de Enviar

- [ ] Código passou em linting local
- [ ] Testes passam localmente
- [ ] Sem conflitos de merge
- [ ] Mensagens de commit estão claras
- [ ] Documentação foi atualizada
- [ ] README foi atualizado (se necessário)
- [ ] Sem credenciais ou dados sensíveis no código

## Perguntas?

- 📧 Abra uma [Discussion](https://github.com/seu_usuario/PaceX/discussions)
- 🐛 Relate um problema em [Issues](https://github.com/seu_usuario/PaceX/issues)
- 💬 Participe da conversa na comunidade

---

**Agradeço sua contribuição! 🙏**
