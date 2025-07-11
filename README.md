# Store Rating Platform

🚧 **Work in Progress**  
This full-stack project is currently under development. Some features may not be fully functional or visually polished. Contributions and suggestions are welcome!

---

## 🔑 Key Features Overview

### 🔐 Auth Flow (JWT)
- `/auth/login` — Login using email and password → returns JWT
- `/auth/signup` — Public route for Normal Users
- JWT token stored on the frontend using `localStorage` or `httpOnly` cookie
- Role-based route protection (NestJS Guards + React Protected Routes)

---

### 👥 Roles
- **ADMIN**
- **USER**
- **STORE_OWNER**
- Each role has its own dashboard and access level.
- Protected routes for each role on both frontend and backend.

---

### 🗃️ MySQL Schema (ERD Overview)

#### `users` table
| Field         | Type       | Description                                      |
|---------------|------------|--------------------------------------------------|
| `id`          | UUID       | Primary key                                      |
| `name`        | String     | Full name of user                                |
| `email`       | String     | Unique, login credential                         |
| `password_hash` | String   | Hashed password                                  |
| `address`     | String     | Optional address                                 |
| `role`        | ENUM       | One of ['ADMIN', 'USER', 'STORE_OWNER']         |
| `created_at`  | Timestamp  | Auto-generated                                   |

#### `stores` table
| Field         | Type       | Description                                      |
|---------------|------------|--------------------------------------------------|
| `id`          | UUID       | Primary key                                      |
| `name`        | String     | Store name                                       |
| `email`       | String     | Store contact email                              |
| `address`     | String     | Store location                                   |
| `owner_id`    | UUID (FK)  | Linked to a user with `STORE_OWNER` role        |
| `created_at`  | Timestamp  | Auto-generated                                   |

#### `ratings` table
| Field         | Type       | Description                                      |
|---------------|------------|--------------------------------------------------|
| `id`          | UUID       | Primary key                                      |
| `user_id`     | UUID (FK)  | Linked to the `users` table                      |
| `store_id`    | UUID (FK)  | Linked to the `stores` table                     |
| `rating`      | Integer    | Rating value (1 to 5)                            |
| `updated_at`  | Timestamp  | Auto-updated on changes                          |

---

### ✨ UI Components (React + MUI)
- 🔁 Light/Dark Theme Toggle using MUI theme provider
- 📋 Table with Filters/Sorting by Name, Email, Role, etc.
- 🔍 Search bars for filtering users and stores
- 🧾 Dialog Components:
  - Add/Edit Users
  - Add/Edit Ratings
- 📊 Admin Dashboard with **Chart.js**:
  - Overall Ratings Summary
  - Store and User Activity Stats

---

## 📂 Tech Stack
- **Frontend**: React.js, MUI, Chart.js, TypeScript
- **Backend**: NestJS, MySQL, JWT, Bcrypt
- **Database**: MySQL with Sequelize or Prisma ORM
- **Auth**: JWT token-based secure flow
- **UI/UX**: Responsive Design, Dark/Light Theme, Material Icons

---

## 🚀 Getting Started

### Frontend
```bash
cd client
npm install
npm run dev
```
### Bakend
```bash
cd server
npm install
npm start:dev
```

---

## 📚 For more information, check these files:

You can find more detailed documentation and guides in the `docs/` folder:

- [API_ROUTES.md](docs/API_ROUTES.md) — API endpoints and access control
- [api-test-data.md](docs/api-test-data.md) — Example API test data
- [Demo.md](docs/Demo.md) — Demo instructions and screenshots
