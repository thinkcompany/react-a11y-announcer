# React Announcer

Welcome to React Announcer from Think Company.

This is a React component that demonstrates how to dynamically add announcements to a web page, and ensure that they are accessible and announced properly by screen readers.

## Building and running the demo

We included a demo that shows you how the component will behave when added to a page. To run the demo:

* Clone this repo locally
* cd into the `demo` directory
* run `npm install`
* run `npm run start`

This will launch your browser, where the demo page will be displayed (at http://localhost:3000).

Press the "Trigger new announcement" button to add the announcement to the page.

## Browser Testing

React Announcer was tested and works as expected in the latest versions of:

* iOS VoiceOver w/ Safari
* macOS VoiceOver w/ Safari
* Android TalkBack w/ Chrome
* NVDA w/ Firefox
* JAWS w/ IE11

### How we Tested

**Desktop screen reader:**
* With screen reader turned on, navigate to URL (localhost:3000)
* Ensure virtual cursor position at top of page (In Windows NVDA/JAWS, press CTRL+Home)
* Arrow down until hearing "Trigger new announcement" button
* Press ENTER key
* You should hear, "Here's a new announcement!" through the screen reader when the text appears visually

Repeat steps but change ENTER key step to SPACE key, both should work.

**Mobile screen reader (VO, TalkBack):**
* With screen reader turned on, navigate to URL (localhost:3000)
* Quickly swipe right until "Trigger new announcement" button is in focus and announced to screen reader
* Double tap to activate button
* You should hear, "Here's a new announcement!" through screen reader when the text appears visually


## Contributing to React Announcer

To contribute to this project, please review and follow the [contributing guidelines](https://github.com/thinkcompany/react-a11y-announcer/blob/master/CONTRIBUTING.md).