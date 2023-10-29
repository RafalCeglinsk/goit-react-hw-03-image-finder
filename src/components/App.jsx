import React, { Component } from 'react';
import axios from 'axios';
import { SearchBar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/button';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: '',
    currentPage: 1,
    query: '',
  };

  async componentDidMount() {
    this.getImages();
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPage !== prevState.currentPage) {
      this.getImages();
    }
  }

  getImages = async () => {
    const apiKey = '39327877-cfcae8ebaa5cb1597dd56f6f0';
    const { query, currentPage } = this.state;
    const perPage = 12;

    try {
      this.setState({ isLoading: true, error: '' });
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`
      );

      if (response.data.hits) {
        this.setState({ images: response.data.hits, isLoading: false });
      } else {
        throw new Error('No data received from Pixabay API');
      }
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  };

  handleSubmit = query => {
    this.setState({ query, currentPage: 1 }, () => {
      this.getImages();
    });
  };
  handleLoadMore = () => {
    this.setState(
      prevState => ({ currentPage: prevState.currentPage + 1 }),
      () => {
        this.getImages();
      }
    );
  };

  render() {
    const { images, isLoading, error } = this.state;

    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        <Button onClick={this.handleLoadMore} />
      </div>
    );
  }
}

export default App;
