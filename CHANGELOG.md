# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/pt-BR/).

---

## [1.1.0] - 2026-03-29

**Frontend integrado ao repositório** - Monorepo completo

### ✨ Adiciona
- ✨ Frontend React movido para repositório principal (monorepo)
- ✨ Integração completa Backend ↔ Frontend no mesmo repo
- ✨ Estrutura organizada com `/backend` e `/frontend`
- ✨ Documentação atualizada com ambos os módulos
- ✨ Pipeline CI/CD para ambos backend e frontend
- ✨ Instrções de setup unificadas no README

### 🔧 Melhorias
- 📦 Monorepo simplifica gestão de versões
- 🚀 Deployment coordenado de backend e frontend
- 📚 Documentação centralizada para stack completo
- 🔄 CI/CD testa ambos os módulos automaticamente

### 📦 Stack Completo Documentado
- **Backend**: Java 21 LTS, Spring Boot 3.4.3, H2 Database
- **Frontend**: React 19.2.4, React Router 7.13.1, Axios, Chart.js
- **Build**: Maven + npm em estrutura monorepo
- **CI/CD**: GitHub Actions validando ambos os módulos

---

## [1.0.0] - 2026-03-29

**API REST com testes e CI/CD** - Release Final Estável

### 🎉 Adiciona (Release Final)
- ✨ Testes automatizados completos (Backend + Frontend)
- ✨ Análise estática com Checkstyle, SpotBugs e ESLint
- ✨ Pipeline CI/CD completa com GitHub Actions
- ✨ Cobertura de testes para casos críticos
- ✨ Documentação completa do projeto
- ✨ Mudança de PostgreSQL para H2 Database
- ✨ Badge de status de build no README
- ✨ Versionamento semântico implementado

### 🔧 Melhorias
- 🔒 Validação robusta de entrada de dados
- 📊 Testes com cobertura de casos principais e limites
- 📚 Documentação de arquitetura e requisitos
- 🚀 Build otimizado para produção
- ♻️ Refatoração de código e padrões consistentes

### 🐛 Correções
- 🐛 Tratamento melhorado de erros em autenticação
- 🐛 Validação de datas em plano de treino
- 🐛 Correção de race conditions em testes

### 📦 Stack Finalizado
- **Backend**: Java 21 LTS, Spring Boot 3.4.3
- **Frontend**: React 19.2.4, React Router 7.13.1
- **Banco**: H2 Database (em memória/arquivo)
- **Build**: Maven 3.8+, npm/Node.js 18+
- **CI/CD**: GitHub Actions

---

## [0.5.0] - 2026-03-25

**Testes automatizados e CI/CD completo**

### ✨ Adiciona
- ✨ Testes unitários com JUnit 5 (Backend)
- ✨ Testes de componentes com React Testing Library (Frontend)
- ✨ Configuração de GitHub Actions workflow
- ✨ Análise estática com Checkstyle (Backend)
- ✨ ESLint configurado para Frontend
- ✨ Relatório de cobertura de testes (JaCoCo)
- ✨ Validação automática em push/pull request

### 🔧 Melhorias
- 📊 Casos de teste para funcionalidades críticas
- 🔍 Detecção de bugs potenciais com SpotBugs
- 🎯 Testes de validação de entrada
- ⚙️ Padrões de commit documentados

---

## [0.4.0] - 2026-03-20

**Sistema de registro de treino completo**

### ✨ Adiciona
- ✨ Endpoints para registrar execução de treinos
- ✨ Entidade `RegistroTreino` com validações
- ✨ Repository e Service para sessões
- ✨ Dashboard no frontend para visualizar progresso
- ✨ Gráficos com Chart.js (volume, intensidade, ritmo)
- ✨ Endpoints REST para consultar histórico

### 🔧 Melhorias
- 📊 Agregação de dados para relatórios
- 🎨 UI responsiva para gráficos
- 🔄 Sincronização automática Backend ↔ Frontend

---

## [0.3.0] - 2026-03-15

**Core do sistema: algoritmo de periodização completo**

