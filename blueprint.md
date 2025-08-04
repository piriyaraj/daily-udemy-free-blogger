# Blueprint: Real Discount Course Viewer

## Overview

This project is a web application that fetches and displays a list of discounted online courses from the Real Discount API. The goal is to present the courses in a visually appealing, responsive, and user-friendly interface that includes a header, a collapsible sidebar for navigation/filtering, and a footer.

## Project Outline

### Style & Design

*   **Layout:** A responsive CSS Grid layout manages the main page structure (header, sidebar, main content, footer).
*   **Header:** A fixed header containing the site title and a hamburger menu icon for mobile.
*   **Sidebar:** A collapsible sidebar for categories or filters. It's always visible on desktop but slides in on mobile when toggled.
*   **Main Content:** A flexible grid displays the course cards.
*   **Footer:** A simple footer with copyright information.
*   **Course Cards:** Each course is a "card" with a soft drop shadow, a hover effect, and a clean layout for the image and title.
*   **Color Palette:** A modern and energetic color palette with CSS variables for easy theming.
*   **Typography:** Expressive, readable fonts with a clear hierarchy.
*   **Interactivity:** Smooth transitions for the sidebar and hover effects on interactive elements.

### Features

*   **Course Display:** The application displays a list of courses in a responsive grid.
*   **Infinite Scroll:** New courses are loaded automatically as the user scrolls down the page.
*   **Responsive Design:** The layout adapts seamlessly from desktop to mobile. The sidebar collapses into a hamburger menu on smaller screens.
*   **SEO Optimized:** The application includes comprehensive meta tags for search engines and social media sharing.

## Current Task: Implement Modern Responsive Layout

The goal is to move from a simple page to a full-featured layout with a header, footer, and a collapsible sidebar, using modern CSS techniques.

### Plan

1.  **Update `index.html`**: Restructure the HTML to include `<header>`, `<footer>`, and `<aside>` elements. Add a hamburger menu button for mobile navigation.
2.  **Rewrite `style.css`**: Implement a new layout using CSS Grid. Add styles for the header, footer, sidebar, and the responsive logic for the mobile menu.
3.  **Enhance `main.js`**: Add JavaScript to control the toggling of the sidebar on mobile devices.
