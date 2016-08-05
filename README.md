# Protractor (E2E AngularJS Testing)

## Introduction
This repository demonstrates how Practractor can be used as an end-to-end
testing framework for AngularJS applications. The example tests written within
all point to the main AngularJS homepage which has a few example apps contained
upon the page.

## Installation
To install the demonstration, run the following:

```
npm install;
```

## Usage
There is some moderately difficult logic in play within the protractor config
file which searches for a Selenium `.jar` file to act as a browser and run the
tests through. With that in mind, all that really needs done to actually trigger
the tests is to run the following command and watch console output:

```
gulp;
```

## Results
You will see results printed to the terminal indicating whether or not tests
passed or failed. The exit code of the process (`echo $?`) should also
accurately reflect if the test suite passed or not (`0` for pass, any other
number for fail).

It's also worth noting that selenium will open a browser window to run the
tests within and that this is normal functionality. It should automatically
close upon completion.