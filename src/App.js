import React, { Component } from 'react';
import Timeline from './components/Timeline';
import './App.css';

class App extends Component {

  state = {
    timelineData: [
      {
        text: 'Wrote my first blog post ever on Medium',
        date: 'March 03 2017',
        category: {
            tag: 'medium',
            color: '#018f69'
        },
        link: {
            url:
                'kotharidigital.com',
            text: 'Read more'
        }
      },
      {
        text: 'This is the second timeline item',
        date: 'September 22 2017',
        category: {
            tag: 'tag-two',
            color: '#018f69'
        },
        link: {
            url:
                'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
            text: 'Read more'
        }
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Timeline data={this.state.timelineData} />
      </div>
    );
  }
}

export default App;
