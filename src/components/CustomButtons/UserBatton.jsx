import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { Manager, Target, Popper } from "react-popper";

import withStyles from "material-ui/styles/withStyles";
import MenuItem from "material-ui/Menu/MenuItem";
import MenuList from "material-ui/Menu/MenuList";
import ClickAwayListener from "material-ui/utils/ClickAwayListener";
import Paper from "material-ui/Paper";
import Grow from "material-ui/transitions/Grow";
import Divider from "material-ui/Divider";

import Button from "components/CustomButtons/Button.jsx";
import Avatar from 'material-ui/Avatar/Avatar';

import customDropdownStyle from "assets/jss/material-kit-react/components/customDropdownStyle.jsx";

class UserBatton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClick() {
        this.setState({ open: true });
    }
    handleClose() {
        this.setState({ open: false });
    }
    render() {
        const { open } = this.state;
        const {
            classes,
            dropdownList,
            buttonProps,
            dropup,
            dropdownHeader,
            caret,
            hoverColor,
            left,
            rtlActive,
            picChild
        } = this.props;
        const caretClasses = classNames({
            [classes.caret]: true,
            [classes.caretActive]: open,
            [classes.caretRTL]: rtlActive
        });
        const dropdownItem = classNames({
            [classes.dropdownItem]: true,
            [classes[hoverColor + "Hover"]]: true,
            [classes.dropdownItemRTL]: rtlActive
        });
        return (
            <Manager>
                <Target>
                    <Avatar
                        className={classes.userPic}
                        onClick={this.handleClick}
                    >
                        {picChild}
                    </Avatar>
                </Target>
                <Popper
                    placement={
                        dropup
                            ? left ? "top-end" : "top-start"
                            : left ? "bottom-end" : "bottom-start"
                    }
                    eventsEnabled={open}
                    className={classNames({
                        [classes.popperClose]: !open,
                        [classes.pooperResponsive]: true
                    })}>
                    <ClickAwayListener onClickAway={this.handleClose}>
                        <Grow
                            in={open}
                            id="menu-list"
                            style={
                                dropup
                                    ? { transformOrigin: "0 100% 0" }
                                    : { transformOrigin: "0 0 0" }
                            }
                        >
                            <Paper className={classes.dropdown}>
                                <MenuList role="menu" className={classes.menuList}>
                                    {dropdownHeader !== undefined ? (
                                        <MenuItem onClick={this.handleClose} className={classes.dropdownHeader}>
                                            {dropdownHeader}
                                        </MenuItem>
                                    ) : null}
                                    {dropdownList.map((prop, key) => {
                                        if (prop.divider) {
                                            return (
                                                <Divider
                                                    key={key}
                                                    onClick={this.handleClose}
                                                    className={classes.dropdownDividerItem}
                                                />
                                            );
                                        }
                                        return (
                                            <Link
                                                to={prop.url}
                                                key={key}
                                                onClick={prop.onClick}>
                                                <MenuItem
                                                    onClick={this.handleClose}
                                                    className={dropdownItem}>
                                                    {prop.name}
                                                </MenuItem>
                                            </Link>
                                        );
                                    })}
                                </MenuList>
                            </Paper>
                        </Grow>
                    </ClickAwayListener>
                </Popper>
            </Manager>
        );
    }
}

UserBatton.defaultProps = {
    caret: true,
    hoverColor: "primary"
};

UserBatton.propTypes = {
    classes: PropTypes.object.isRequired,
    hoverColor: PropTypes.oneOf(["primary", "black", "secondary"]),
    buttonText: PropTypes.node,
    buttonIcon: PropTypes.func,
    dropdownList: PropTypes.array,
    buttonProps: PropTypes.object,
    dropup: PropTypes.bool,
    dropdownHeader: PropTypes.node,
    rtlActive: PropTypes.bool,
    caret: PropTypes.bool,
    left: PropTypes.bool
};

export default withStyles(customDropdownStyle)(UserBatton);
