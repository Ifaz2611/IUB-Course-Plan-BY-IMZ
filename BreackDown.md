 ---

  Project File Breakdown

  1. App Structure & Entry Points
   * app/page.js: The starting page of the app. It simply imports and renders the CoursePlanner component.
   * app/layout.js: The global wrapper. It sets up the <head> tags (metadata, SEO, social media images) and links the global CSS.
   * app/globals.css: Contains the basic styling for the whole app.

  2. Core Logic & UI Components
   * app/components/CoursePlanner.jsx: Defines the layout of the tool. It sets up the search bars, filter dropdowns, the desktop table, and the mobile
     cards.
   * app/lib/plannerRuntime.js: The engine. It handles:
       * Time Logic: Converting strings like "ST: 0800-0930" into math to detect conflicts.
       * Storage: Saving your plans to your browser so they don't disappear when you refresh.
       * Theme: Switching between Light and Dark mode.
       * Export: The logic to turn your plan into a JPG image for downloading.

  3. API Proxies (Communication with IUB)
  These files act as "middle-men" because browsers usually block direct connections to university servers for security (CORS).
   * app/api/prerequisites/route.js: Fetches your prerequisite data from IRAS.
   * app/api/registered-courses/route.js: Fetches your history of already completed courses.

  4. Assets & Styles
   * assets/styles/planner.css: (If present or linked) Contains the specific visual styles for the tables, buttons, and the schedule grid.
   * assets/icons/: Contains the logos and app icons used for the site and for mobile "Add to Home Screen" features.

  5. Configuration
   * package.json: Lists the libraries the project uses (like next.js, react, and html2canvas).
   * README.md: The instruction manual for the project (usually for developers).
   * .gitignore: Tells Git which files to ignore (like large node_modules folders).