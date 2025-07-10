
# API Test Data

This document provides example payloads and instructions for testing the Store Rating Platform API.

---

## 1. 👤 Create Users (Admin, Store Owner, User)

### 🔐 Admin-Only Endpoint (Create Any User)
**POST** `/api/users`

#### ✅ Example Payload (Admin)
```json
{
  "name": "Admin User",
  "email": "admin@example.com",
  "password": "admin123",
  "address": "Admin Address",
  "role": "admin"
}
```

#### ✅ Example Payload (Store Owner)
```json
{
  "name": "Store Owner",
  "email": "owner@example.com",
  "password": "owner123",
  "address": "Owner Address",
  "role": "store-owner"
}
```

> ⚠️ This route requires an **admin token** in the Authorization header.

---

### 👥 Public Signup (Normal User)
**POST** `/api/auth/signup`

#### ✅ Example Payload (User)
```json
{
  "name": "Normal User",
  "email": "user@example.com",
  "password": "user123",
  "address": "User Address"
}
```

> 🔓 This route is public and does **not** require authentication.

---

## 2. 🏪 Create a Store

**POST** `/api/stores`

#### ✅ Example Payload
```json
{
  "name": "Test Store",
  "address": "123 Store St",
  "category": "Electronics"
}
```

> 🛡️ Requires token from **store-owner** or **admin** in the Authorization header.

---

## 3. 🌟 Create a Rating

**POST** `/api/ratings`

#### ✅ Example Payload
```json
{
  "storeId": "<store_id_from_previous_step>",
  "value": 5,
  "comment": "Great store!"
}
```

> 🧑‍💻 Use a token from a **normal user** for this request.

---

## ✅ Token Usage Summary

| Action               | Role Required        | Token Required |
|----------------------|----------------------|----------------|
| Create Admin/User    | Admin                | Yes            |
| User Signup          | Public               | No             |
| Create Store         | Store Owner / Admin  | Yes            |
| Create Rating        | User                 | Yes            |

---

**ℹ️ Note:** Replace `<store_id_from_previous_step>` with the actual `id` returned after creating a store.
