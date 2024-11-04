# Test Assignment (Frontend Developer) - Timer

## Description

Timer - is a React component that is a countdown timer that can be used in web applications. The component allows you to start, pause and reset the timer, as well as visually count down the time with a dynamic display of the remaining time in MM:SS format.

## Props

- **title**: `string` (required) - The title of the timer.
- **endTime**: `int` (required) - The time in seconds until the timer ends (maximum of 3599 seconds).
- **elapsedTime**: `int` (optional) - The initial elapsed time in seconds.

## Functionality

- The timer displays the remaining time in the format MM:SS.
- The timer supports a maximum duration of 59 minutes and 59 seconds. Passing a greater value for `endTime` will throw an exception.
- When the time is up, the background of the timer alternates between green and red with an indefinite linear animation.
- The reset button sets the timer back to 00:00, regardless of the `elapsedTime` prop.

## Demo

- [gh-pages](https://webdevgrisha.github.io/Timer/)
- [Storybook](https://www.chromatic.com/setup?appId=67293f755c888e5d71aeea98)

## Author

**Ryhor Roi**