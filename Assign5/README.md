# E-commerce Store

This project is an E-commerce store built using React for the frontend and Node.js with Express for the backend. It includes features such as customizable product views (List/Grid), product listings, search functionality, cart management, a checkout process, and payment gateway integration using Stripe.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)

## Features

- **Customizable Product Views:** Toggle between Grid and List views for product listings.
- **Product Listings:** Display a list of products with images, names, and prices.
- **Product Details:** View detailed information about a specific product.
- **Search Functionality:** Search for products.
- **Cart Management:** Add and remove products from the cart.
- **Checkout Process:** Complete a purchase using Stripe for payment processing.
- **Responsive Design:** Ensure a seamless experience across devices.

## Installation

### Frontend

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ecommerce-store.git
   cd ecommerce-store

   ```

2. Install the dependencies:

```bash
npm install

```

3. Start the react development server:

```bash
npm run dev

```

4. Navigate to the backend directory:

```bash
cd backend

```

5. install the dependencies:

```bash
npm install

```

6. start the express server:

```bash
node server.js

```

## Usage

1. Open your browser and navigate to http://localhost:3000 to view the frontend.
2. The backend will be running on http://localhost:5000.

### Adding Products

1. Add your products in the backend server.js file under the /api/products endpoint.

### Stripe Integration

1. Replace your-public-key-here in src/components/Checkout.js with your actual Stripe public key.
2. Replace your-secret-key-here in backend/server.js with your actual Stripe secret key.

## Technologies

### Frontend:

- **React**
- **React Router**
- **Axios**
- **Stripe**
- **CSS**

### Backend:

- **Node.js**
- **Express**
- **Stripe**

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the repository
2. Create a new branch (git checkout -b feature-branch)
3. Make your changes
4. Commit your changes (git commit -m 'Add some feature')
5. Push to the branch (git push origin feature-branch)
6. Create a pull request
