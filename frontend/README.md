# AWS Academy Leaderboard Frontend Module

This is a premium, self-contained frontend module for the **AWS Academy Learning Platform** leaderboard. It has been built using **Next.js**, **TypeScript**, and **Tailwind CSS**, designed to consume the live backend APIs directly.

---

## Folder Structure

The module's source code is organized as follows inside the `src/` directory:

```text
src/
├── types/
│   └── leaderboard.types.ts     # TypeScript interfaces matching backend response models
│
├── services/
│   └── leaderboard.api.ts       # Service class using native fetch for API requests
│
├── components/
│   ├── LeaderboardModal.tsx     # The central glassmorphic dialog container with state management
│   ├── PodiumSection.tsx        # Top 3 contributors podium (1st raised center, Gold/Silver/Bronze)
│   ├── CurrentUserCard.tsx      # sticky Highlight card for the logged-in user position
│   ├── LeaderboardRow.tsx       # User rankings list item, highlighting 'You' and rendering dividers
│   ├── SearchBar.tsx            # Input search component with a built-in debounce timer
│   ├── LoadingSkeleton.tsx      # Premium animated shimmer skeleton loader
│   └── EmptyState.tsx           # Search/Filter empty state view
│
└── app/
    ├── page.tsx                 # Home demo dashboard illustrating button opening modal
    └── layout.tsx               # Root Next.js configuration
```

---

## Backend API Integrations

The API service layer inside [leaderboard.api.ts](file:///d:/AWS%20leaderboard/frontend/src/services/leaderboard.api.ts) calls:

1. **`GET /leaderboard`** (optionally `?search=query`)
   - Retrieves the ranking list and current user details.
   - Headers: `Authorization: Bearer <JWT_TOKEN>` (optional).
   - Response structure matches:
     ```typescript
     export interface LeaderboardResponseDto {
       currentUser: LeaderboardUserDto | null;
       displayUsers: LeaderboardRowDto[];
     }
     ```

2. **`GET /leaderboard/me`**
   - Retrieves the logged-in user's stats for the dashboard rank preview.
   - Headers: `Authorization: Bearer <JWT_TOKEN>` (required).

---

## How to Run the Demo Page

1. Ensure the backend server is running (defaults to port `3000`).
2. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:3001` (or whichever port Next.js maps to).
5. Click **Open Leaderboard** to open the modal. By default, it will fetch statistics for the user `Arun Kumar` using the pre-generated JWT token configured in [page.tsx](file:///d:/AWS%20leaderboard/frontend/src/app/page.tsx).

---

## Integration Guide for Another Developer

To integrate this leaderboard into the main platform dashboard, follow these steps:

### Step 1: Copy Files
Copy the folders from this standalone module into your project directory:
- Copy `types/` to your target types directory.
- Copy `services/` to your target services folder.
- Copy all files from `components/` into your React components folder.

### Step 2: Configure Environment Variables
Add the backend API endpoint to your `.env.local` or environment file:
```env
NEXT_PUBLIC_API_URL="https://api.your-platform-domain.com"
```

### Step 3: Trigger the Modal
Import and render the `LeaderboardModal` inside your dashboard, passing the authenticated user's session token and managing open state:

```tsx
import React, { useState } from 'react';
import { LeaderboardModal } from './components/LeaderboardModal';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const userToken = "obtain_from_auth_context_or_cookie";

  return (
    <div>
      {/* Clickable button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="px-5 py-2.5 bg-amber-500 text-black font-extrabold uppercase rounded-lg text-xs"
      >
        View Leaderboard
      </button>

      {/* Leaderboard Modal */}
      <LeaderboardModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        token={userToken}
      />
    </div>
  );
}
```

---

## Design Customization

All styling variables (e.g. AWS Navy, AWS Orange, and Silver/Bronze gradients) are declared in [globals.css](file:///d:/AWS%20leaderboard/frontend/src/app/globals.css) and referenced throughout components using Tailwind CSS classes. You can adjust colors globally in the Tailwind theme config:

```css
@theme {
  --color-aws-navy: #0B111E;        /* Background */
  --color-aws-navy-light: #162032;  /* Secondary Container */
  --color-aws-orange: #FF9900;      /* Accent Orange */
}
```
