const { fetchCustomers, saveCustomer } = require('./api');

// Sync customers between APIs
async function syncCustomers() {
  try {
    const batchSize = 50; // Number of customers to sync in each batch
    let offset = 0;
    let customers = await fetchCustomers({ limit: batchSize, offset });

    while (customers.length > 0) {
      await processBatch(customers);
      offset += batchSize;
      customers = await fetchCustomers({ limit: batchSize, offset });
    }

    console.log('Customer synchronization completed.');
  } catch (error) {
    console.error('Error syncing customers:', error);
  }
}

// Process a batch of customers concurrently
async function processBatch(customers) {
  const promises = customers.map(customer => saveCustomer(customer));

  try {
    await Promise.all(promises);
    console.log(`Processed ${customers.length} customers.`);
  } catch (error) {
    console.error('Error processing batch:', error);
    throw error;
  }
}

syncCustomers();


