import React, { Component } from 'react'
import { colors, MainContainer, QuoteContainer, QuoteText, QuoteAuthor, QuoteButtons, QuoteButton, NewQuoteButton } from '../styles/Styles.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faTumblr } from '@fortawesome/free-brands-svg-icons'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

export default class Quote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            quotes: undefined,
            quote: {},
            color: undefined
        }
    }

    componentDidMount() {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(respQuotes => respQuotes.json())
            .then(respQuotes => {
                this.setState({ quotes: respQuotes.quotes, loading: false })
                this.changeQuote()
            })
    }

    handleClickQuote = () => {
        this.changeQuote()
    }

    changeQuote = () => {
        const randomQuote = (Math.floor(Math.random() * this.state.quotes.length))

        this.setState({
            quote: this.state.quotes[randomQuote],
            color: colors[Math.floor(Math.random() * colors.length)]
        })
    }

    render() {
        if (this.state.loading === true && !this.state.quotes) {
            return (
                <h1>Cargando...</h1>
            )
        }

        var stylebg = { backgroundColor: this.state.color };
        var style = { color: this.state.color };

        return (
            <MainContainer style={stylebg}>
                <QuoteContainer id="quote-box">
                    <QuoteText id="text" style={style}>
                        <FontAwesomeIcon icon={faQuoteLeft} /> {this.state.quote.quote}
                    </QuoteText>
                    <QuoteAuthor id="author" style={style}>
                        - {this.state.quote.author}
                    </QuoteAuthor>
                    <QuoteButtons>
                        <QuoteButton id="tweet-quote" style={stylebg} href={`http://twitter.com/intent/tweet?hashtags=${this.state.quote.quote} ${this.state.quote.author}`} target="_blank"><FontAwesomeIcon icon={faTwitter} /> </QuoteButton>
                        <QuoteButton style={stylebg} href={`https://www.tumblr.com/login?redirect_to=${this.state.quote.quote} ${this.state.quote.author}`} target="_blank"><FontAwesomeIcon icon={faTumblr} /></QuoteButton>
                        <NewQuoteButton id="new-quote" style={stylebg} onClick={this.handleClickQuote}>New quote</NewQuoteButton>
                    </QuoteButtons>
                </QuoteContainer>
            </MainContainer>
        )
    }
}

