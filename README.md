# Personal Portfolio

A modern, responsive personal portfolio website built to showcase web development projects, technical skills, and professional background.

## Live Demo

[View Live Demo Here](https://your-deployment-url-here.com)

## Tech Stack

- **React 19**: Selected as the core frontend framework for its component-based architecture and robust ecosystem. It handles state efficiently and scales well as the application grows.
- **Vite**: Used as the build tool and development server. It provides lightning-fast Hot Module Replacement (HMR) and optimized, minified production builds.
- **Tailwind CSS v4**: Utility-first CSS framework implemented to establish a consistent design system. It enables rapid, responsive styling directly within components without managing separate stylesheets.
- **Framer Motion**: Integrated for fluid layout transitions and interactive UI element animations. It improves user engagement with natural, physics-based micro-interactions.
- **Firebase**: Utilized as the Backend-as-a-Service (BaaS) for the contact form, securely capturing and storing user submissions in Firestore.
- **React Context / Custom Hooks**: Powers internationalization (i18n), offering seamless language switching between English and Bahasa Indonesia.

## Features

- **Responsive Design**: Fully responsive layout that adapts gracefully from mobile screens to desktop environments.
- **Dynamic Projects Grid**: Masonry-style layout for rendering project cards of varying sizes without unwanted vertical gaps.
- **Smooth Animations**: Integrated scrolling and hover animations carefully mapped to user intents for an engaging feel.
- **Localization**: Dual-language support with automatic state synchronization.
- **Real-Time Contact Form**: Working contact form hooked directly to a Firebase backend.
- **Clean Architecture**: Modular styling and rendering logic keeping the component structure maintainable.

## Project Structure

The project follows a modular, feature-focused directory structure:

```text
/src
  /assets         # Static imagery, icons, and media files
  /components     # Reusable, self-contained UI configurations (Navbar, Cards)
  /i18n           # Translation dictionaries and language context logic
  /sections       # Major page regions (Home, About, Projects, Skills, Contact)
  App.jsx         # Main application hub and layout orchestrator
  firebase.js     # Firebase initialization and configuration
```

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/portofolio.git
   cd portofolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add your Firebase credentials:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

## Design Approach

- **Design Philosophy**: Minimalist, dark-themed, and content-focused. The aesthetic draws inspiration from modern SaaS interfaces, ensuring projects and skills remain the focal point.
- **Layout Decisions**: Utilizes a card-based system with a strict spacing hierarchy powered by Tailwind CSS tokens, ensuring consistent visual cadence.
- **UX Considerations**: Animations are deliberate and optimized for performance. Typography is chosen for maximal readability, and interactive elements are clearly signposted with hover states.

## Future Improvements

- **Global Dark/Light Mode Toggle**: Adding an inverted color scheme built on top of the existing design tokens to increase accessibility.
- **CMS Integration**: Hooking project data and skills configurations to a headless CMS to allow updates without code deployments.
- **Performance Optimization**: Implementing more aggressive image lazy-loading mechanisms.
- **Accessibility Hardening**: Conducting a rigorous audit for comprehensive WCAG compliance.

## Author

**Kenneth**  
Informatics Student / Frontend Developer  
- **Focus**: Web & Cloud Engineering  
- **GitHub**: [github.com/yourusername](https://github.com/yourusername)  
- **Contact**: [Insert LinkedIn or Contact Method]
