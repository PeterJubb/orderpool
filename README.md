# Order Pool - React Application

This is a React rebuild of the Order Pool HTML project, an aggregated wholesaling manufacturing marketplace.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Navigate to the react-app directory:
```bash
cd react-app
```

2. Install dependencies:
```bash
npm install
```

### Running the Development Server

```bash
npm start
```

The app will be available at `http://localhost:3000` and will automatically open in your browser.

### Building for Production

```bash
npm run build
```

The production build will be in the `build` directory.

## Project Structure

```
react-app/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.jsx    # Header for dashboard/other pages
│   │   ├── HomeHeader.jsx # Header for home page
│   │   ├── Footer.jsx    # Footer for dashboard/other pages
│   │   └── HomeFooter.jsx # Footer for home page
│   ├── pages/           # Page components
│   │   ├── Home.jsx     # Main landing page
│   │   └── Dashboard.jsx # Dashboard page
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── styles.css       # All styles (home page + dashboard styles)
├── public/              # Static assets
│   ├── Orderpool_logo.png
│   ├── Production.jpg
│   ├── 3D.jpg
│   └── Packaging.jpg
└── package.json
```

## Features

- **React Router**: Client-side routing for navigation
- **Component-based**: Reusable Header and Footer components
- **Responsive Design**: Mobile-friendly layouts
- **Modern Stack**: Built with Create React App and React

## Routes

- `/` - Home page (landing page)
- `/dashboard` - Dashboard page
- `/how-it-works` - How it works page
- `/for-publishers` - For publishers page
- `/for-manufacturers` - For manufacturers page
- `/pricing` - Pricing page
- `/get-started` - Get started page
- `/auth-signin` - Sign in page
- `/public-orders` - Public orders page
- `/mission` - Mission page
- `/team` - Team page
- `/contact` - Contact page
- `/privacy` - Privacy page
- `/terms` - Terms page
- `/safety` - Safety page

## Notes

- The home page uses different header/footer styles than other pages
- All styles are consolidated in `styles.css`
- Images are served from the `public` directory
- Additional pages can be added by creating new components in `src/pages/` and adding routes in `App.jsx`
