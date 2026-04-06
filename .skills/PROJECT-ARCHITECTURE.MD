---
name: Project Architecture
category: documentation
version: 1.0
NOTE: Each time you do a major update please update this file to keep track of the changes.

---

# 🏗️ Project Architecture & Tech Stack

## 🎯 Purpose

This document provides a comprehensive overview of the `portfolio-2025` project's structure, technology stack, tools, theming, and internationalization setup.

## 🛠️ Technologies & Tools

### Core Frameworks
- **Next.js 15**: Used as the foundational React framework, leveraging the App Router (`src/app`) and Turbopack for development.
- **React 19**: The core UI library.
- **TypeScript**: Used extensively for static typing to ensure code reliability and maintainability.

### Styling & UI
- **Tailwind CSS v4**: Utility-first CSS framework for fast, inline styling.
- **shadcn/ui**: A collection of reusable components built on top of robust Radix UI primitives (`@radix-ui/*`) and Tailwind.
- **UI Utilities**:
  - `lucide-react`: For high-quality, customizable SVG icons.
  - `class-variance-authority`, `clsx`, `tailwind-merge`: For elegant and dynamic Tailwind class management and conflict resolution.
  - `tw-animate-css`: For easy implementation of CSS animations.

### 🎨 Theming
- **next-themes**: Handles the light, dark, and system mode switching. It integrates seamlessly with Next.js and Tailwind CSS (usually via the `class` strategy) to prevent dark mode hydration mismatch and persists user preferences.

### 🔤 Typography & Fonts
- **Google Fonts (via `next/font`)**: 
  - **Heading Font**: `Acme` (mapped to Tailwind utility `font-heading`). Applied to components like headers and the Main Page title.
  - **Body Font**: `Sora` (mapped to Tailwind utility `font-body`). Applied natively to the Document Body.
- **Tailwind v4 Integration**: Custom font scales (`text-sm` through `text-5xl`) and weights (`font-normal`, `font-bold`) are injected seamlessly via `@theme inline` inside `globals.css`.

### 🌍 Internationalization (i18n)
- **next-intl**: Responsible for managing translations and localized routing using Next.js App Router middleware.
- **Supported Languages**: The core configuration currently supports **English (`en`)** and **German (`de`)**.
- **Translation Strategy**: Localized content strings are separated into granular JSON files stored in the `messages/{locale}/` directory (e.g., `about.json`, `home.json`, `seminars.json`, `courses.json`), making translation management highly structured and scalable based on project content areas.

## 📁 Project Structure

The project has a well-thought-out architectural layout:

- **`src/app/`**: Contains the Next.js App Router setup.
  - `[locale]/`: A dynamic route segment that catches the user's language prefix to serve natively translated content via server components.
- **`src/components/`**: Structured strongly around the **Atomic Design** methodology to promote component reusability and scalability:
  - `atoms/`: The most basic UI foundational elements (e.g., simple buttons, inputs).
  - `molecules/`: Simple combinations of atoms (e.g., a search form containing an input atom and a button atom).
  - `organisms/`: Complex UI groupings forming distinct sections (e.g., navbars, footers, seminar cards).
  - `ui/`: Specifically reserved for storing `shadcn/ui` base components.
- **`messages/`**: The localization dictionaries.
- **`public/`**: Standard location for static assets.
- **`lib/`**: Typically used for utility functions, API clients, and shared logic.

## ⚙️ Key Configurations
- **`components.json`**: The central configuration file for `shadcn/ui` setups.
- **`eslint.config.mjs`**: Utilizing the new flat config format for ESLint 9 to ensure code quality.
- **`postcss.config.mjs`**: Tooling setup for CSS transformations alongside Tailwind CSS v4.
