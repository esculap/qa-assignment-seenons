# Test Automation Framework

This repository contains a test automation framework for the [demo.seenons.com](url) website, built using Playwright and TypeScript.

## Installation

Clone the repository and run the following command to install the necessary dependencies:

```
npm install
```

## Usage

Run the tests using the following command:

```
npx playwright test
```

To run tests in browser visible mode with ability to do each step manually please use the next command:

```
npx playwright test --headed --debug --project=chromium
```

## Project Structure

The project structure is organized as follows:

- pages - contains the page object files that define the UI elements and interactions for each page.
- tests - contains the test files.
- utils - contains useful tools (e.g. generator of data for test users)
