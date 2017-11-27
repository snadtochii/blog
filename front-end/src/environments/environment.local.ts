const themes = [
    { name: 'Default', class: 'indigo-theme' },
    { name: 'Indigo-Pink', class: 'indigo-pink-theme' },
    { name: 'Indigo-Pink-Dark', class: 'indigo-pink-dark-theme' },
    { name: 'Indigo', class: 'indigo-theme' }
  ]
  
  const urls = {
    login: 'http://localhost:3000/users/auth'
  }
  export const environment = {
    production: false,
    themes: themes,
    urls: urls
  };