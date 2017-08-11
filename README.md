# react-a11y-announcer

`react-a11y-announcer` is a React a11y component created by Think Company that helps ensure announcements are accessible and properly announced by screen readers. 

## Building and running the demo

We included an example that shows you how the component will behave when added to a page. To run the demo:

* Clone this repo locally
* cd into the `examples` directory
* run `npm install`
* run `npm run start`

This will start a server. Open a browser window and navigate to the localhost url displayed in the console output (usually [http://localhost:8080/](http://localhost:8080). 

Press the "Trigger new announcement" button to add the announcement to the page.

## Using the Announcer 

**Install from npm**

`npm install react-a11y-announcer --save`

**Import Announcer**

```javascript

import Announcer from 'react-a11y-announcer';

```

**Create a state to pass to the announcer's props**

```javascript
  this.state = {
    announcement: ''
  }
```

**Add the announcer to your template**

```html
  <div className="App">
    <Announcer text={this.state.announcement} />
    <div className="App-header">
      <h2>Basic Announcer Example</h2>
      <button type="button" onClick={this.handleClick}>Trigger new announcement</button>
    </div>
  </div>
```

**Update the state you passed to the text prop**

```javascript
  handleClick() {
    this.setState(prevState => ({
      announcement: 'Here\'s a new announcement!'
    }));
  }
```

Whenever a user with a screenreader clicks on that button, they should hear the announcement.

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
