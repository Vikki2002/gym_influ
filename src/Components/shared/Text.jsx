import PropTypes from "prop-types";

const allowedVariants = ['h1', 'h2', 'h3', 'p', 'span', 'div', 'small'];

const Text = ({ children, variant = 'p', className = '' }) => {
  const Tag = allowedVariants.includes(variant) ? variant : 'p'; // Default to 'p' if invalid
  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
};


Text.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.string,
    className: PropTypes.string,
}

export default Text;
