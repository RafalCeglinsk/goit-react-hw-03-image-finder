const ImageGalleryItem = ({ image }) => {
  const { webformatURL, tags } = image;

  return (
    <li className="gallery-item">
      <img src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
