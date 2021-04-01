import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import MyButton from "./Button";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <div className="header">
      <Typography variant="h1" component="h2" gutterBottom>
        {title}
      </Typography>
      {location.pathname === "/tasks" && (
        <MyButton
          color={showAdd ? "orange" : "lightblue"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black',
// }

export default Header;
