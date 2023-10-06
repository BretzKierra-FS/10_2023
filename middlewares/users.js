const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/; // Phone Format ### ### #### or ###-###-####
const birthdayRegex =
  /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(\d{2}|\d{4})$/; //Birthday format dd/mm/yyy
const passwordRegex =
  /^(?=.*[A-Za-z0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/; //Password format at least 6 char, one special, one number

const validateEmail = (req, res, next) => {
  const { email } = req.body.email;

  if (!email) {
    return res.status(422).json({ message: 'Email field is required' });
  }

  if (!emailRegex.test(email)) {
    return res.status(422).json({
      message: 'Invalid email format',
    });
  }

  next();
};

const validatePhone = (req, res, next) => {
  const { phone } = req.body.phone;

  if (!phone) {
    return res.status(422).json({ message: 'Phone field is required' });
  }

  if (!phoneRegex.test(phone)) {
    return res.status(422).json({
      message: 'Invalid phone format',
    });
  }

  next();
};

const validateBirthday = (req, res, next) => {
  const { birthday } = req.body.birthday;

  if (!birthday) {
    return res.status(422).json({ message: 'Birthday field is required' });
  }

  if (!birthdayRegex.test(birthday)) {
    return res.status(422).json({
      message: 'Invalid birthday format',
    });
  }

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body.password;

  if (!password) {
    return res.status(422).json({ message: 'Password field is required' });
  }

  if (!passwordRegex.test(password)) {
    return res.status(422).json({
      message: 'Invalid email format',
    });
  }

  next();
};

module.exports = {
  validateBirthday,
  validateEmail,
  validatePassword,
  validatePhone,
};
