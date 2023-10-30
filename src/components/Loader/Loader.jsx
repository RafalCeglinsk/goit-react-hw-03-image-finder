import { FidgetSpinner } from 'react-loader-spinner';

const CustomLoader = ({ loading }) => {
  return (
    <div className="loader">
      {loading && (
        <FidgetSpinner
          type="FidgetSpinner"
          color="#00BFFF"
          height={80}
          width={80}
        />
      )}
    </div>
  );
};

export default CustomLoader;
