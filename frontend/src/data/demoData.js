// Initialize demo users for testing
const demoUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
    createdAt: new Date().toISOString()
  }
];

// Initialize demo users if not already present
if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify(demoUsers));
}

export const initializeDemoData = () => {
  console.log('Demo users initialized. You can login with:');
  console.log('Email: john@example.com, Password: password123');
  console.log('Email: jane@example.com, Password: password123');
};