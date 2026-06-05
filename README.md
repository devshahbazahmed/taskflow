# TaskFlow 🚀

**TaskFlow** is a modern, full-stack task management application built with Next.js 16, React 19, and TypeScript. It provides an intuitive interface for managing tasks, tracking progress, and analyzing team productivity with real-time data visualization.

## ✨ Features

### **Task Management**

- ✅ Create, read, update, and delete tasks
- 📝 Rich task descriptions with title and status tracking
- ✓ Mark tasks as completed with optimistic UI updates
- 🔄 Real-time task synchronization with backend
- 🗑️ Delete tasks with confirmation dialog

### **Global Search & Filtering**

- 🔍 Real-time search across task titles and descriptions
- 🏷️ Filter tasks by status (All, Done, Pending)
- 📊 Multiple sort options (Newest, Oldest, Title, Status)
- 💡 Highlighted search term matches in task cards
- 📈 Live result counts

### **Analytics Dashboard**

- 📈 Task completion rate visualization with daily breakdown
- ⏱️ Average task completion time with trend analysis
- 💚 Project health metrics with circular progress indicators
- 🧠 Deep work hours tracking with team insights
- 👥 Real-time team activity feed with status badges
- 📅 Time range selector (Weekly, Monthly, Yearly)

### **Responsive Design**

- 📱 Mobile-first responsive layout
- 💻 Desktop navigation with sidebar
- 📲 Mobile bottom navigation bar
- 🎨 Consistent design system with orange and blue theme

## 🛠️ Tech Stack

| Layer                | Technology                                 |
| -------------------- | ------------------------------------------ |
| **Frontend**         | Next.js 16.2.6, React 19.2.4, TypeScript 5 |
| **Styling**          | Tailwind CSS 4, CSS Grid/Flexbox           |
| **State Management** | React Hooks (useState, useEffect, useMemo) |
| **Database**         | PostgreSQL (via Neon)                      |
| **ORM**              | Prisma 7.8.0 with Neon Adapter             |
| **Icons**            | Tabler Icons React 3.44.0                  |
| **UI Components**    | Radix UI, shadcn, CVA                      |

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (dashboard)/
│   │   ├── analytics/            # Analytics page with dashboard
│   │   ├── tasks/                # Task management pages
│   │   │   ├── create/           # Create task form
│   │   │   └── page.tsx          # Tasks list with search/filter
│   │   └── dashboard/            # Dashboard layout
│   ├── (marketing)/              # Marketing pages
│   │   ├── about/
│   │   ├── features/
│   │   └── pricing/
│   ├── api/                      # API routes
│   │   ├── hello/
│   │   └── tasks/                # Task CRUD endpoints
│   ├── layout.tsx                # Root layout
│   ├── not-found.tsx             # 404 page
│   └── page.tsx                  # Home page
├── components/
│   ├── analytics/                # Analytics components
│   │   ├── CompletionChart.tsx   # Task completion visualization
│   │   ├── MetricCards.tsx       # Metric display cards
│   │   └── TeamActivity.tsx      # Activity feed
│   ├── ui/                       # Reusable UI components
│   ├── FilterBar.tsx             # Task filter and sort controls
│   ├── Footer.tsx                # Footer component
│   ├── Header.tsx                # Header navigation
│   ├── HighlightText.tsx         # Search term highlighting
│   ├── Logo.tsx                  # Logo component
│   ├── SearchBar.tsx             # Search input component
│   ├── SearchResults.tsx         # Search results preview
│   ├── Sidebar.tsx               # Desktop sidebar navigation
│   └── TaskCard.tsx              # Individual task card
├── lib/
│   ├── api.ts                    # API client functions
│   ├── db.ts                     # Prisma client setup
│   ├── constants.ts              # App constants
│   ├── utils.ts                  # Utility functions
│   ├── hooks/
│   │   ├── useTasks.ts           # Task data management hook
│   │   └── useTaskSearch.ts      # Search and filter logic hook
│   └── utils/
│       └── search.ts             # Search utility functions
└── generated/                    # Prisma generated types
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- PostgreSQL database (Neon recommended)
- Environment variables configured

### Installation

1. **Clone the repository:**

```bash
git clone <repository-url>
cd taskflow
```

2. **Install dependencies:**

```bash
pnpm install
```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory:

