# Finance Dashboard

A Next.js project for visualizing financial data.

## Overview

This project provides a dashboard for displaying financial metrics and charts. It uses Next.js as the framework and includes various components for rendering charts, tables, and other UI elements.

## Features

- Displays financial metrics and charts
- Responsive design for different screen sizes
- Includes various components for rendering charts, tables, and other UI elements
- Utilizes Tailwind CSS for styling and layout

## Getting Started

1. Clone the repository: 
    ```bash
    git clone https://github.com/Shubham-567/Finance-Dashboard.git
    ```
2. Install dependencies: 
    ```bash
    npm install
    ```
3. Start the development server: 
    ```bash
    npm run dev
    ```
4. Open the dashboard in your browser: 
    ```bash
    http://localhost:3000
    ```

## Components

### Cards and Navbar

- `Topbar`: A top navigation bar component
- `MainCard`: A card component for displaying main overview card data
- `FilterBar`: A filter bar component (3 Days, 7 Days, etc..)
- `StatCard`: A card component for displaying statistical data
- `ChartCard`: A card component for displaying charts

### Sections to hold cards

- `MainCardSection`: A section component for displaying two main cards
- `StatSection`: A section component for displaying statistical data
- `ChartSection`: A section component for displaying chartCards

### Charts

- `ClientsChart`: A chart component for displaying client data
- `MonthlyMisChart`: A chart component for displaying monthly MIS data
- `SipBusinessChart`: A chart component for displaying SIP business data

## API

The project uses the following API endpoints:

- `/api/finance/overview`: Retrieves financial overview data
- `/api/finance/stats`: Retrieves financial statistics data

## Dependencies

- `next`: Next.js framework
- `react`: React library
- `react-chartjs-2`: Chart.js library for React
- `tailwindcss`: Tailwind CSS library
- `lucide-react`: Lucide icon library

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
