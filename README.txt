Restaurant API

This project is a RESTful API for managing restaurant information in Aracaju, built with Node.js, Express, and MongoDB. The API includes authentication with JWT to ensure that only authorized users can create, update, or delete restaurant records. The read operations are public and accessible to everyone.

1 - Installation

To run this project locally using Docker, follow these steps:

- Clone the repository:

git clone https://github.com/felipebpassos/restaurants-api.git
cd restaurant-api

- Build and run the project using Docker Compose:

docker-compose up --build
Access the API documentation at http://localhost:3000/api-docs.

- Persistência de Dados:

Os dados do MongoDB são armazenados em um volume Docker chamado mongo-data, garantindo que os registros sejam preservados mesmo se o container for reiniciado.

2 - Endpoints

Public Endpoints

- GET /api/restaurants: Retrieve all restaurants.

Protected Endpoints

- POST /api/restaurants: Create a new restaurant.
- PUT /api/restaurants/:id: Update a restaurant.
- DELETE /api/restaurants/:id: Delete a restaurant.
- POST /api/register: Register a new user.
- POST /api/login: Login and receive a JWT.

3 - Authentication and Authorization

To secure the API and restrict certain operations (create, update, delete) to authenticated users only, JWT (JSON Web Tokens) is used for authentication.

4 - Data Model

The restaurant data model includes the following fields:

- nome (name): The name of the restaurant (String).
- categoria (category): The category or type of cuisine offered by the restaurant (e.g., "Churrascaria", "Mediterrânea", "Italiano", "Hamburgueria", "Oriental") (String).
- preço (price): The price range of the restaurant, defined as "baixo" (low), "médio" (medium), "alto" (high), or muito alto (very high) (String).
- bairro (neighborhood): The neighborhood where the restaurant is located (String).
- endereço (address): The full address of the restaurant (String).

5 - Technology Stack

- Node.js: JavaScript runtime used for building the server.
- Express: Web framework for Node.js, used for building the RESTful API.
- MongoDB: NoSQL database used for storing restaurant information.
- JWT: JSON Web Tokens used for securing the API endpoints.
- Swagger: API documentation tool, making it easy to explore the API endpoints.
- Docker: Containerization platform used to deploy the application and its dependencies.

6 - License

This project is licensed under the MIT License.

7 - Architecture Decisions

Why MongoDB?

For this project, MongoDB was chosen as the database for the following key reasons:

- Flexibility of Data Structure:

The restaurant data may evolve over time, with potential changes or additions to the fields. MongoDB's schema-less design allows for easy modifications to the data structure without requiring significant changes to the database schema or application code.

- High Performance in Read/Write Operations:

MongoDB is optimized for high-throughput operations, which is essential for applications that may require fast read and write capabilities. This makes MongoDB particularly suitable for scenarios where the application needs to handle large volumes of data efficiently.
Scalability:

MongoDB's ability to scale horizontally across multiple servers ensures that the application can handle growth in data and user load over time, providing future-proofing for the application.