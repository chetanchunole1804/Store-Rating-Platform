# Store Rating Platform – NestJS Backend

## 📦 Tech Stack
- NestJS (v10+)
- TypeORM + MySQL
- Passport JWT Auth
- Role-Based Access Control (RBAC)
- Class Validator + DTOs

---

## 🔐 Auth API

| Method | Endpoint        | Roles      | Description        |
|--------|-----------------|------------|--------------------|
| POST   | `/api/auth/signup` | Public | Register a normal user |
| POST   | `/api/auth/login`  | Public | Login and receive token |
| POST   | `/api/auth/logout` | Authenticated | Clear auth cookie |

---

## 👤 Users API

| Method | Endpoint            | Roles   | Description              |
|--------|---------------------|---------|--------------------------|
| GET    | `/api/users`        | admin   | Get all users            |
| GET    | `/api/users/me`     | any     | Get current user profile |
| POST   | `/api/users`        | admin   | Create user              |
| PUT    | `/api/users/:id`    | admin   | Update user              |
| DELETE | `/api/users/:id`    | admin   | Delete user              |

---

## 🏬 Stores API

| Method | Endpoint               | Roles             | Description                  |
|--------|------------------------|-------------------|------------------------------|
| GET    | `/api/stores`          | all               | Browse all stores            |
| GET    | `/api/stores/my`       | store-owner       | Get stores owned by self     |
| POST   | `/api/stores`          | store-owner/admin | Create a store               |
| PUT    | `/api/stores/:id`      | store-owner/admin | Update store                 |
| DELETE | `/api/stores/:id`      | store-owner/admin | Delete store                 |

---

## ⭐ Ratings API

| Method | Endpoint                      | Roles        | Description                      |
|--------|-------------------------------|--------------|----------------------------------|
| POST   | `/api/ratings`                | user         | Submit rating for a store        |
| GET    | `/api/ratings/store/:storeId` | store-owner  | Get all ratings for a store      |
| GET    | `/api/ratings/user`           | user         | Get user’s submitted ratings     |
| GET    | `/api/ratings`                | admin        | Admin can view all ratings       |
| PUT    | `/api/ratings/:id`            | user         | Update user’s own rating         |
| DELETE | `/api/ratings/:id`            | user/admin   | Delete rating (user or admin)    |

---

## ⚙️ Setup Instructions

1. Install dependencies

```bash
npm install
