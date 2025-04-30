# 📘 Tutorial Web App

A beginner-friendly interactive web platform for learning JavaScript fundamentals. Users can browse, save, and attempt coding activities with real-time feedback—all in one place.

---

## 🚀 Features

- 📚 **Interactive Tutorials** with titles, descriptions, and formatted content
- 🧪 **Code Exercises** where users can write, run, and submit code
- 🔐 **Login System** with session tracking
- 🔎 **Search Functionality** across tutorial content
- 💾 **Save to Bookmarks** for easy revisiting
- 📤 **Modal Display** of tutorial details
- ⌨️ **Live Code Execution** with console output and answer checking
- 📁 **LocalStorage Support** for saving tutorials

---

## 🛠️ Tech Stack

- HTML5, CSS3, JavaScript (Vanilla)
- LocalStorage (for state persistence)

---

## 📂 Folder Structure

```
codelearn-hub/
├── 📁 public/
|   ├── admin-index.html
|   ├── admin-insert.html
|   ├── bookmark.html
|   ├── index.html
|   ├── login.html
|   ├── signup.html
|   ├── tutorials.html
|   ├── scripts/
|   │   ├── app.js
|   |   ├── 📁modules/
|   |   └── 📁utils/
|   ├── styles/
|   |   ├── 📁components/
|   │   └── main.css
├── 📁docs/
└── README.md

```

---

## ⚙️ Setup & Usage

1. Clone or download the repo.
2. Open `login.html` in your browser.
3. Log in to access tutorials.
4. Add, view, and answer activities using the modals.
5. Your progress and answers are saved using browser localStorage.

> **Note:** Use the browser's developer console for advanced feedback when submitting answers.

---

## 🔍 Search Tutorial on Redirect

click on the featured tutorials on the home page and get redirected to the tutorials page with your query automatically filtered.

---

## 🧪 Activity Submission & Validation

- Type your code in the modal's text area.
- Click **Submit** to check your code.
- Output and errors are shown with helpful messages.

---

## 🙌 Credits

Created by Danissa C. Menguin for educational purposes.

---

## 📌 Future Enhancements

- Backend integration for persistent login
- Syntax highlighting
- More interactive tutorials
- Bookmark syncing across devices
