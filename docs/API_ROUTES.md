# 📘 API Routes - Developer Guide

All API routes are protected with **JWT authentication** and **role-based access guards**.

---

## 🔐 Authentication & Roles

- **JWT** token required for all routes.
- Role-based access control:
  - `admin`
  - `user`
  - `store-owner`

---

## 📁 Users Controller Routes

**Base URL:** `/api/users`

| Method | Endpoint            | Description                                 | Access          | Body             |
|--------|---------------------|---------------------------------------------|------------------|------------------|
| GET    | `/api/users`        | Get all users                               | Admin only       | ❌               |
| GET    | `/api/users/me`     | Get profile of current authenticated user   | Authenticated    | ❌               |
| POST   | `/api/users`        | Create a new user                           | Admin only       | `CreateUserDto`  |
| PUT    | `/api/users/:id`    | Update a user by ID                         | Admin only       | `UpdateUserDto`  |
| DELETE | `/api/users/:id`    | Delete a user by ID                         | Admin only       | ❌               |

---

## 🏪 Stores Controller Routes

**Base URL:** `/api/stores`

| Method | Endpoint              | Description                                | Roles                      | Body             |
|--------|-----------------------|--------------------------------------------|-----------------------------|------------------|
| GET    | `/api/stores`         | Get all stores                             | admin, user, store-owner    | ❌               |
| GET    | `/api/stores/my`      | Get stores owned by the current user       | store-owner                 | ❌               |
| GET    | `/api/stores/:id`     | Get a store by ID                          | admin, user, store-owner    | ❌               |
| POST   | `/api/stores`         | Create a new store                         | admin, store-owner          | `CreateStoreDto` |
| PUT    | `/api/stores/:id`     | Update a store by ID                       | admin, store-owner          | `UpdateStoreDto` |
| DELETE | `/api/stores/:id`     | Delete a store by ID                       | admin, store-owner          | ❌               |

---

## ⭐ Ratings Controller Routes

**Base URL:** `/api/ratings`

| Method | Endpoint                         | Description                                 | Roles             | Body               |
|--------|----------------------------------|---------------------------------------------|-------------------|--------------------|
| GET    | `/api/ratings`                   | Get all ratings                             | admin             | ❌                 |
| GET    | `/api/ratings/store/:storeId`    | Get ratings for a specific store            | store-owner, admin| ❌                 |
| GET    | `/api/ratings/user`              | Get current user’s submitted ratings        | user              | ❌                 |
| POST   | `/api/ratings`                   | Submit a new rating                         | user              | `CreateRatingDto`  |
| PUT    | `/api/ratings/:id`               | Update a rating by ID                       | user              | `UpdateRatingDto`  |
| DELETE | `/api/ratings/:id`               | Delete a rating by ID                       | user, admin       | ❌                 |

---

## 🧪 Need Examples?

If you need **example request bodies**, **Postman collection**, or **Swagger setup**, feel free to ask!