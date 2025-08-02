# Bookio Store — Client

A modern, responsive React-based frontend for the Bookio Store. Features include category filtering, wishlist, pagination, search, sorting, authentication-aware UI, and a beautiful UI using Tailwind CSS.

## 🚀 Features

- **Book Browsing**: Filter by category (children, adventure, biography, cook, etc.).
- **Search & Sort**: Search books, sort by price (low–high, high–low) and recency (old–new / new–old).
- **Pagination**: Shows 8 books per page with client-side pagination controls.
- **Wishlist ("Favorites")**: Fetches and displays favorite books using user email. Supports removal.
- **Authentication-aware Navbar**: Shows Login/Register or Dashboard/Logout based on auth state.
- **Responsive Layout**: Works across desktop and mobile.
- **Swiper.js Slider**: Used for showcasing featured books or sections; manual swipe, 4 cards per view, no autoplay.
- **React Toastify**: Feedback for user actions (add/remove, errors, etc.).
- **Category Sidebar**: Left-side filter panel for easy navigation.
- **React Icons**: Visual enhancements across UI elements.

## 🧰 Tech Stack

- React.js
- Tailwind CSS
- Swiper.js
- React Router
- Axios / `useAxiosSecure` (for secure requests)
- React Toastify
- React Icons
- Context / Custom Hooks (e.g., auth management, secure axios)
- Optional: Zustand / Redux (if state management is extended)

## 📦 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- Backend API running and accessible (Bookio Store API)

### Installation

```bash
# move into client directory
cd client

# install dependencies
npm install
# or
yarn install
```
