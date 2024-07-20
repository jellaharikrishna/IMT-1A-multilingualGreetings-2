import {Component} from 'react'

import Buttons from './components/Buttons'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
    activeImageUrl: languageGreetingsList[0].imageUrl,
    activeImageAltText: languageGreetingsList[0].imageAltText,
  }

  toggleGreeting = id => {
    const filterList = languageGreetingsList.filter(each => each.id === id)
    filterList.map(each =>
      this.setState({
        activeId: each.id,
        activeImageUrl: each.imageUrl,
        activeImageAltText: each.imageAltText,
      }),
    )
  }

  render() {
    const {activeId, activeImageUrl, activeImageAltText} = this.state

    return (
      <div className="main">
        <div className="body">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="buttons-container">
            {languageGreetingsList.map(each => (
              <Buttons
                key={each.id}
                data={each}
                toggleGreeting={this.toggleGreeting}
                isActiveBtn={each.id === activeId}
              />
            ))}
          </ul>
          <img
            className="image"
            src={activeImageUrl}
            alt={activeImageAltText}
          />
        </div>
      </div>
    )
  }
}

export default App
