Este proyecto esta usando tailwind css

#1:
  npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
#2:
  npx tailwindcss init -p
#3:
en el archivo de tailwind.confing.js
purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
añadimos este en el objeto debe de quedar de la siguiente manera
  module.exports = {
   purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }


#4:
debemos de incluirlo en el css para esto dentro del archovo style.css en la parte superior colocamos lo siguiente

@tailwind base;
@tailwind components;
@tailwind utilities;