```env
DATABASE_URL=your_postgresql_connection_string
NEXT_PUBLIC_API_URL=http://localhost:3000
```

4. **Set up the database:**

```bash
npx prisma migrate dev --name init
```

5. **Run the development server:**

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📚 API Endpoints

### Task CRUD Operations

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| GET    | `/api/tasks`      | Fetch all tasks     |
| POST   | `/api/tasks`      | Create a new task   |
| GET    | `/api/tasks/[id]` | Get a specific task |
| PUT    | `/api/tasks/[id]` | Update a task       |
| DELETE | `/api/tasks/[id]` | Delete a task       |

### Request/Response Examples

**Create Task:**

```bash
POST /api/tasks
Content-Type: application/json

{
  "title": "Design new landing page",
  "description": "Create a modern, responsive landing page"
}
```

**Response:**

```json
{
  "id": "uuid",
  "title": "Design new landing page",
  "description": "Create a modern, responsive landing page",
  "completed": false,
  "createdAt": "2026-06-05T12:00:00Z",
  "updatedAt": "2026-06-05T12:00:00Z"
}
```

## 🎨 Design System

### Colors

- **Primary Orange**: `#ff7114` - Main accent color
- **Dark Blue**: `#111b30` - Text and dark elements
- **Light Blue**: `#f7f9ff` - Background
- **Green**: `#22c55e` - Success states
- **Red**: `#ba1a1a` - Error states

### Spacing

- **Mobile margin**: `16px`
- **Desktop margin**: `32px`
- **Stack small**: `8px`
- **Stack medium**: `16px`
- **Stack large**: `32px`

### Typography

- **Font**: Plus Jakarta Sans
- **Display Large**: 48px, 800 weight
- **Headline Large**: 32px, 700 weight
- **Title Large**: 20px, 600 weight
- **Body Medium**: 16px, 400 weight
- **Label Medium**: 14px, 600 weight

## 🔧 Development

### Available Scripts

```bash
# Development server
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Update Prisma schema
npx prisma migrate dev --name migration_name

# Open Prisma Studio (database GUI)
npx prisma studio
```

### Key Hooks

**useTasks** - Manage task data

```typescript
const { tasks, loading, addTask, removeTask, updateTaskCompletion } =
  useTasks();
```

**useTaskSearch** - Search and filter tasks

```typescript
const {
  filteredTasks,
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  sortBy,
  setSortBy,
} = useTaskSearch(tasks);
```

## 📦 Database Schema

```prisma
model Task {
  id        String    @id @default(cuid())
  title     String    @db.VarChar(255)
  description String?
  completed Boolean   @default(false)
  createdAt DateTime  @default(now())
  updatedAt DateTime  @updatedAt
}
```

## 🎯 Page Routes

| Path            | Component             | Description                  |
| --------------- | --------------------- | ---------------------------- |
| `/`             | `page.tsx`            | Home/landing page            |
| `/about`        | `About page`          | About TaskFlow               |
| `/features`     | `Features page`       | Features overview            |
| `/pricing`      | `Pricing page`        | Pricing plans                |
| `/tasks`        | `Tasks page`          | Task list with search/filter |
| `/tasks/create` | `Create task form`    | New task creation            |
| `/analytics`    | `Analytics dashboard` | Performance insights         |

## ⚡ Performance Optimizations

- **Memoization**: `useMemo` hooks for expensive computations
- **Client-side Search**: Fast filtering without server requests
- **Optimistic Updates**: Instant UI feedback on task changes
- **Code Splitting**: Route-based code splitting via Next.js
- **Image Optimization**: Responsive image handling
- **CSS Optimization**: Tailwind CSS purging unused styles

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Environment Variables for Production

```env
DATABASE_URL=your_production_database_url
NEXT_PUBLIC_API_URL=https://your-domain.com
```

## 📝 Future Enhancements

- [ ] User authentication (NextAuth.js)
- [ ] Multi-user support and task sharing
- [ ] Priority levels and due dates
- [ ] Task categories/tags
- [ ] Recurring tasks
- [ ] Task notifications
- [ ] Dark mode toggle
- [ ] Data export (CSV/PDF)
- [ ] Team collaboration features
- [ ] Integrations (Slack, Calendar, etc.)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 💬 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

\*\*Built by Shahbaz Ahmed
