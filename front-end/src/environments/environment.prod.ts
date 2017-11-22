const themes = [
  { name: 'Default', class: 'indigo-theme' },
  { name: 'Indigo-Pink', class: 'indigo-pink-theme' },
  { name: 'Indigo-Pink-Dark', class: 'indigo-pink-dark-theme' },
  { name: 'Indigo', class: 'indigo-theme' }
]

const urls = {
  login: '/users/auth/'
}

export const environment = {
  production: true,
  themes: themes,
  urls: urls
};
