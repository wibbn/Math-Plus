import React from "react";
import PropTypes from "prop-types";

import {withStyles} from "@material-ui/core/styles";
import {LinearProgress} from "@material-ui/core";

import customLinearProgressStyle from "../../assets/jss/material-kit-react/components/customLinearProgressStyle";

function CustomLinearProgress({ ...props }) {
  const { classes, color, ...rest } = props;
  return (
    <LinearProgress
      {...rest}
      classes={{
        root: classes.root + " " + classes[color + "Background"],
        bar: classes.bar + " " + classes[color]
      }}
    />
  );
}

CustomLinearProgress.defaultProps = {
  color: "gray"
};

CustomLinearProgress.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ])
};

export default withStyles(customLinearProgressStyle)(CustomLinearProgress);
