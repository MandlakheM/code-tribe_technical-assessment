# Online Marketplace MVP

## Overview
This project is the MVP (Minimum Viable Product) for an online marketplace, allowing users to list, browse, and purchase products. The application is built with Node.js on the backend and React.js on the frontend, with Firebase handling file storage and user authentication. 


## Project Features

### Backend (Node.js)
- **RESTful API** for managing product listings, user registration, authentication, and CRUD operations on product data.
- **File Storage** integration with Firebase Storage for uploading product images.
- **Database Integration** with Firebase Firestore to store user and product data.

### Frontend (React.js)
- **Responsive Web Interface** that interacts with the backend API.
- **User Registration and Authentication** with Firebase Authentication.
- **Product Listing**: Users can view all available products in the marketplace.
- **Create Product**: Registered users can add new products for sale.
- **Edit and Delete Product**: Users can update or delete their product listings.

---

## Technology Stack

- **Backend**: Node.js, Express, Firebase Admin SDK
- **Frontend**: React.js, Axios, Firebase
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage

---

## Installation and Setup

### Prerequisites
- Node.js and npm installed
- Firebase project setup (Firestore and Storage enabled)
- Firebase service account credentials for server-side access

### Backend Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MandlakheM/code-tribe_technical-assessment.git
   cd backend
   npm install
   npm run server
   ```

### Frontend Setup

Navigate to the frontend folder:

```bash
cd frontend
npm install
npm run dev
```

### API Documentation
The following API endpoints are available for the backend server:

GET /items: Fetch all items in the marketplace.
GET /item/:id: Fetch a single item by ID.
POST /add-item: Add a new item to the marketplace.
PUT /item/:id: Update an existing item.
DELETE /item/:id: Delete an item from the marketplace.
