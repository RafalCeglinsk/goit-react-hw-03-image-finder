import Modal from 'components/Modal/Modal';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  openModal = () => {
    this.setState({
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { image } = this.props;
    const { webformatURL, tags } = image;
    const { showModal } = this.state;

    return (
      <li className="ImageGalleryItem">
        <img src={webformatURL} alt={tags} onClick={this.openModal} />
        {showModal && (
          <Modal
            isOpen={showModal}
            imageUrl={webformatURL}
            alt={tags}
            onClose={this.closeModal}
          />
        )}
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGalleryItem;
