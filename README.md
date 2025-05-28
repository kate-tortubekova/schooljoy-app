# SchoolJoy - Angular Application

A modern Angular application with TypeScript and Bootstrap for creating contemporary web interfaces with a dashboard for tracking student progress and badges.

## Technologies

- **Angular 19** - Modern framework for building web applications
- **TypeScript** - Typed JavaScript
- **Bootstrap 5** - CSS framework for styling
- **SCSS** - CSS preprocessor
- **Font Awesome** - Icon library
- **Git** - Version control system

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Angular CLI** (optional but recommended)

## Installation and Setup

### 1. Navigate to the project directory

```bash
git clone <repository-url>
cd schooljoy-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Angular CLI globally (if not already installed)

```bash
npm install -g @angular/cli
```

## Running the Application

### Development Server

```bash
npm start
# or
ng serve
```

The application will be available at `http://localhost:4200`

The app will automatically reload if you change any of the source files.

### Production Build

```bash
npm run build
# or
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
schooljoy-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/                    # Navigation header
│   │   │   ├── dashboard/                 # Main dashboard container
│   │   │   ├── dashboard-header/          # Dashboard header with back button
│   │   │   ├── main-content/              # Main content orchestrator
│   │   │   ├── track-completion/          # Donut chart and legend
│   │   │   ├── statistics-cards/          # Statistics cards (4 metrics)
│   │   │   └── badges-table/              # Badges table with search
│   │   ├── app.component.html             # Main template
│   │   ├── app.component.scss             # Component styles
│   │   ├── app.component.ts               # Component logic
│   │   ├── app.config.ts                  # Application configuration
│   │   └── app.routes.ts                  # Routes
│   ├── styles.scss                        # Global styles
│   ├── main.ts                            # Entry point
│   └── index.html                         # HTML template
├── public/                                # Static files
├── angular.json                           # Angular configuration
├── package.json                           # Project dependencies
└── tsconfig.json                          # TypeScript configuration
```

## Development Commands

```bash
# Start development server
ng serve

# Generate new component
ng generate component component-name

# Generate new service
ng generate service service-name

# Run tests
ng test

# Lint code
ng lint

# Build for production
ng build