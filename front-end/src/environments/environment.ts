// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const themes = [
  { name: 'Default', class: 'indigo-theme' },
  { name: 'Indigo-Pink', class: 'indigo-pink-theme' },
  { name: 'Indigo-Pink-Dark', class: 'indigo-pink-dark-theme' },
  { name: 'Indigo', class: 'indigo-theme' }
];

const urls = {
  auth: {
    login: 'https://aqueous-lowlands-70672.herokuapp.com/api/v0/users/auth',
  },
  posts: {
    categories: 'https://aqueous-lowlands-70672.herokuapp.com/api/v0/categories',
    posts: 'https://aqueous-lowlands-70672.herokuapp.com/api/v0/posts'
  }
};

export const environment = {
  production: false,
  themes: themes,
  api: urls
};

