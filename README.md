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

<img src="https://github.com/user-attachments/assets/2b37307b-7887-4b63-a42a-f67b724825b7" alt="Home Page">
<img src="https://github.com/user-attachments/assets/1fef66c0-488d-42b0-9453-25f814f18880" alt="Category Page">
<img src="https://github.com/user-attachments/assets/fffac1ee-1340-4d1d-978c-6246bddedce9" alt="Edit Category">
<img src="https://github.com/user-attachments/assets/6fa7a4de-ebf2-474a-87db-05f62643f339" alt="Product Page 1">
<img src="https://github.com/user-attachments/assets/05624b9b-c59f-4210-ade7-7de023cfd9e9" alt="Product Page 2">
<img src="https://github.com/user-attachments/assets/b872594e-a660-4dca-ac8a-df8894f219a4" alt="Add Product Page">
<img src="https://github.com/user-attachments/assets/60ad2d80-dfbf-4894-94ab-f179a8d4f824" alt="Product Page 2">

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

