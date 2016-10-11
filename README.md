# react-mobx-seed

[![Dependency Status](https://david-dm.org/sapientglobalmarkets/react-mobx-seed.svg)](https://david-dm.org/sapientglobalmarkets/react-mobx-seed)
[![Join the chat at https://gitter.im/sapientglobalmarkets/react-mobx-seed](https://badges.gitter.im/sapientglobalmarkets/react-mobx-seed.svg)](https://gitter.im/sapientglobalmarkets/react-mobx-seed?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Seed project for React + MobX

## Getting started
Create your own project on Github or elsewhere. Then add a git-remote pointing to this repo. Let's name it `mobx-seed`. Merge into your own branch.

```shell
> git remote add mobx-seed https://github.com/sapientglobalmarkets/react-mobx-seed.git
> git pull mobx-seed master
```

At this point you should have all the seed files. Now you can run:
```shell
> npm install
```

And you are off to the races!

## Libraries used

#### Language
- ES2015 + stage-1

#### Application Frameworks

- React
- PostCSS (cssnext + precss + css-modules)
- Optional static type-checking with either [Flow](https://flowtype.org) or [tcomb](https://github.com/gcanti/tcomb) type annotations

#### State Management

- MobX

#### Testing

- Mocha
- Karma
- Enzyme
- Coverage with Istanbul

#### Build

- Webpack
- Webpack Dev Server
- ESLint
- Plop (`generator`)
- React-Hot-Reload

#### Type Checking
Type checking is optional and gradual. If you add types to your arguments or functions returns, they will be checked. If not, they won't.

Here is an example of not using type annotations.
```js
function add(n1, n2) {
    return n1 + n2;
}
console.log('add: ', add(3, 4));    // 7
console.log('add: ', add(3, '4'));  // '34'
```

You can continue writing functions like this. You can also do this:
```js
function add(n1: number, n2: number): number {
    return n1 + n2;
}
console.log('add: ', add(3, 4));     // 7
console.log('add: ', add(3, '4'));   // 'Uncaught TypeError: [tcomb] Invalid value "4" supplied to n2: Number'
console.log('add: ', add(3, null));  // 'Uncaught TypeError: [tcomb] Invalid value null supplied to n2: Number'
```

I've specified that the both arguments should expect a number and the return value should be a number. Common, [built-in types](https://flowtype.org/docs/builtins.html#_) are:
* `string`
* `boolean`
* `number`
* `Array`
* `Object`
* `Function`
* `number[]` (or alternative syntax `Array<number>`)  

These are only basic types. There are many more and you can define your own types as a [union of multiple types](https://flowtype.org/docs/union-intersection-types.html#_):

```js
type U = number | string
```

You can even [enumerate which strings](https://flowtype.org/docs/builtins.html#_) are allowed:.
```js
type Suit = "Diamonds" | "Clubs" | "Hearts" | "Spades";
```


Since this typechecking is done through tcomb and babel, there is no need to add the `// @flow` pragma at the top of the file. Typechecking is done in development only.

If you want to remove this functionality completely, delete the tcomb plugin in `.babelrc`


## TODO

- Documentation
- More variety in Tests (interaction, ajax, logic)
