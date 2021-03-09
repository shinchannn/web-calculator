# Web Calculator

Table of Contents

- [Web Calculator](#web-calculator)
  - [Project Overview](#project-overview)
  - [Project Structure](#project-structure)
    - [Front-end](#front-end)
    - [Back-end](#back-end)
  - [Features](#features)
    - [Basic Calculator](#basic-calculator)
      - [Irregular Input Sequences](#irregular-input-sequences)
    - [Real-time sharing](#real-time-sharing)
    - [Sign-In via Google](#sign-in-via-google)
  - [User Instructions](#user-instructions)
  - [Issues Encountered](#issues-encountered)
  - [Possible Improvements](#possible-improvements)
  - [Third Party Assets](#third-party-assets)

## Project Overview

In this project, I established a web calculator using **React** for front-end UI and **express.js**, **socket.io** for back-end server. The live demo can be accessed [here](https://web-calculator-xin.herokuapp.com) (make sure you include "https://" in the url). It logs calculations as they happen and shares those calculations with everyone connected to the app.

## Project Structure

There are two sides in this project: front-end and back-end side:

### Front-end

The Front-end side is mainly responsible for user interaction and basic calculation tasks; various components are defined here.

[(code repository)](https://github.com/shinchannn/web-calculator)

```
web-calculator
├─.gitignore
├─README.md
├─package-lock.json
├─package.json
├─src
|  ├─index.js
|  ├─components
|  |     ├─App.js
|  |     ├─GoogleAuth.js
|  |     ├─Header.js
|  |     ├─RecordableCalculator.js
|  |     ├─Records.js
|  |     ├─calculator
|  |     |     ├─Calculator.css
|  |     |     ├─Calculator.js
|  |     |     ├─Display.js
|  |     |     ├─buttons
|  |     |     |    ├─ClearButton.js
|  |     |     |    ├─EqualButton.js
|  |     |     |    ├─MiscButton.js
|  |     |     |    ├─NumberButton.js
|  |     |     |    ├─OperatorButton.js
|  |     |     |    ├─helper
|  |     |     |    |   └mappings.js

```

### Back-end

The Back-end side takes responsibility for calculations to all connected users by real-time broadcast.

[(code repository)](https://github.com/shinchannn/web-calculator-server)

```
web-calculator-server
├─.gitignore
├─README.md
├─index.js
├─package-lock.json
├─package.json
├─router.js
```

## Features

### Basic Calculator

The calculator is designed to look and behave the same as iPhone's built-in calculator, robust with irregular input sequences. Check out the fantastic [UI](https://codepen.io/sfrisk/pen/BymJer) by [Sarah Frisk](https://codepen.io/sfrisk).

[Math.js](mathjs.org) is used to help solve the precision problem.

#### Irregular Input Sequences

In most cases, users input regular calculator sequences that won't need extreme care. Despite that, the calculator is implemented with robustness to cover irregular inputs. Behaviors under thoes irregular patterns are designed to be the same as iPhone's built-in app. Edge inputs tested during development, along with explanations, are listed below:

| Sequence        | Explanation                                             |
| --------------- | ------------------------------------------------------- |
| 1 + 1 = 3       | After '3' entered, it should clear display and show '3' |
| 1 + 1 + 1       | After the second '1' entered, '2' should be displayed   |
| 7 \* 9 \* \* \* | Redundant '\*' should not invoke any calculation        |
| 3 + + - 6       | The last '-' entered determines calculation type        |
| 6 + 9 = .       | '0.' should be displayed, rather than '.' ''            |
| 9 \* 6.3 =      | Precision problem with javascript                       |

### Real-time sharing

Implemented with **socket.io**, this feature allows users to read all calculations done on this web application. At the same time, the user who requested the calculation, as well as the creation time of requests, are also available.

It utilizes the broadcast function provided by deployed [server code](https://github.com/shinchannn/web-calculator-server).

### Sign-In via Google

This web application allows users to sign in via [google oauth](https://developers.google.com/identity/protocols/oauth2). After signing in, calculations done by the users will be logged along with their google username.

## User Instructions

1.  Open two or more web browsers on different devices.
2.  Either sign in or calculate as a guest.
3.  Calculate and see records updated from all connected browsers.

## Issues Encountered

There are several issues that took me some time to evetually fix:

1. Google auth won't allow configuration of javaScript origins after the creation of the credential key. It's probably a bug on google's side. Click [here](https://stackoverflow.com/questions/42566296/google-api-authentication-not-valid-origin-for-the-client) for more information.
2. Sign-in function doesn't work properly when "https://" is missing.

## Possible Improvements

In this project, I see a great potential to get rid of deeply nested props and function calls by incorporating **Redux**. Since I'm new to react-redux interaction, it will take some time to learn it and carefully design redux store.

## Third Party Assets

[Calculator Style](https://codepen.io/sfrisk/pen/BymJer)

[Semantic UI](https://semantic-ui.com/)
