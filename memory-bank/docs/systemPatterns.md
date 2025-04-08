# System Patterns: Company Management System

*(This document will outline the system architecture, key technical decisions, design patterns, component relationships, and critical implementation paths as they are defined.)*

## 1. Overall Architecture

*   **Chosen Architecture:** **Modular Monolith**.
*   **Rationale:** Balances initial development speed and cost-effectiveness with future scalability. The application will be built as a single deployable unit but internally structured into distinct modules (e.g., Cost Management, User Management) to facilitate potential future separation into microservices if needed.
*   **Flow:** Frontend (React) communicates with Backend (NestJS) via REST APIs. Backend handles business logic and interacts with the PostgreSQL database.

*   Reference Diagram: `../diagrams/architecture.puml` (To be created)
*   Generated Diagram: `../generated-diagrams/architecture.png` (To be created)

## 2. Database Schema (v0.1 - Cost Management Focus)

*   **Description:** The initial schema focuses on core entities for managing expenses: Users, Expense Categories, Payment Methods, and the main Expenses table linking them together. It includes basic fields for tracking expense details, status, and optional attachments/approvals. Designed for PostgreSQL.
*   **Source File:** `../diagrams/db_schema_v0.1.puml`
*   **Generated Diagram:** `../generated-diagrams/db_schema_v0.1.png`

## 3. Key Technical Decisions

*(To be documented as decisions are made, e.g., database choice, backend framework, frontend framework, authentication method.)*

## 4. Design Patterns

*(To be documented as patterns are implemented, e.g., Repository Pattern for data access, MVC/MVVM for UI structure.)*

## 5. Component Relationships (Initial Focus: Cost Management)

*(To be defined. How does the Cost Management module interact with potential future modules like User Management, Reporting, etc.?)*

## 6. Critical Implementation Paths

*(To be identified. E.g., Secure handling of financial data, efficient reporting queries.)*
