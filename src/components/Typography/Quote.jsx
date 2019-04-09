import React from "react";
import PropTypes from "prop-types";

import {withStyles} from "@material-ui/core/styles";

import typographyStyle from "../../assets/jss/material-kit-react/components/typographyStyle";

function Quote({ ...props }) {
  const { classes, text, author } = props;
  return (
    <blockquote className={classes.defaultFontStyle + " " + classes.quote}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>{author}</small>
    </blockquote>
  );
}

Quote.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.node,
  author: PropTypes.node
};

export default withStyles(typographyStyle)(Quote);
