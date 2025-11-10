# 🌸 Laura's Portfolio (laura_project_2)

A personal portfolio built with **Vue.js**, showcasing my projects, skills, and professional journey.

[My portfolio](https://laura-mussard.com/)

---

## 🚀 Project Setup

Install dependencies:

```bash
npm install
```

Start the development server with hot-reload:

```bash
npm run dev
```

Build for production (type-check, compile, and minify):

```bash
npm run build
```

---

## 🏗️ Project Architecture

The project is structured into three main folders:

* **components** – reusable UI components for each section
* **types** – TypeScript types for projects and timelines
* **views** – main pages of the application

---

### ✨ Components

**Header**

* **NavigationBar** – navigation links: Home, About, Projects, Contact
* **Toggle** – switch to toggle the app theme
* **Top** – animated header with flowers and title using [Kinesis.js](https://kinesisjs.com/)

**Body**

* **Steps** – displays two timelines: *Education* and *Professional Experience*
* **Step** – individual timeline entry
* **Certification** – displays earned certifications
* **Projects** – project carousel implemented with [Swiper.js](https://swiperjs.com/get-started#use-swiper-from-cdn)
* **Modal** – project details displayed in a modal when clicked

**Footer**

* **Contact** – contact section with links and form

---

### 📐 Types

**Project Type**

* `title`: string
* `image`: string
* `technologies`: string
* `description`: string (use `;` to create a list)
* `link`: string
* `video`: string

**Step Type**

* `title`: string
* `period`: string
* `description`: string (use `;` to create a list)
* `place`: string

---

### 🖥️ Views

**Home** – the main page, containing all the components listed above.

---

### ⚡ Features

* Fully responsive design
* Dark/Light theme toggle
* Smooth animations with Kinesis.js
* Interactive project carousel with modals

---

### 📚 Tech Stack

* **Vue.js 3**
* **TypeScript**
* **Swiper.js**
* **Kinesis.js**


