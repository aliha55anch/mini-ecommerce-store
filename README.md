# Mini E-Commerce Store

A modern, responsive e-commerce store built with React, Redux Toolkit, and Tailwind CSS. 

---

## Features

- Product listing with category filtering (Electronics, Jewelery, Men's Clothing, Women's Clothing)
- Add to cart, update quantity, and remove items
- Slide-in cart drawer with real-time price totals
- Mock authentication (login/logout)
- Loading skeletons and error handling with retry
- Fully responsive design (mobile + desktop)
- Smooth animations and transitions

---

## Tech Stack

- **React 19** — UI library
- **Redux Toolkit** — State management (products + cart slices)
- **Tailwind CSS 4** — Utility-first styling via Vite plugin
- **Vite 8** — Build tool and dev server
- **Lucide React** — Icon library
- **oxlint** — Linting

---

## Project Structure

```
src/
├── components/
│   ├── CartDrawer.jsx      # Slide-in cart panel
│   ├── Navbar.jsx           # Header with category filters + auth
│   ├── ProductCard.jsx      # Individual product display
│   └── ProductList.jsx      # Grid layout with loading/error states
├── context/
│   ├── AuthContext.js        # React context for auth
│   ├── AuthProvider.jsx      # Auth state provider
│   └── useAuth.js            # Auth hook
├── redux/
│   ├── store.js              # Redux store config
│   └── slices/
│       ├── cartSlice.js      # Cart state & reducers
│       └── productsSlice.js  # Product fetch & filtering
├── App.jsx                   # Root component
├── main.jsx                  # Entry point
└── index.css                 # Tailwind imports
```
---

## Getting Started

### Prerequisites

- Node.js 18+

### Install and Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```
---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## Developed 👨‍💻 by: 

Muhammad Ali Hassan 

---

## ⭐ Support

If you like this project, consider giving it a star on GitHub ⭐
