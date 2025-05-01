# PAPERCARD FRONTEND

### 1.Project Name: PaperCard

### 2. Project Title: This is PaperCard project that controls all work related to stationary shop.

### 3. Key Features:

### Admin Functionalities:

- Admin can login into dashboard using email and password.
- Admin can create an stationary product.
- Admin can update and delete the product.
- Admin can view all order details.
- Admin can accept the order that changes status pending to shipping.
- Admin can delete the order.
- Admin view details into dashboard.

### User Functionalities:

- User seach stationary product by category, title and description.
- User can filter the product by category.
- User can sort the product by price.
- User can view details of the product.
- User can purchase product by complete payment.
- User can view already ordered product in dashboard.
- User can view registered details in dashboard.

### 4. Frontend Technology Used:

- React
- Redux
- Ant Design
- Css

### 5. Backend Technology Used:

- Typescript
- Express Js
- Mongoose
- MongoDB

### 6. Challenges:

Implementing search, filter, and sort functionality for stationary products presented several challenges. Searching by title and description required handling partial and case-insensitive matches efficiently, which affected performance without proper indexing. Filtering by category while maintaining other active criteria like search and sort introduced complexity in query construction and state management. Additionally, sorting by price needed to work seamlessly with existing filters, ensuring the UI updated accurately and in sync with backend results.

### 7. Future Work:

Allow users to leave reviews and rate products to build trust and help future buyers make informed decisions. Use user behavior and purchase history to suggest relevant products through personalized recommendations.Enhance user experience with smart search features like autocomplete, keyword suggestions, and search history.Provide promotional tools such as coupons, flash sales, or seasonal discounts to boost sales.Enable users to save favorite products for future purchases, improving retention and conversion.

## How to locally run the Frontend:

### 1. Clone the Repository

Run the following command in your terminal to clone the repository:

```javascript
git clone https://github.com/Apurbopaul131/Stationary-shop-client.git
```

### 2. Navigate to the Project Directory

Run the following command to by adding expected directory name:

```javascript
cd your-repo-name
```

### 3. Install Dependencies

Install the required dependencies using npm or yarn:

```javascript
npm install
// or
yarn install
```

### 7. Run the Project

```javascript
//development mode
npm run dev
```

### Frontend live link: https://stationary-shop-client-one.vercel.app

### project presentation vedio link: https://drive.google.com/file/d/19RqS6FvTNPlebIJ0Ig4G-Wlc_buqB8Yq/view?usp=drive_link

Go to stationary-shop backend source code using [PAPERCARD-BACKEND](https://github.com/Apurbopaul131/Stationery-Shop-B4A2V5.git).
