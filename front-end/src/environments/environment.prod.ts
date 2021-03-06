const themes = [
  { name: 'Default', class: 'indigo-theme' },
  { name: 'Indigo-Pink', class: 'indigo-pink-theme' },
  { name: 'Indigo-Pink-Dark', class: 'indigo-pink-dark-theme' },
  { name: 'Indigo', class: 'indigo-theme' }
];

const urls = {
  auth: {
    login: '/api/v0/users/auth',
  },
  posts: {
    categories: '/api/v0/categories'
  }
};

export const environment = {
  production: true,
  themes: themes,
  api: urls
};