### ✨ Adiciona
- ✨ Algoritmo de periodização desportiva (4 fases)
- ✨ Entidade `PlanoTreino` com estrutura semanal
- ✨ Cálculo automático de semanas baseado em objetivo e data
- ✨ Suporte a diferentes objetivos (5K, 10K, Meia Maratona, Maratona)
- ✨ Geração automática de sessões por semana
- ✨ Fases: Base → Desenvolvimento → Pico → Taper
- ✨ Endpoints `POST /api/planos` para gerar novo plano
- ✨ Endpoints `GET /api/planos` para listar planos

### 🔧 Melhorias
- 🧮 Lógica de distribuição de treinos por fase
- 🎯 Validação de datas de prova
- 📅 Geração automática de semanas e sessões

---

## [0.2.0] - 2026-03-10

**Autenticação JWT completa**

### ✨ Adiciona
- ✨ Autenticação com JWT (JJWT 0.12.6)
- ✨ Endpoints de registro (`POST /api/auth/register`)
- ✨ Endpoints de login (`POST /api/auth/login`)
- ✨ Geração e validação de tokens
- ✨ Refresh token para sessões prolongadas
- ✨ Spring Security configurado
- ✨ Proteção de rotas com filtro JWT
- ✨ Context API de autenticação no Frontend

### 🔧 Melhorias
- 🔒 Criptografia de senhas com BCrypt
- 🛡️ Proteção CORS habilitada
- 👤 Armazenamento de usuário em sessão (Frontend)

---

## [0.1.0] - 2026-03-05

**Estrutura inicial: entidades e enums**

### ✨ Adiciona
- ✨ Estrutura de pastas Backend (Spring Boot)
- ✨ Estrutura de pastas Frontend (React)
- ✨ Entidade `Usuario` com atributos básicos
- ✨ Entidade `PerfilCorredor` (objetivo, nível, dias)
- ✨ Enums: `ObjetivoCorrida`, `NivelExperiencia`, `DiaSemana`, `FaseTreino`
- ✨ Repository base com Spring Data JPA
- ✨ Configuração de banco H2 para desenvolvimento
- ✨ Páginas iniciais React (Login, Register, Home)
- ✨ Navegação com React Router
- ✨ Configuração de CORS

### 🔧 Melhorias
- 🏗️ Arquitetura em camadas (Controller → Service → Repository)
- 📦 Organização de pacotes por domínio
- 🎨 Estrutura base de componentes React

---

## 📋 Histórico de Versões

| Versão | Data | Commits | Milestone |
|--------|------|---------|-----------|
| v1.1.0 | 2026-03-29 | *(today)* | 📦 **Monorepo** - Frontend integrado |
| v1.0.0 | 2026-03-29 | `06672ca` | 🚀 **Release Final** - Produto pronto |
| v0.5.0 | 2026-03-25 | `90347e9` | ✅ Testes e CI/CD |
| v0.4.0 | 2026-03-20 | `a27c3f6` | 📊 Acompanhamento completo |
| v0.3.0 | 2026-03-15 | `6e4fb45` | 🧮 Core da lógica |
| v0.2.0 | 2026-03-10 | `a85e481` | 🔐 Autenticação |
| v0.1.0 | 2026-03-05 | *(inicial)* | 🏗️ Scaffold |

---

## 🎯 Notas Importantes

### Mudança de Banco de Dados (v1.0.0)
- **De**: PostgreSQL 15+
- **Para**: H2 Database
- **Motivo**: Simplificar setup, facilitar testes, eliminar dependências externas
- **Benefício**: Projeto agora roda 100% sem instalações externas - ideal para avaliação

### Prática de Versionamento
Este projeto segue **Semantic Versioning** (MAJOR.MINOR.PATCH):
- **MAJOR** (1.0.0): Mudanças incompatíveis ou release final
- **MINOR** (0.5.0): Novas features compatíveis
- **PATCH**: Correções (não utilizado neste projeto)

### Distribuição de Features por Versão
- **v0.1-v0.3**: Core funcional (backend)
- **v0.4**: Integração e visualização (full-stack)
- **v0.5**: Qualidade e automação (testes + CI
- **v1.1**: Monorepo e consolidação (frontend centralizado)/CD)
- **v1.0**: Estabilização e release (produção)

---

**Desenvolvido como projeto para a disciplina de Bootcamp ll do curso de ADS**
