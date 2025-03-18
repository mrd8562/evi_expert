// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // Также можно использовать rootFoolder
const srсFolder = `./src`;

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    html: `${buildFolder}/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    files: `${buildFolder}/files/`
  },
  src: {
    js: `${srсFolder}/js/app.js`,
    images: `${srсFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srсFolder}/img/**/*.svg`,
    scss: `${srсFolder}/scss/style.scss`,
    html: `${srсFolder}/*.html`, //.pug
    files: `${srсFolder}/files/**/*.*`,
    svgicons: `${srсFolder}/svgicons/*.svg`,
  },
  watch: {
    js: `${srсFolder}/js/**/*.js`,
    scss: `${srсFolder}/scss/**/*.scss`,
    html: `${srсFolder}/**/*.html`, //.pug
    images: `${srсFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico.webp}`,
    files: `${srсFolder}/files/**/*.*`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srсFolder,
  rootFolder: rootFolder,
  ftp: `test`
}