# 🏃 PaceX

> Plataforma inteligente de treinamento para corredores que oferece planos de treino personalizados baseados em periodização científica, com execução guiada por GPS e feedback em tempo real.

## 🚀 Acesse a aplicação

🔗 **Frontend:** [https://pace-x-gold.vercel.app](https://pace-x-gold.vercel.app)  
🔗 **Backend:** [https://backend-airy-pebble-5471.fly.dev](https://backend-airy-pebble-5471.fly.dev)  
🗄️ **Banco:** Supabase (PostgreSQL)

---

[![Versão](https://img.shields.io/badge/Vers%C3%A3o-1.0.0-blue)](https://github.com/Bruno-Kowalski/PaceX/releases)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.4.3-green)](https://spring.io/projects/spring-boot)
[![Java](https://img.shields.io/badge/Java-21%20LTS-blue)](https://www.oracle.com/java/technologies/downloads/#java21)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen)](https://github.com/Bruno-Kowalski/PaceX/actions)

---

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Como Executar Localmente](#como-executar-localmente)
- [Testes](#testes)
- [Deploy](#deploy)
- [Autor](#autor)

---

## Sobre o Projeto

**PaceX** resolve um problema real: corredores amadores não sabem como treinar de forma estruturada e segura. A plataforma gera planos de treino personalizados com periodização científica e conta com execução guiada por GPS, feedback inteligente de pace em tempo real e dados climáticos automáticos via API Open-Meteo.

---

## Funcionalidades

| Feature | Descrição |
|---------|-----------|
| 🔐 **Autenticação JWT** | Cadastro e login seguros |
| 👤 **Perfil Personalizado** | Objetivo, nível e dias disponíveis |
| 📋 **Plano Periodizado** | 4 fases: Base → Desenvolvimento → Pico → Taper |
| 🗺️ **Execução GPS** | Mapa em tempo real com trajeto |
| 📊 **Métricas ao vivo** | Distância, tempo e pace durante o treino |
| 🧠 **Feedback inteligente** | Alertas de pace vs meta em tempo real |
| 🌦️ **Dados climáticos** | Temperatura e condições via Open-Meteo |
| 📈 **Histórico** | Registro completo de treinos realizados |

---

## Tecnologias

### Backend
- Java 21 + Spring Boot 3.4.3
- Spring Security + JWT
- Spring Data JPA + PostgreSQL (Supabase)
- Open-Meteo API (dados climáticos)
- JUnit 5 + JaCoCo

### Frontend
- React 19
- Leaflet (mapas GPS)
- Axios
- React Router

### DevOps
- GitHub Actions (CI/CD)
- Docker (deploy backend)
- Vercel (frontend)
- Fly.io (backend)
- Supabase (PostgreSQL)

---

## Como Executar Localmente

### Pré-requisitos
- Java 21
- Node.js 18+
- Arquivo `.env` na raiz do backend (veja `.env.example`)

### Backend

Crie o arquivo `.env` em `backend/`:

```env
SPRING_DATASOURCE_URL=jdbc:postgresql://<host>:5432/postgres?sslmode=require
SPRING_DATASOURCE_USERNAME=postgres
SPRING_DATASOURCE_PASSWORD=sua_senha
JWT_SECRET=seu_secret
```

Depois rode:

```bash
cd backend
./mvnw spring-boot:run
```

Disponível em: http://localhost:8080

### Frontend

```bash
cd frontend
npm install
npm start
```

Disponível em: http://localhost:3000

---

## Testes

```bash
cd backend
./mvnw test
```

| Teste | Descrição |
|-------|-----------|
| `PeriodizacaoServiceTest` | 9 testes unitários de geração de planos |
| `OpenMeteoIntegracaoTest` | 2 testes de integração com API Open-Meteo |
| `CorridaTreinoApplicationTests` | Teste de inicialização do contexto |

---

## Deploy

| Serviço | Plataforma | URL |
|---------|-----------|-----|
| Frontend | Vercel | https://pace-x-gold.vercel.app |
| Backend | Fly.io | https://backend-airy-pebble-5471.fly.dev |
| Banco | Supabase (PostgreSQL) | https://supabase.com/ |

---

## Autor

**Bruno Santos**  
📧 brunosantos6235@gmail.com  
🔗 [GitHub](https://github.com/Bruno-Kowalski) · [LinkedIn](https://www.linkedin.com/in/bruno-santos-devkowa/)

---

## 📄 Licença

MIT License — veja [LICENSE](LICENSE) para detalhes.

---

<div align="center">
Desenvolvido por Bruno Santos | 2026
</div>
