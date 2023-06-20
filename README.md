# Javascript Exercise: Customer Sync

This project involves building a customer synchronization tool in Javascript that interacts with two mock systems via their REST APIs. The purpose of this synchronization is to fetch customer data from one system and save it to other system. The code is written in Javascript and can be executed in a Node.js environment.

## Mock APIs

The following are the URLs for the mock APIs used in this exercise:

API 1 URL: `https://api1.example.com`
API 2 URL: `https://api2.example.com`

API Endpoint for Customers: `/api/v1/customer`

Also, there are other available methods for the customer endpoint as below:

- GET `/api/v1/customer`: Retrieves a list of customers (returns an array of customer objects)
- POST `/api/v1/customer`: Creates a new customer (returns a customer object)
- PUT `/api/v1/customer/:id`: Updates an existing customer (returns a customer object)
- DELETE `/api/v1/customer/:id`: Deletes a customer

### GET Method Query Parameters

The `GET` method for the `/api/v1/customer` endpoint supports the following query parameters which may be used for other new use cases:

Filter Parameters (optional):
- id
- name

Other Parameters (optional):
- limit (default: 50)
- offset (default: 0)

### Authorization

Authorization for API requests is performed using the `Authorization` header. 

API 1 Key: `<<API key here>>`
API 2 Key: `<<API key here>>`
