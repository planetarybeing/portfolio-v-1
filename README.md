## Let's get things running

Most of this is boilerplate, but I will call out the following three dependencies:

- `anime.js` -> A javascript animation library, used for the grid animation inside of DotGrid.tsx
- `framer-motion` -> A react based animation library, used in a hand full of places (anywhere you see `<motion.el />` style components)
- `sass` -> All styling uses plain CSS and sass modules for this project

You can get the project running by first installing dependencies.

From the terminal, run:

```
npm install
# or
yarn install
```

This will take a minute or two, but once that's done, you should be able to run the following command:

```
npm run dev
# or
yarn dev
```

This will start the project on `localhost:3000`

## The file structure

Inside of the `pages/` directly you'll find 3 files:

- `_app.tsx` -> A file which wraps around every page in our app. Here I import the Poppins font and include it in the page.
- `_document.tsx` -> Essentially the NextJS version of your base "HTML document". Nothing fancy here.
- `_index.tsx` -> This represents the home route. We include 1 single component here called `<Home />`

## Styling

Global styling (colors mainly) are defined using CSS variables in the `styles/globals.css` file.

```
  --background: rgb(17, 17, 17);
  --bg-opaque: rgb(17, 17, 17, 0.25);
  --background-light: rgb(35, 35, 35);
  --background-dark: rgb(8, 8, 8);

  --text: rgb(235, 236, 243);
  --brand: rgb(10, 255, 157);

  --text-xs: 1.6rem;
  --text-sm: 1.8rem;
  --text-md: 2.2rem;
  --text-lg: 3.6rem;
  --text-xl: 5.6rem;
  --text-2xl: 9.6rem;
```
