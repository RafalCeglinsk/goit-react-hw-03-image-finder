import { FidgetSpinner } from 'react-loader-spinner';

const Loader = ({ loading }) => {
  return (
    <div className="Loader">
      {loading && (
        <FidgetSpinner
          type="FidgetSpinner"
          color="#00BFFF"
          height={160}
          width={160}
        />
      )}
    </div>
  );
};

export default Loader;
