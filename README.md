# job-board

This is my very first Vue.js project, which I very much enjoyed because of the challenge! It's made me excited to learn more about Vue.js.

# How it works
Firstly, I worked on the app cards. Since the json provided has a lot of data, I needed to loop through it using the v-for directive. This does the job of the for/in loop in Javascript, which allows all the data to be iterated over so repetitive code can be avoided. Similarly, I used this method to loop through the categories from the json file to create the list of checkbox filters. The issue with this is that it included duplicates. To combat this, I used a "computed" function that contains a set, so that each unique category would only be included in a new array once.

On the filter component, I also created a "computed" function to calculate the number of filtered jobs as well as how many jobs there are altogether. The function works by checking if the selected categories are equal to 0, and if so return all of the job data. If the selected categories are more than 0, then show the filtered jobs. Ideally this would change depending on what's typed into the search bar, but I couldn't manage to implement. Also, on the filter componenet, I used the v-show directive to give the categories button functionality. It works by toggling the CSS display between show/hide, so when you click on it, the categories can be hidden and shown.

Next, I worked on was the search bar. The task was to have the search results dynamically appear as the user types something into the search bar. I managed to achieve this with the help of v-model, which allows for two-way data binding between a value in the template and a value in our the properties.



# What I'd like to add/change
- Add functional drop-down selection to filter results based on salary and date posted.
- Add pagination
- Add extra page
- Change some of the "computed" so the search filters and search bar work together more smoothly



This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
