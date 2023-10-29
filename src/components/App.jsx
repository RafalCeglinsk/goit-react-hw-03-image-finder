import React, { Component } from 'react';
import axios from 'axios';
import { SearchBar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: '',
    currentPage: 1,
    query: '',
  };

  async componentDidMount() {
    const apiKey = '39327877-cfcae8ebaa5cb1597dd56f6f0';

    try {
      this.setState({ isLoading: true, error: '' });
      const response = await axios.get(
        `https://pixabay.com/api/?q=cat&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
      );
      console.log(response);

      if (response.data.hits) {
        this.setState({ articles: response.data.hits, isLoading: false });
      } else {
        throw new Error('No data received from Pixabay API');
      }
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPage !== prevState.currentPage) {
      await this.getInitialData();
    }
  }

  getInitialData = async () => {
    const query = `https://pixabay.com/api/?${this.state.currentPage}`;

    try {
      this.setState({ isLoading: true, error: '' });
      const response = await fetch(query);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.setState({ articles: data, isLoading: false });
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  };
  handleSubmit = query => {
    this.setState({ query });
  };

  render() {
    const { articles, isLoading, error } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
