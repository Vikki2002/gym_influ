import PropTypes from "prop-types";

const Image = ({ src, alt, className = '', style, onClick }) => {
  return (
    <img src={src} alt={alt} className={className} style={style} onClick={onClick} />
  );
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object
}

export default Image;
