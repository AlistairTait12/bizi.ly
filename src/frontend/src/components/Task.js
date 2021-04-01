import { FaTimes } from "react-icons/fa";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardSpacing: {
    margin: 10,
    padding: 10,
  },
  underline: {
    borderBottom: "1px solid lightgrey",
  },
});

const Task = ({ task, onDelete, onToggle }) => {
  const classes = useStyles();
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <Card className={classes.cardSpacing} variant="outlined">
        <Typography className={classes.underline} variant="h5">
          {task.name}{" "}
          <FaTimes
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => onDelete(task.id)}
          />
        </Typography>
        <Typography>{task.text}</Typography>
        <Typography>{task.day}</Typography>
      </Card>
    </div>
  );
};

export default Task;
