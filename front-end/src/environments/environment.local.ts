const themes = [
  { name: 'Default', class: 'indigo-theme' },
  { name: 'Indigo-Pink', class: 'indigo-pink-theme' },
  { name: 'Indigo-Pink-Dark', class: 'indigo-pink-dark-theme' },
  { name: 'Indigo', class: 'indigo-theme' }
];

const urls = {
  auth: {
    login: 'http://localhost:3000/api/v0/users/auth',
  },
  posts: {
    categories: 'http://localhost:3000/api/v0/categories'
  }
};

export const environment = {
  production: false,
  themes: themes,
  api: urls
};
