# API Endpoints: Cost Management Module (v0.1)

**API Base Path:** `/api/v1`

This document outlines the initial set of REST API endpoints for the Cost Management module.

---

## 1. Authentication (`/auth`)

*   **`POST /auth/login`**
    *   **Description:** Authenticates a user and returns a JWT.
    *   **Request Body:** `{ "email": "...", "password": "..." }`
    *   **Response:** `{ "accessToken": "..." }`
*   **`POST /auth/register`**
    *   **Description:** (Optional Initial) Registers a new user. Might be restricted to Admin role initially.
    *   **Request Body:** `{ "email": "...", "password": "...", "name": "...", "role": "..." }`
    *   **Response:** User object or success message.
*   **`GET /auth/me`**
    *   **Description:** Retrieves the profile of the currently authenticated user (using JWT).
    *   **Response:** User object (excluding sensitive info like password hash).

---

## 2. Expense Categories (`/expense-categories`)

*   **`POST /expense-categories`**
    *   **Description:** Creates a new expense category.
    *   **Authorization:** Admin, Finance roles.
    *   **Request Body:** `{ "name": "...", "description": "..." }`
    *   **Response:** Created category object.
*   **`GET /expense-categories`**
    *   **Description:** Lists all available expense categories.
    *   **Authorization:** All authenticated users.
    *   **Response:** Array of category objects.
*   **`GET /expense-categories/{id}`**
    *   **Description:** Gets details of a specific category.
    *   **Authorization:** All authenticated users.
    *   **Response:** Single category object.
*   **`PATCH /expense-categories/{id}`**
    *   **Description:** Updates an existing category.
    *   **Authorization:** Admin, Finance roles.
    *   **Request Body:** `{ "name": "...", "description": "..." }` (Partial updates allowed)
    *   **Response:** Updated category object.
*   **`DELETE /expense-categories/{id}`**
    *   **Description:** Deletes a category (consider soft delete: mark as inactive).
    *   **Authorization:** Admin, Finance roles.
    *   **Response:** Success message or 204 No Content.

---

## 3. Payment Methods (`/payment-methods`)

*   **`POST /payment-methods`**
    *   **Description:** Creates a new payment method.
    *   **Authorization:** Admin, Finance roles.
    *   **Request Body:** `{ "name": "..." }`
    *   **Response:** Created payment method object.
*   **`GET /payment-methods`**
    *   **Description:** Lists all available payment methods.
    *   **Authorization:** All authenticated users.
    *   **Response:** Array of payment method objects.
*   **`GET /payment-methods/{id}`**
    *   **Description:** Gets details of a specific payment method.
    *   **Authorization:** All authenticated users.
    *   **Response:** Single payment method object.
*   **`PATCH /payment-methods/{id}`**
    *   **Description:** Updates an existing payment method.
    *   **Authorization:** Admin, Finance roles.
    *   **Request Body:** `{ "name": "..." }`
    *   **Response:** Updated payment method object.
*   **`DELETE /payment-methods/{id}`**
    *   **Description:** Deletes a payment method.
    *   **Authorization:** Admin, Finance roles.
    *   **Response:** Success message or 204 No Content.

---

## 4. Expenses (`/expenses`)

*   **`POST /expenses`**
    *   **Description:** Creates a new expense record. `user_id` is inferred from the authenticated user.
    *   **Authorization:** Employee, Finance, Manager, Admin.
    *   **Request Body:** `{ "categoryId": ..., "paymentMethodId": ..., "expenseDate": "YYYY-MM-DD", "amount": ..., "currency": "VND", "description": "...", "vendorPayee": "...", "attachmentUrl": "..." }`
    *   **Response:** Created expense object.
*   **`GET /expenses`**
    *   **Description:** Lists expenses with filtering and pagination. Access level depends on role.
    *   **Authorization:** All authenticated users (scope varies by role).
    *   **Query Params:** `page`, `pageSize`, `status`, `userId`, `categoryId`, `startDate`, `endDate`, `sortBy`, `sortOrder`.
    *   **Response:** Paginated list of expense objects.
*   **`GET /expenses/{id}`**
    *   **Description:** Gets details of a specific expense.
    *   **Authorization:** Admin, Finance, Approver, Creator (role-dependent access).
    *   **Response:** Single expense object.
*   **`PATCH /expenses/{id}`**
    *   **Description:** Updates an existing expense. Restrictions apply based on status and role.
    *   **Authorization:** Creator (if status allows), Admin, Finance.
    *   **Request Body:** Partial expense object fields.
    *   **Response:** Updated expense object.
*   **`DELETE /expenses/{id}`**
    *   **Description:** Deletes an expense (likely restricted to 'New' or 'Rejected' status).
    *   **Authorization:** Creator (if status allows), Admin, Finance.
    *   **Response:** Success message or 204 No Content.
*   **`POST /expenses/{id}/approve`**
    *   **Description:** Marks an expense as 'Approved'.
    *   **Authorization:** Manager, Finance (depending on workflow).
    *   **Response:** Updated expense object.
*   **`POST /expenses/{id}/reject`**
    *   **Description:** Marks an expense as 'Rejected'.
    *   **Authorization:** Manager, Finance (depending on workflow).
    *   **Request Body:** `{ "reason": "..." }` (Optional rejection reason)
    *   **Response:** Updated expense object.
*   **`POST /expenses/{id}/pay`**
    *   **Description:** Marks an expense as 'Paid'.
    *   **Authorization:** Finance.
    *   **Response:** Updated expense object.
*   **`POST /expenses/{id}/attachments`**
    *   **Description:** Uploads an attachment file for an expense. Returns the URL/identifier. (Implementation might involve separate storage service).
    *   **Authorization:** Creator, Admin, Finance.
    *   **Request:** Multipart form data with the file.
    *   **Response:** `{ "attachmentUrl": "..." }`

---

## 5. Reporting (`/reports`)

*   **`GET /reports/expenses/summary-by-category`**
    *   **Description:** Gets total expense amounts grouped by category for a given date range.
    *   **Authorization:** Finance, Manager, Admin.
    *   **Query Params:** `startDate`, `endDate`.
    *   **Response:** Array of `{ "categoryName": "...", "totalAmount": ... }`.
*   **`GET /reports/expenses/summary-by-period`**
    *   **Description:** Gets total expense amounts grouped by a time period (e.g., month).
    *   **Authorization:** Finance, Manager, Admin.
    *   **Query Params:** `period` (e.g., 'month', 'week'), `year`, `month`.
    *   **Response:** Array of `{ "period": "...", "totalAmount": ... }`.

---
