# varstore-mob

Certainly! Here's the content in a `.md` file:

````markdown
# Varstore - AsyncStorage Helper for React Native

## Overview

`varstore` is a utility package designed to simplify interactions with `AsyncStorage` in React Native applications. It provides methods for setting, getting, clearing, and managing multiple key-value pairs in the AsyncStorage storage.

## Installation

Install the `@react-native-async-storage/async-storage` package in your React Native project if you haven't already:

```bash
npm install @react-native-async-storage/async-storage
```
````

Then, install the `varstore` package:

```bash
npm install varstore
```

## Usage

### Importing `varstore`

```javascript
import varstore from "varstore";
```

### Methods

#### 1. Setting a Variable

```javascript
await varstore.set("key", "value", { Console: true });
// Optional Console parameter logs success if set to true
```

#### 2. Getting a Variable

```javascript
const value = await varstore.get("key");
console.log(value); // Logs the retrieved value
```

#### 3. Clearing All Variables

```javascript
await varstore.clearAll({ Console: true });
// Optional Console parameter logs success if set to true
```

#### 4. Setting Multiple Variables

```javascript
const keyValuePairs = [
  ["key1", "value1"],
  ["key2", "value2"],
];
await varstore.multiset(keyValuePairs, { Console: true });
// Optional Console parameter logs success if set to true
```

#### 5. Getting Multiple Variables

```javascript
const keys = ["key1", "key2"];
const response = await varstore.multiget(keys, { Console: true });
console.log(response); // Logs an array of key-value pairs
```

## Example

```javascript
import varstore from "varstore";

const demoAsyncStorage = async () => {
  // Setting a variable
  await varstore.set("username", "JohnDoe", { Console: true });

  // Getting a variable
  const username = await varstore.get("username");
  console.log("Username:", username);

  // Clearing all variables
  await varstore.clearAll({ Console: true });

  // Setting multiple variables
  const keyValuePairs = [
    ["language", "en"],
    ["theme", "light"],
  ];
  await varstore.multiset(keyValuePairs, { Console: true });

  // Getting multiple variables
  const keys = ["language", "theme"];
  const response = await varstore.multiget(keys, { Console: true });
  console.log("Multiple Variables:", response);
};

demoAsyncStorage();
```

## License

This project is licensed under the [MIT License](LICENSE).

```

Copy and paste this content into a file with a `.md` extension, for example, `README.md`.
```
