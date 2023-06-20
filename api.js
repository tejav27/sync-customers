const axios = require('axios');

// API URLs
const api1Url = 'https://api1.example.com';
const api2Url = 'https://api2.example.com';

// API keys - Sensitive data, store them in a vault or similar
const api1Key = 'example-api-key-1';
const api2Key = 'example-api-key-2';

// Fetch customers from API 1 with pagination and filters
async function fetchCustomers(filter = {}) {
  const url = `${api1Url}/api/v1/customer`;
  const config = {
    headers: { Authorization: api1Key },
    params: {
      id: filter.id,
      name: filter.name,
      limit: filter.limit || 50,
      offset: filter.offset || 0
    }
  };

  try {
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    console.error('Error fetching customers from API 1:', error.response.data);
    throw error;
  }
}

// Save a customer to API 2
async function saveCustomer(customer) {
  const url = `${api2Url}/api/v1/customer`;
  const config = {
    headers: { Authorization: api2Key }
  };

  try {
    const response = await axios.post(url, customer, config);
    return response.data;
  } catch (error) {
    console.error(`Error saving customer ${customer.id} to API 2:`, error.response.data);
    throw error;
  }
}

module.exports = { fetchCustomers, saveCustomer };

