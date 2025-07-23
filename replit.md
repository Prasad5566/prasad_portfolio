# Portfolio Web Application

## Overview

This is a full-stack portfolio web application built with React, TypeScript, and Express.js. The application showcases a developer's skills, projects, experience, and achievements while providing a contact form for potential opportunities. It features a modern design with dark/light theme support, responsive layout, and a comprehensive backend for contact management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend components:

- **Frontend**: React-based SPA with TypeScript
- **Backend**: Express.js REST API server
- **Database**: PostgreSQL with Drizzle ORM (with in-memory fallback)
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite for frontend bundling
- **Development**: Hot reload and development server integration

## Key Components

### Frontend Architecture
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: React Query for server state, React Context for theme
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation
- **Theme System**: Dark/light mode with system preference detection

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful endpoints with proper error handling
- **Validation**: Zod schemas for request validation
- **Database**: Drizzle ORM with PostgreSQL support
- **Storage**: Abstract storage interface with memory-based implementation
- **Development**: Integrated with Vite for seamless development experience

### Database Schema
The application uses two main entities:
- **Users**: Basic user management (id, username, password)
- **Contacts**: Contact form submissions (id, name, email, subject, message, createdAt)

### UI Components
The application leverages a comprehensive set of shadcn/ui components including:
- Forms, inputs, buttons, and validation
- Navigation and layout components
- Toast notifications and dialogs
- Theme switching and responsive design elements

## Data Flow

1. **Portfolio Display**: Static content rendered from React components
2. **Contact Form**: 
   - Form validation using React Hook Form + Zod
   - API submission to `/api/contact` endpoint
   - Server-side validation and storage
   - Success/error feedback via toast notifications
3. **Theme Management**: Browser localStorage persistence with system preference detection
4. **API Communication**: React Query for efficient data fetching and caching

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18+ with TypeScript support
- **UI Library**: Radix UI primitives with shadcn/ui styling
- **Styling**: Tailwind CSS with PostCSS processing
- **Forms**: React Hook Form with Hookform resolvers
- **Validation**: Zod for schema validation
- **HTTP Client**: Fetch API with React Query wrapper
- **Icons**: Lucide React icon library
- **Date Handling**: date-fns utility library

### Backend Dependencies
- **Server**: Express.js with TypeScript
- **Database**: Drizzle ORM with PostgreSQL driver (@neondatabase/serverless)
- **Validation**: Zod for request/response validation
- **Session**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Strict mode configuration
- **Linting**: ESLint configuration (implied)
- **Replit Integration**: Specialized plugins for Replit environment

## Deployment Strategy

### Development Environment
- **Frontend**: Vite development server with HMR
- **Backend**: tsx with file watching for auto-restart
- **Integration**: Vite middleware integration for unified development experience
- **Database**: In-memory storage fallback for development

### Production Build
- **Frontend**: Static build output to `dist/public`
- **Backend**: ESBuild bundling to `dist/index.js`
- **Database**: PostgreSQL connection via environment variables
- **Deployment**: Node.js server serving both API and static files

### Environment Configuration
- **Database**: `DATABASE_URL` environment variable for PostgreSQL connection
- **Development**: Automatic fallback to memory storage when database unavailable
- **Production**: Requires configured PostgreSQL instance

The application is designed to be easily deployable on platforms like Replit, with automatic environment detection and graceful fallbacks for missing services.