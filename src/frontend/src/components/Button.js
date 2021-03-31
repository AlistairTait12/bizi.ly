import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

const MyButton = ({ color, text, onClick }) => {
  return (
    <Button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </Button>
  );
};

MyButton.defaultProps = {
  color: "steelblue",
};

MyButton.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default MyButton;
