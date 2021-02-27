## Getting Started

First, install the npm packages before starting the app 

```bash
yarn install
or
yarn
```

Then, run the development server:

```bash
yarn run dev
```

Finally, run test command to run unit tests:
```bash
yarn test
```


## Project Structure (Development/Design Road Map)
1. Considered to utilise `NextJS` for build this project (tried something new + personal upskills)
2. Implemented `Atomtic Design Methodology` to design React components
3. `Unit tests` covered for key features development (Core functionalities covered, such as components, movement tracking and query validator function) 
4. Using `React hooks` for components build (shorter and cleaner)
5. Utilized `as less as possible` npm packages for building this web app (easier to maintain, no need to consider to do much update npm package versions issue)
6. Tried to think the most better UX for this app (eg: using `dropdown selector` instead of manual typing for the action command (eg: LEFT), enhanced user experience I guess)
7. The CSS naming convention is followed up with `CSS BEM Methodology`
8. Tried to show a `axis` chart at the end of query for the visual result display
9. stores `constants` in an independent folder
10. considered to use `Bulma` for simple styling edition


## References (For what I have learnt during this project):
1. https://medium.com/frontend-digest/setting-up-testing-library-with-nextjs-a9702cbde32d
2. https://seesparkbox.com/foundry/bem_by_example
3. https://github.com/victornguyen/toy-robot
4. https://getbootstrap.com/docs/4.0/utilities/text/
5. https://github.com/uber/react-vis/blob/master/docs/xy-plot.md
6. https://github.com/uber/react-vis/blob/master/docs/mark-series.md
7. https://dev.to/dance2die/href-vs-src-in-html-10l7
8. https://github.com/immerjs/immer
9. https://immerjs.github.io/immer/docs/produce
10. https://github.com/keyz/identity-obj-proxy#readme
11. https://stackoverflow.com/questions/5629805/disabling-enter-key-for-form/37241980
12. https://spectrum.chat/react-hook-form/help/validate-a-field-only-if-has-been-touched-or-if-a-input-is-dirty~7edb7af9-b4b4-4b8b-a469-04043d363501
13. https://stackoverflow.com/questions/45567702/how-to-destruct-data-hyphen-cased-attributes-from-props
14. https://testing-library.com/docs/dom-testing-library/api-events/
15. https://stackoverflow.com/questions/52783144/how-do-you-test-for-the-non-existence-of-an-element-using-jest-and-react-testing


Refactor actions in 2021:
1. added more tests
2. updated css by using Bulma
3. updated README.md file
4. refactored util functions
