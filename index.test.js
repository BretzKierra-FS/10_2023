const http = require('axios');

const email = 'kierraBretz@gmail.com';
const phone = '321-555-3333';
const birthday = '12/06/2020';
const password = 'Password!12';

// Testing if API is working
test('API status is connected...', async () => {
  try {
    const response = await http.get('http://localhost:3000/');
    expect(response.status).toBe(200);
  } catch (error) {
    expect(error.code).not.toBe('ECONNREFUSED');
  }
});

//
