// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const themes = [
  { name: 'Default', class: 'indigo-theme' },
  { name: 'Indigo-Pink', class: 'indigo-pink-theme' },
  { name: 'Indigo-Pink-Dark', class: 'indigo-pink-dark-theme' },
  { name: 'Indigo', class: 'indigo-theme' }
]

<<<<<<< HEAD:front-end/src/environments/environment.ts
const urls = {
  login: 'http://localhost:3000/admin/auth/'
}
export const environment = {
  production: false,
  themes: themes,
  urls: urls
=======
export const environment = {
  production: false,
  themes: themes
>>>>>>> 534ff1011e4c1ba5e394e46d83a8d5683e5dd275:angular-src/src/environments/environment.ts
};

