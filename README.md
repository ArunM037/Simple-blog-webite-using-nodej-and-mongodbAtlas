# Blog Service

This is a simple blog application built with Node.js, Express.js, MongoDB, and EJS for templating. The application supports basic CRUD operations for blog posts.

## Features

- Create, read, update, and delete blog posts
- View all blogs sorted by creation date
- View details of individual blog posts

## Prerequisites

- [Node.js](https://nodejs.org/) (v12.x or higher)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account for the database

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/ArunM037/Simple-blog-webite-using-nodej-and-mongodbAtlas.git
    cd blog-service
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB Atlas connection string:
    ```env
    DBURI=mongodb+srv://<username>:<password>@<cluster-url>/blog?retryWrites=true&w=majority
    ```

## Usage

1. Start the server:
    ```sh
    nodemon app
    ```

2. Open your browser and go to `http://localhost:3000` to see the application running.


## Routes

- `GET /blogs` - View all blogs
- `POST /blogs` - Create a new blog
- `GET /blogs/create` - View the form to create a new blog
- `GET /blogs/:id` - View details of a specific blog
- `DELETE /blogs/:id` - Delete a specific blog

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.
