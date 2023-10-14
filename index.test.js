const http = require('axios');

const email = 'kierraBretz123@gmail.com';
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

// This will send a POST request to the /signup endpoint and check if it does not respond with a 404 status code.
test('Signup API is working...', () => {
  const response = http.post('http://localhost:3000/signup');
  return response.catch(({ response }) =>
    expect(response.status).not.toBe(404)
  );
});
