import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Form from '~/components/Form';
import Loader from '~/components/Loader';
import Table from '~/components/Table';
import Error from '~/components/Error';
import Button from '~/components/Button';
import DownloadButton from '~/components/DownloadButton';

import sendText from './apiservice';
import config from './config';

const mainColor = '#4F267D';
const maxChars = 20000;

const AppWrapper = styled.div`
  margin: 0 auto;
  color: ${mainColor};
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 760px;
`;

const AppInner = styled.div`
  flex-grow: 1;
`;

const Headline = styled.h1`
  padding: 3rem 0 0 0;
  margin: 0;
`;

const Paragraph = styled.p`
  line-height: 1.5;
  font-size: 1.1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const Footer = styled.footer`
  color: #b7b7b7;
  text-align: center;
  width: 100%;
  padding: 0.75rem 0;
  margin-top: 2rem;
  line-height: 1.4;
  font-size: 0.9rem;

  a {
    color: #b7b7b7;
  }

  a:visited {
    color: #b7b7b7;
  }
`;

const Counter = styled.div`
  color: #888;
`;

class App extends PureComponent {
  state = {
    error: null,
    data: [],
    isLoading: false,
    text: '',
    count: 0
  }

  onSubmit = async (evt) => {
    evt.preventDefault();

    if (!evt.target.text.value) {
      return false;
    }

    this.setState({ isLoading: true, data: [] });

    try {
      const data = await sendText({
        text: evt.target.text.value,
        lang: evt.target.language.value
      });

      // 👇
      setTimeout(() => this.setState({ error: false, isLoading: false, data }), 250);
    } catch (e) {
      console.log(e);
      this.setState({ error: true, isLoading: false });
    }
  }

  onType = (evt) => {
    const { value } = evt.target;
    if (value === '') {
      return false;
    }

    this.setState({
      text: value.slice(0, maxChars).replace(/\s+/g, ' '),
      count: value.length
    });
  }

  render() {
    return (
      <AppWrapper>
        <AppInner>
          <Headline><span role="img" aria-label="Face with monocle">🧐</span> Smart Word Counter</Headline>
          <Paragraph>
            This is a word counter for German and English texts.
          </Paragraph>

          <Form onSubmit={this.onSubmit} disabled>
            <label htmlFor="language">Select language</label>
            <select name="language">
              {config.languages.map(lang => <option key={lang.key} value={lang.key}>{lang.value}</option>)}
            </select>
            <label htmlFor="text">Insert text</label>
            <textarea
              name="text"
              onChange={this.onType}
              onKeyUp={this.onType}
              value={this.state.text}
            />
            <ButtonWrapper>
              <Counter>{this.state.count} / {maxChars} chars</Counter>
              <Button type="submit" bg={mainColor}>Count!</Button>
            </ButtonWrapper>
            <Loader color={mainColor} visible={this.state.isLoading} />
          </Form>
          <Error text={this.state.error} />
          <DownloadButton data={this.state.data} />
          <Table data={this.state.data} />
        </AppInner>
        <Footer>
          Made by <a href="https://webkid.io" target="_blank" rel="noopener noreferrer">webkid</a> | <a href="https://webkid.io/blog/simple-wordcounter" target="_blank" rel="noopener noreferrer">methodology</a><br />
          Do you need to process larger files or other features?<br />
          Don't hesitate to contact us <a href="mailto:info@webkid.io">info@webkid.io</a>.
        </Footer>
      </AppWrapper>
    );
  }
}

export default App;
