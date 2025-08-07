# 🛍️ Product Management Web App

A full-stack CRUD web application built using **Node.js**, **Express**, **EJS templates**, **MySQL (RDBMS)**, and **Bootstrap 5**. It includes server-side pagination and modular routing to manage **Products** and **Categories** efficiently.

---

## 🚀 Features

- ✅ Category Master CRUD (Add, Edit, Delete, List)
- ✅ Product Master CRUD (with Category mapping)
- ✅ Server-side pagination for product listing
- ✅ Bootstrap 5 UI with reusable Navbar and Footer
- ✅ Clean modular folder structure
- ✅ Responsive and mobile-friendly interface

---

## 🖼️ Screenshots


---

## 🛠️ Technologies Used

- **Node.js** – Runtime
- **Express.js** – Web Framework
- **EJS** – Templating engine
- **MySQL** – Relational database
- **Bootstrap 5** – Frontend framework
- **Body-parser** – Middleware for handling form data

---

## 📁 Folder Structure

```
project/
├── app.js
├── package.json
├── db/
│   └── connection.js
├── routes/
│   ├── categoryRoutes.js
│   └── productRoutes.js
├── controllers/
│   ├── categoryController.js
│   └── productController.js
├── views/
│   ├── home.ejs
│   ├── category/
│   │   ├── form.ejs
│   │   └── list.ejs
│   ├── product/
│   │   ├── form.ejs
│   │   └── list.ejs
│   └── partials/
│       ├── navbar.ejs
│       └── footer.ejs
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/adimore96/NimapMachineTest.git
   cd product-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure MySQL Database**

   - Create the required tables:

   ```sql
   CREATE TABLE category (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(100) NOT NULL
   );

   CREATE TABLE product (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(100) NOT NULL,
     category_id INT,
     FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE SET NULL
   );
   ```

   - Insert sample data:

   ```sql
   INSERT INTO category (name) VALUES ('ACER'), ('DELL'), ('HP'), ('Lenovo');
   INSERT INTO product (name, category_id) VALUES 
   ('Acer Aspire 5', 1), ('Dell XPS 13', 2), ('HP Pavilion', 3), ('Lenovo ThinkPad', 4);
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Visit the app**
   ```
   http://localhost:3000
   ```

---

## 📌 Routes Summary

| URL                    | Function                      |
|------------------------|-------------------------------|
| `/`                    | Home Page                     |
| `/category`            | List categories               |
| `/category/create`     | Add new category              |
| `/category/edit/:id`   | Edit category                 |
| `/category/delete/:id` | Delete category               |
| `/product`             | Product list with pagination  |
| `/product/create`      | Add product                   |
| `/product/edit/:id`    | Edit product                  |
| `/product/delete/:id`  | Delete product                |

---

## 📇 Author

**Aditya More**  
Built with ❤️ using Node.js, EJS, and MySQL

