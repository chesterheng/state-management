# State Management

## Table of Contents
- [State Management](#state-management)
  - [Table of Contents](#table-of-contents)
  - [**01. Introduction**](#01-introduction)
    - [Types of State](#types-of-state)
  - [**02. Class-Based State**](#02-class-based-state)
  - [**03. Hooks State**](#03-hooks-state)
  - [**04. Reducers**](#04-reducers)
  - [**05. Context**](#05-context)
  - [**06. Data Fetching**](#06-data-fetching)
  - [**07. Thunks**](#07-thunks)

## **01. Introduction**

The main job of React is to take your application state and turn it into DOM nodes.

[pure-react-state-management](https://github.com/FrontendMasters/pure-react-state-management)

### Types of State

There are many kinds of state.
- Model data: The nouns in your application.
  - For example: products, orders
- View/UI state: Are those nouns sorted in ascending or descending order?
  - For example: list of sorted products
- Session state: Is the user even logged in?
- Communication: Are we in the process of fetching the nouns from the server?
  - For example: loading, loaded or error
- Location: Where are we in the application? Which nouns are we looking at?
  - For example: routing, shopping cart, view products

Or, it might make sense to think about state relative to time.

- Model state: This is likely the data in your application. This could be the items in a given list.
- Ephemeral state: Stuff like the value of an input field that will be wiped away when you hit “enter.” This could be the order in which a given list is sorted.

**[⬆ back to top](#table-of-contents)**

## **02. Class-Based State**
**[⬆ back to top](#table-of-contents)**

## **03. Hooks State**
**[⬆ back to top](#table-of-contents)**

## **04. Reducers**
**[⬆ back to top](#table-of-contents)**

## **05. Context**
**[⬆ back to top](#table-of-contents)**

## **06. Data Fetching**
**[⬆ back to top](#table-of-contents)**

## **07. Thunks**
**[⬆ back to top](#table-of-contents)**