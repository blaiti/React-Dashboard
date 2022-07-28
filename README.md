# React-Dashboard

![licence](https://img.shields.io/badge/licence-MIT-blue)

React Dashboard is an admin template dashboard based on React.

![React-Dashboard](https://user-images.githubusercontent.com/32510139/181506432-dd67d4cc-31ae-40d6-8415-29b111e247b5.gif)


## Table of Contents

- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Run Locally](#run-locally)
- [Deployment](#deployment)
- [File Structure](#file-structure)
- [Author](#author)
- [License](#license)

## Tech Stack

**Frontend:** HTML5 / CSS3 / ReactJS

## Quick start

Clone the repo

```bash
  git clone https://github.com/blaiti/React-Dashboard
```

Install React-Dashboard with npm

```bash
  cd React-Dashboard
  npm install
```

## Run Locally

To run locally, run the following command

```bash
  npm start
```

## Deployment

To create a production build

```bash
  npm run build
```

## File Structure

Within the download you'll find the following directories and files:

```bash
React-Dashboard
.
├── package.json
├── package_lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.css
    ├── App.jsx
    ├── index.css
    ├── index.jsx
    ├── assets
    │   ├── icons
    │   │   ├── cancel.svg
    │   │   ├── dashboard.svg
    │   │   ├── done.svg
    │   │   ├── logout.svg
    │   │   ├── notification.svg
    │   │   ├── product.svg
    │   │   ├── refunded.svg
    │   │   ├── settings.svg
    │   │   ├── shipping.svg
    │   │   └── user.svg
    │   └── images
    │       └── white-logo.png
    ├── components
    │   ├── DashboardHeader
    │   │   ├── index.jsx
    │   │   └── styles.css
    │   └── SideBar
    │       ├── index.jsx
    │       ├── sidebar-item.jsx
    │       └── styles.css
    ├── constants
    │   ├── orders.js
    │   └── sidebar-menu.js
    ├── pages
    │   ├── Orders
    │   │   └── index.jsx
    │   └── styles.css
    └── utils
        └── table-pagination.js
```

## Author

- [@blaiti](https://github.com/blaiti)

## License

[MIT](https://github.com/blaiti/React-Dashboard/blob/main/LICENSE)
