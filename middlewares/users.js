const validateEmail = (req, res, next) => {
  if (typeof req.body.email !== 'undefined' && req.body.email.length) {
    next();
  } else {
    res.status(422).json({ message: 'Email field is required' });
  }
};

const validatePhone = (req, res, next) => {
  if (typeof req.body.phone !== 'undefined' && req.body.phone.length) {
    next();
  } else {
    res.status(422).json({ message: 'Phone field is required' });
  }
};

const validateBirthday = (req, res, next) => {
  if (typeof req.body.birthday !== 'undefined' && req.body.birthday.length) {
    next();
  } else {
    res.status(422).json({ message: 'Birthday field is required' });
  }
};

const validatePassword = (req, res, next) => {
  if (typeof req.body.password !== 'undefined' && req.body.password.length) {
    next();
  } else {
    res.status(422).json({ message: 'Password field is required' });
  }
};

module.exports = {
  validateBirthday,
  validateEmail,
  validatePassword,
  validatePhone,
};
