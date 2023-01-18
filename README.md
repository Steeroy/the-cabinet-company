# The Cabinet Company

## Initialising and Installations

This is a landing page project about a company that sells cabinets. The project was fully designed by Impact Studio, both mobile and desktop design. You can visit their link on [` Impact Studio `](http://www.impactstudio.co.za/). For this project I used `ReactJS` instead of a basic `HTML, CSS and Javascript` project. To learn more about `ReactJS` you can visit the link [` ReactJS `](https://reactjs.org/docs/getting-started.html).

With the use of `ReactJS`, specifically `npm` ([` NPM `](https://www.npmjs.com/)) which is an open source library where you can borrow and share packages. I installed (borrowed) these packages:

```json
  "dependencies":
    {
      "@iconify/react": "^4.0.1",
      "@testing-library/jest-dom": "^5.16.5",
      "@testing-library/react": "^13.4.0",
      "@testing-library/user-event": "^13.5.0",
      "bootstrap": "^5.2.3",
      "react": "^18.2.0",
      "react-bootstrap": "^2.7.0",
      "react-dom": "^18.2.0",
      "react-scripts": "5.0.1",
      "react-slick": "^0.29.0",
      "slick-carousel": "^1.8.1",
      "swiper": "^8.4.5",
      "web-vitals": "^2.1.4"
    }

```

which are in the `dependencies` section in `package.json`, this helps us install these packages with the use of `npm`, and make use of these packages. These are installed into the node modules folder. Some of the `dependencies` are pre-built, so as you initialise the project with:

```js
 $npx create-react-app [project_name]
```

Then these dependencies are also installed, as they make up a basic `ReactJs` app. For most of my projects I use `Bootstrap, react-bootstrap, @iconify/react` to increase productivity. I do not fully use them, but in cases where it makes the job simpler and cleaner. You can read more about the packages on [` Bootstrap `](https://getbootstrap.com/) (open source templates), [` Iconify `](https://iconify.design/) (open source icons from almost all major icons libraries such as Font Awesome, Material UI etc).

## Folder Structure

For most of my projects I normally approach a project using a certain way for folder structure, depending on how big the project is, determines the structure of my folders. For a big project, that would need multiple screens, I always create two folders in my `src` folder. These folders are `components` and `screens`, components folder has all the components I use in the project as general cases, things such as `product cards, navbar, footer, project cards etc`, instead of making the same items 5 to 10 and even 100 times, we can just use the component and map items.

Then for screens folder, as the name suggests, it's for different screens, so if we have the `about, home, services, menu, contact etc` pages, we would have a file structure that has all those screens, and of cause each screen will render smaller components, just like science moving from small particles to molecules to actual objects or substances.


## Styling

I make use of `sass` when I style my projects, as it is easier and more cleaner to work with, as much as I do not fully integrate `sass` into my projects, as the web still uses `css` as rendered styling sheets, I do make use of the `Live Sass Compiler` by `Glenn Marks` which converts the sass styles into css. For most of my projects I make use of the `desktop first` styling then move onto to mobile as I find it easier to work from big to small devices.
