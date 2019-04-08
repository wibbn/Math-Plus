import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { Manager, Target, Popper } from "react-popper";

import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";


class DropdownLink extends React.Component {
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
            buttonText,
            buttonIcon,
            dropdownList,
            buttonProps,
            dropUp,
            dropdownHeader,
            left
        } = this.props;

        return (
            <Manager>
                <Target>
                    <Button
                        aria-label="DropDownButton"
                        aria-haspopup="true"
                        {...buttonProps}
                        onClick={this.handleClick}>
                        {buttonIcon !== undefined ? <this.props.buttonIcon /> : null}
                        {buttonText !== undefined ? buttonText : ''}
                    </Button>
                </Target>
                <Popper
                    placement={
                        dropUp ?
                            left ?
                                "top-end"
                                :
                                "top-start"
                            :
                            left ?
                                "bottom-end"
                                :
                                "bottom-start"
                    }
                    eventsEnabled={open}
                >
                    <ClickAwayListener onClickAway={this.handleClose}>
                        <Grow
                            in={open}
                            id="menu-list"
                            style={{
                                transformOrigin: dropUp ? "0 100% 0" : "0 0 0"
                            }}
                        >
                            <Paper>
                                <MenuList role="menu">
                                    {dropdownHeader !== undefined ? (
                                        <MenuItem onClick={this.handleClose}>
                                            {dropdownHeader}
                                        </MenuItem>
                                    ) : null}
                                    {dropdownList.map((prop, key) => {
                                        if (prop.divider) {
                                            return (
                                                <Divider
                                                    key={key}
                                                    onClick={this.handleClose}
                                                />
                                            );
                                        }
                                        return (
                                            <Link to={prop.url} key={key} onClick={prop.onClick}>
                                                <MenuItem onClick={this.handleClose}>
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

DropdownLink.propTypes = {
    buttonText: PropTypes.node,
    buttonIcon: PropTypes.func,
    dropdownList: PropTypes.array,
    buttonProps: PropTypes.object,
    dropUp: PropTypes.bool,
    dropdownHeader: PropTypes.node,
    left: PropTypes.bool
};

export default DropdownLink;
