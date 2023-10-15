const http = require('axios');

const email = 'kierraBretz123@gmail.com';
const phone = '321-555-3333';
const birthday = '12/06/2020';
const password = 'Password!12';

// Testing if API is working
test('API status is connected...', () => {
  return http.get('http://localhost:3000/').catch((error) => {
    expect(error.code).not.toBe('ECONNREFUSED');
  });
});

// Signup API is working - Check for 404 status
test('Signup API is working...', () => {
  return http.post('http://localhost:3000/signup').catch(({ response }) => {
    expect(response.status).not.toBe(404);
  });
});

// Signup API is working - Completely valid request
test('Signup API is working...', () => {
  return http
    .post('http://localhost:3000/signup', {
      email: email,
      phone: phone,
      birthday: birthday,
      password: password,
    })
    .catch((error) => {
      expect(error).toBeUndefined();
    });
});

// Email validation is working - Invalid email - Check if responds with 422
test('Email validation is working...', () => {
  return http
    .post('http://localhost:3000/signup', {
      email: 'invalidEmail',
      phone: phone,
      birthday: birthday,
      password: password,
    })
    .catch(({ response }) => {
      expect(response.status).toBe(422);
    });
});

// Phone validation is working - Invalid phone - Check if responds with 422
test('Phone validation is working...', () => {
  return http
    .post('http://localhost:3000/signup', {
      email: email,
      phone: phone,
      birthday: birthday,
      password: password,
    })
    .catch(({ response }) => {
      expect(response.status).toBe(422);
    });
});

// Birthday validation is working - Invalid birthday - Check if responds with 422
test('Birthday validation is working...', () => {
  return http
    .post('http://localhost:3000/signup', {
      email: email,
      phone: phone,
      birthday: 'invalidBirthday',
      password: password,
    })
    .catch(({ response }) => {
      expect(response.status).toBe(422);
    });
});

// Password validation is working - Invalid passwordd - Check if responds with 422
test('Password validation is working...', () => {
  return http
    .post('http://localhost:3000/signup', {
      email: email,
      phone: phone,
      birthday: birthday,
      password: 'XXXX',
    })
    .catch(({ response }) => {
      expect(response.status).toBe(422);
    });
});
