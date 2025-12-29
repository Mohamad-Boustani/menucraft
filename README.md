X.Links:

    1.https://github.com/Mohamad-Boustani/mEnu_craft

    2.https://m-enu-craft.vercel.app/

A.Contributers:

Mohamad El Boustani 

Amer Osta

B.Installed libraries:

  1. Tailwindcss v3.4.18 - Utility-first CSS framework for styling

  2. Material-UI (MUI) v7.3.5 - React component library for UI elements (Drawer, Button, IconButton, etc.)
    
  3. React Toastify v11.0.5 - Toast notifications for user feedback
    
  4. Axios - HTTP client for API requests to backend
    
  5. React Router - Client-side routing and navigation

C.Website Description:

MenuCraft is a full-stack food ordering web application that allows users to browse a menu, add items to a cart, and place orders. The application features:

- **User Authentication**: Login/Signup with form validation
- **Dynamic Menu**: Food items organized by category (Burgers, Pasta, Drinks, etc.)
- **Shopping Cart**: Real-time cart management with quantity controls
- **Order Management**: Place orders with automatic total calculation
- **Persistent Storage**: Cart and order data synced with MySQL database
- **Responsive Design**: Built with Tailwind CSS and Material-UI for modern UI

### Architecture:
- **Frontend**: React.js with Context API for state management
- **Backend**: Express.js with MySQL database
- **Communication**: RESTful API with axios HTTP client
- **Styling**: Tailwind CSS v3 + Material-UI v7

D.Usage info:

  1. **Register/Login**: Create a new account or log in with existing credentials
  2. **Browse Menu**: Visit the Menu Page to view all available food items organized by category
  3. **Add to Cart**: Click the ADD button on any food item to add it to your shopping cart
  4. **Manage Cart**: Open the cart drawer (right side) to:
     - View all items in your current order
     - Increase/Decrease item quantities with +/- buttons
     - Remove individual items with the trash icon
     - See real-time total price calculation
  5. **Place Order**: Click "Place Order" button in the cart to finalize your order
  6. **Clear Cart**: Use the "Clear Cart" button to remove all items and start fresh
  7. **Navigation**: Use the Navbar to navigate between pages (Home, Menu, About, Contact, etc.)
    
E.Project structure

**Root Files**:
- `package.json` — project dependencies and scripts
- `tailwind.config.js` — Tailwind CSS configuration
- `public/index.html` — main HTML entry point

**Source Code** (`src/`):

**Components** (`src/components/`):
- `Navbar.jsx` — Top navigation bar with branding and menu
- `Sidebar.jsx` — Left drawer navigation component for routes and menu sections
- `CartDrawer.jsx` — Right-side shopping cart drawer with item management (+/-, delete, place order)
- `Footer.jsx` — Footer component with links and information

**Pages** (`src/pages/`):
- `Homepage.jsx` — Landing page with welcome message and featured content
- `MenuPage.jsx` — Main menu page displaying food items by category with ADD buttons
- `Login.jsx` — User login page with phone and password authentication
- `Register.jsx` — User registration page with form validation
- `About.jsx` — About page with company information
- `Contact.jsx` — Contact page with contact information

**Context** (`src/context/`):
- `Cartcontext.jsx` — React Context for global cart state management (cartItems, orderId, totalPrice, etc.)

**Styling**:
- `App.css` — Application-level styles
- `index.css` — Global CSS and Tailwind imports

**Assets** (`src/assets/`):
- Product images and other media files

**Public** (`public/`):
- `index.html` — HTML template
- `manifest.json` — PWA manifest
- `robots.txt` — SEO robots instructions


G.Backend API Documentation:

### Base URL
```
http://localhost:5000
```

### HTTP Status Codes

| Code | Description | Usage |
|------|-------------|-------|
| 200 | OK | Successful GET, PUT, DELETE operations |
| 201 | Created | Successful POST operations (resource created) |
| 204 | No Content | Successful operation but no data to return |
| 400 | Bad Request | Missing required fields, invalid data types, or invalid input |
| 401 | Unauthorized | Invalid authentication credentials (login failed) |
| 404 | Not Found | Requested resource does not exist |
| 500 | Internal Server Error | Database connection error or server-side issue |

### Special/Non-CRUD Endpoints

#### 1. User Login
```
POST /login
```
**Description**: Authenticate user with phone and password

**Request Body**:
```json
{
  "Phone": "0912345678",
  "Password": "password123"
}
```

**Success Response (200)**:
```json
{
  "message": "Login successful",
  "user": {
    "UserID": 1,
    "Fname": "John",
    "Lname": "Doe",
    "Phone": "0912345678",
    "Address": "123 Main St"
  }
}
```

**Error Response (401)**:
```json
{
  "message": "Invalid phone or password"
}
```

---

#### 2. Upsert Order Item (Insert or Increment)
```
POST /orderitems/upsert
```
**Description**: Add item to order. If item already exists in order, increment quantity; otherwise, insert new item.

