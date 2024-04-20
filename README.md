## Home Page

This project is a web application that allows users to login and logout, view existing products, product details, perform searches, and send emails.

## Project Outcome

![Project gif](./home.gif)

[Home Live Page](https://home-page-esma.netlify.app/)

## Project Skeleton

```
Home Page (folder)
|
|
├── public
│    └── index.html
├── src
│    ├── context
│    │    ├── AuthProvider.jsx
│    │    └──  ProductProvider.jsx
│    ├── components
│    │     ├──Footer.jsx
│    │     └──Card.jsx
│    │     ├──Contact.jsx
│    │     ├──LoginForm.jsx
│    │     ├──Products.jsx
│    │     ├──Testimonials.jsx
│    │     ├──TimeLine.jsx
│    │     ├──Title.jsx
│    │     └──Navbar.jsx
│    │     └──ScroolToTop.jsx
│    ├── helpers
│    │     ├── data.js
│    │     ├── ToastNotify.js
│    ├── pages
│    │     ├── About.jsx
│    │     ├── ProductDetail.jsx
│    │     ├── Home.jsx
│    │     ├── Login.jsx
│    │     ├── NotFound.jsx
│    ├── router
│    │     ├── PrivateRouter.jsx
│    │     └── AppRouter.jsx
│    ├── App.js
│    ├── index.js
│    ├── index.css
├── .env
├── package-lock-json
├── package.json
├── tailwind.config.js
└── README.md
```

## Tech/framework used


- **React**
  is a JavaScript library developed by Facebook. It is used to build user interface components and is a popular choice for developing single-page applications.
  react-dom
- **Formik** A form library for React applications to manage forms.
 - **Yup** A schema-based validation library for JavaScript objects.
 - **Axios**
  Axios is a JavaScript library used for making HTTP requests. It can work in both browsers and Node.js environments and provides a Promise-based API.
  react
- **React Helmet**
  React Helmet is used to dynamically manage title, meta description, and other header tags in React applications. It allows you to add customized title and meta information for each page.
  react-icons
- **Tailwind CSSt**
 Tailwind CSS is a utility-first CSS framework for rapidly building custom designs
- **React Icons** is used to include icons in React applications. It includes various icon sets and can be easily used through components.
- **React Router Dom** A library for single-page application content navigation in React applications.
- **React Toastify** A library used to show notification messages to users in React applications.

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/esmaaksoy/home-frontend
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create .env file in home directory.
   ```sh
   REACT_APP_BASE_URL=https://home-backend-8cpw.onrender.com
   ```
5. The project is ready, you can start using it now.
   You can run:

   `npm start`

   Runs the app in the development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## İMPORTANT NOTES !

To use the application, you can log in with the following email and password <br>
email: admin@admin.com <br>
password: Admin@1234 <br>
