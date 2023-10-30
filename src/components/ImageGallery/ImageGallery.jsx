import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import Modal from 'components/Modal/Modal';

class ImageGallery extends Component {
  state = {
    showModal: false,
    selectedImage: null,
  };

  openModal = image => {
    this.setState({
      showModal: true,
      selectedImage: image,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      selectedImage: null,
    });
  };

  render() {
    const { images } = this.props;
    console.log(images);
    const { showModal, selectedImage } = this.state;

    return (
      <div>
        <ul className="ImageGallery">
          {images.map((image, index) => (
            <ImageGalleryItem
              key={index}
              image={image}
              onImageClick={this.openModal}
            />
          ))}
        </ul>
        {showModal && (
          <Modal
            isOpen={showModal}
            imageUrl={selectedImage.url}
            alt={selectedImage.alt}
            onClose={this.closeModal}
          />
        )}
      </div>
    );
  }
}

export default ImageGallery;
