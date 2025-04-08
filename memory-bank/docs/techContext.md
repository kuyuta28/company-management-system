# Technical Context: Company Management System

*(This document will detail the technologies used, development setup guidelines, technical constraints, dependencies, and specific tool usage patterns.)*

## 1. Technologies Used

*   **Backend Language/Framework:** **Node.js / NestJS** (with TypeScript)
*   **Frontend Language/Framework:** **React** (with TypeScript)
*   **Database:**
    *   **Production/Staging:** **PostgreSQL** (Managed Cloud Service - e.g., AWS RDS, Google Cloud SQL)
    *   **Integration Testing (CI):** **PostgreSQL** (via Docker container in GitHub Actions)
    *   **Unit Testing:** None / In-Memory / Mocks
*   **API Style:** **REST** (following `.clinerules/agent.API-standards-template.md`)
*   **Authentication:** (To be decided - likely JWT)
*   **Containerization:** **Docker**
*   **Deployment/Orchestration:** (To be decided - Initial deployment likely simple container hosting, potentially evolving)
*   **Testing Frameworks:** Jest (common for both NestJS and React), potentially React Testing Library (Frontend), Supertest (Backend API testing). Adherence to `.clinerules/development-guidelines.md` is mandatory.

## 2. Development Setup

*(To be defined. Will include instructions for setting up the local development environment, required tools, environment variables, etc.)*

## 3. Technical Constraints

*   **Cost Minimization:** Prioritize open-source technologies and solutions that minimize external operational costs (SaaS subscriptions, managed cloud services where self-hosting is viable). Leverage internal team capabilities for management.
*   **Team Capability:** Assume a strong internal technical team capable of managing infrastructure and learning new technologies.
*   **Security:** Implement standard security best practices for web applications, especially concerning financial data.
*   **Scalability:** While starting potentially as a monolith, design with future scalability in mind (e.g., modular design).

## 4. Dependencies

*(To be listed as external libraries or services are chosen.)*

## 5. Tool Usage Patterns

*   **Version Control:** Git, following Gitflow strategy (`.clinerules/agent.gitflow.md`).
*   **Code Quality:** Adhere to Clean Code (`.clinerules/agent.clean-code.md`) and Code Quality (`.clinerules/agent.codequality.md`) guidelines. Linting tools (e.g., ESLint, Prettier) will be configured.
*   **CI/CD:** **GitHub Actions**. Will be used for running linters, unit tests, integration tests (using PostgreSQL service container), building artifacts, and potentially deployment.
*   **Documentation:** Maintain Memory Bank rigorously. Use PlantUML for diagrams.
