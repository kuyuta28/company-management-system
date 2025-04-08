# Decision Log: Company Management System

*(This document records significant technical or product decisions made throughout the project lifecycle, including the context, options considered, the decision, and the rationale.)*

---

**Date:** [Date of Scope Shift - e.g., 2025-04-08]

*   **Decision:** Shift project's initial focus from "Funding Source Management" to "Cost/Expenditure Management".
*   **Context:** Initial request was to plan for managing funding sources. CEO clarification indicated the primary need is to understand and track company spending.
*   **Options Considered:**
    1.  Proceed with funding source management as initially requested.
    2.  Pivot to focus on expenditure management based on CEO's clarified priority.
*   **Rationale:** Directly addresses the CEO's stated primary need for visibility into company spending. Building the expenditure module first provides more immediate value based on the clarified requirements. Funding source management can be considered as a future module if needed.

---

**Date:** [Current Date - e.g., 2025-04-08]

*   **Decision:** Agreed on the initial set of detailed requirements for the Cost Management module (v0.1).
*   **Context:** Following the scope shift to cost management, a standard set of requirements covering data fields, basic approval workflow, core reports, user roles, and initial stance on integration/budgeting was proposed by the Tech Lead.
*   **Options Considered:**
    1.  Accept the proposed standard requirements.
    2.  Request modifications or further detail on specific areas (e.g., more complex approval, specific reports).
*   **Rationale:** The proposed requirements cover the essential functionalities needed for the initial version (v0.1) to provide value in tracking expenditures, aligning with the CEO's primary goal. The design allows for future expansion (more complex workflows, reports, integrations, budgeting).

---

**Date:** [Current Date - e.g., 2025-04-08]

*   **Decision:** Adopt the following technology stack and architecture for the initial phase (v0.1):
    *   **Architecture:** Modular Monolith
    *   **Backend:** Node.js / NestJS (TypeScript)
    *   **Frontend:** React (TypeScript)
    *   **Database:** PostgreSQL (Cloud for Prod/Staging, Docker container for CI Integration Tests)
    *   **CI/CD:** GitHub Actions
*   **Context:** Need to select a suitable and cost-effective tech stack and architecture following the definition of initial requirements for the Cost Management module.
*   **Options Considered:**
    *   Various backend frameworks (Spring Boot, Django, etc.)
    *   Various frontend frameworks (Angular, Vue, etc.)
    *   Various databases (MySQL, MongoDB, etc.)
    *   Microservices vs. Monolith architecture.
    *   Different CI/CD tools.
*   **Rationale:** The chosen stack (NestJS, React, PostgreSQL) offers a modern, efficient development experience with TypeScript consistency, strong community support, and good performance. PostgreSQL is a robust open-source relational database suitable for financial data. The Modular Monolith architecture balances initial development speed/cost with future scalability needs. GitHub Actions integrates well with the chosen repository host and supports service containers for testing without requiring local DB installs for developers. This aligns with the goals of leveraging internal team capabilities and minimizing operational costs.

---

*(Add new decisions chronologically below this line)*
