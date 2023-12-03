const bcrypt = require('bcrypt');
const saltRounds = 10;

// Function to hash a password
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    console.log(salt)
    return hash;
  } catch (error) {
    throw error;
  }
};

// Function to compare a password with its hash
const comparePassword = async (password, hash) => {
  try {
    const match = await bcrypt.compare(password, hash);
    return match;
  } catch (error) {
    throw error;
  }
};

// Example usage
const originalPassword = 'ibrahim@123';

async function checkPassword() {
  try {
    const hashedPassword = await hashPassword(originalPassword);
    console.log('Hashed Password:', hashedPassword);
    const comparisonResult = await comparePassword("ibrahim@123", hashedPassword);
    console.log('Password Match:', comparisonResult);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

checkPassword();
console.log('hello');
