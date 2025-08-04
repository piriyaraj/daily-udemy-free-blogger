# Blueprint: Real Discount Course Viewer

## Overview

This project is a simple web application that fetches and displays a list of discounted online courses from the Real Discount API. The goal is to present the courses in a visually appealing, responsive, and user-friendly interface.

## Project Outline

### Style & Design

*   **Layout:** A responsive grid or flexbox layout will be used to display course cards.
*   **Course Cards:** Each course will be represented by a "card" with a soft, deep drop shadow to give it a "lifted" feel.
*   **Color Palette:** A modern and energetic color palette will be used. The background will have a subtle noise texture for a premium feel.
*   **Typography:** Expressive fonts will be used with clear hierarchy for headings, subheadings, and body text.
*   **Interactivity:** Cards will have a subtle hover effect (e.g., a "glow" or slight lift) to indicate interactivity.
*   **Images:** Course images will be displayed prominently at the top of each card.

### Features

*   **Course Display:** The application will display a list of courses, showing at least the course image and name.
*   **Dynamic Loading:** The application is designed to load course data from an API. Due to CORS limitations, it will initially use a local copy of the data.
*   **Responsive Design:** The layout will adapt to different screen sizes, working well on both desktop and mobile devices.

## Current Task: Fix Course Loading and Implement UI

The courses are not loading due to browser CORS security restrictions. The plan is to use a local copy of the API response to build out the UI and then enhance the visual design.

### Plan

1.  **Use Local Data:** Modify `main.js` to use the provided JSON data directly, bypassing the live `fetch` call for now.
2.  **Create Course Cards:** Dynamically generate HTML elements for each course, structuring them as cards containing an image and a title.
3.  **Style the UI:**
    *   Implement a flexbox or grid layout in `style.css` for the course container.
    *   Style the course cards with padding, borders, drop shadows, and responsive properties.
    *   Add styles for the course images and titles to ensure they are well-formatted.
4.  **Refine HTML:** Update `index.html` with a clear title and header for the application.