**Request Body**:
```json
{
  "OrderID": 20,
  "FoodID": 6,
  "Quantity": 1,
  "Price": 9.99
}
```

**Success Response (201)** - New item created:
```json
{
  "message": "Order item created successfully",
  "id": 45,
  "quantity": 1
}
```

**Success Response (200)** - Existing item updated:
```json
{
  "message": "Order item updated successfully",
  "id": 42,
  "quantity": 3
}
```

**Error Response (400)**:
```json
{
  "message": "OrderID, FoodID, Quantity, and Price must be numbers"
}
```

---

#### 3. Update Item Quantity by OrderID and FoodID
```
PUT /orderitems/by-order-food
```
**Description**: Update quantity for a specific item in an order using composite key (OrderID + FoodID)

**Request Body**:
```json
{
  "OrderID": 20,
  "FoodID": 6,
  "Quantity": 3,
  "Price": 9.99
}
```

**Success Response (200)**:
```json
{
  "message": "Order item updated successfully"
}
```

**Error Response (404)**:
```json
{
  "message": "Order item not found"
}
```

**Error Response (400)**:
```json
{
  "message": "Quantity must be greater than zero"
}
```

---

#### 4. Delete Order Item by OrderID and FoodID
```
DELETE /orderitems/by-order-food
```
**Description**: Remove a specific item from an order using composite key (OrderID + FoodID)

**Request Body**:
```json
{
  "OrderID": 20,
  "FoodID": 6
}
```

**Success Response (200)**:
```json
{
  "message": "Order item deleted successfully"
}
```

**Error Response (404)**:
```json
{
  "message": "Order item not found"
}
```

---

#### 5. Clear All Items from Order
```
DELETE /orderitems/by-order/:orderId
```
**Description**: Delete all items in a specific order

**URL Parameters**:
```
:orderId - Order ID (integer)
```

**Success Response (200)**:
```json
{
  "message": "Order items cleared successfully"
}
```

---

#### 6. Finalize Order (Calculate and Update Total)
```
POST /orders/:id/finalize
```
**Description**: Calculate total price from all order items and finalize the order. Sum formula: `SUM(Quantity * Price)`

**URL Parameters**:
```
:id - Order ID (integer)
```

**Success Response (200)**:
```json
{
  "message": "Order finalized successfully",
  "orderId": 20,
  "totalPrice": 29.97
}
```

**Error Response (400)**:
```json
{
  "message": "Order has no items to finalize"
}
```

**Error Response (404)**:
```json
{
  "message": "Order not found"
}
```

---

### Standard CRUD Endpoints

#### Food Management
- `GET /food` - Get all food items
- `GET /food/:id` - Get specific food item
- `POST /food` - Create new food item
- `PUT /food/:id` - Update food item
- `DELETE /food/:id` - Delete food item

#### Orders Management
- `GET /orders` - Get all orders
- `GET /orders/:id` - Get specific order
- `POST /orders` - Create new order
- `PUT /orders/:id` - Update order
- `DELETE /orders/:id` - Delete order

#### Order Items Management
- `GET /orderitems` - Get all order items
- `GET /orderitems/:id` - Get specific order item
- `POST /orderitems` - Create new order item
- `PUT /orderitems/:id` - Update order item
- `DELETE /orderitems/:id` - Delete order item

#### Users Management
- `GET /users` - Get all users
- `GET /users/:id` - Get specific user
- `POST /users` - Create new user (register)
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

---

### Response Format

All API responses follow a consistent JSON format:

**Success**:
```json
{
  "message": "Operation description",
  "data": {} // Optional, depends on endpoint
}
```

**Error**:
```json
{
  "message": "Error description",
  "error": {} // Optional, detailed error info
}
```

---

### Database Schema

**Orders Table**:
```sql
- OrderID (Primary Key)
- OrderDate (Date)
- UserID (Foreign Key → user table)
- TotalPrice (Float)
```

**OrderItems Table**:
```sql
- OrderItemID (Primary Key)
- OrderID (Foreign Key → orders table)
- FoodID (Foreign Key → food table)
- Quantity (Integer)
- Price (Float)
```

**Food Table**:
```sql
- FoodID (Primary Key)
- FoodName (String)
- Price (Float)
- Category (String)
- Description (Text, Optional)
```

**User Table**:
```sql
- UserID (Primary Key)
- Fname (First Name)
- Lname (Last Name)
- Phone (String, Unique)
- Address (String)
- Password (String)
```

---

### Common Error Scenarios

| Endpoint | Error | Cause | Solution |
|----------|-------|-------|----------|
| `/orderitems/upsert` | "OrderID, FoodID, Quantity, and Price are required" | Missing required fields | Ensure all 4 fields are provided |
| `/orderitems/by-order-food` | "Order item not found" | OrderID/FoodID combo doesn't exist | Verify OrderID and FoodID are correct |
| `/orders/:id/finalize` | "Order has no items to finalize" | Order exists but has no items | Add items before finalizing |
| `/login` | "Invalid phone or password" | Credentials don't match | Check phone and password |

---






