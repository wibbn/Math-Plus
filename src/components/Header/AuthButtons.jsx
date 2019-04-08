import { Link } from "react-router-dom";
import { AccountCircleOutlined } from "@material-ui/icons";
import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import { signOut } from "../../store/actions/auth";

import Button from "@material-ui/core/Button";
import Snackbar from '@material-ui/core/Snackbar';
import UserButton from '../../components/CustomButtons/UserBatton'
import withStyles from "@material-ui/core/styles/withStyles";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

import ReactHtmlParser from 'react-html-parser';

let jdenticon = require("jdenticon");


class AuthBtn extends React.Component {

    state = {
        open: false,
        vertical: 'bottom',
        horizontal: 'left'
    };

    handleClick = () => {
        setTimeout(() => this.setState({ open: true }), 1200);
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { auth, signIn, classes, signOut } = this.props;
        const { open, vertical, horizontal } = this.state;

        const userOnClick = () => {
            signOut();
            this.handleClick();
        };

        const userPic = jdenticon.toSvg(auth.uid, 40);

        return (
            <div>
                { (auth.uid) ? (
                    <UserButton
                    hoverColor="secondary"
                    picChild={ReactHtmlParser(userPic)}
                    dropdownList={[
                        {'name': 'Выйти', 'url': '#', 'onClick': userOnClick}
                    ]}
                    />
                ) : ((signIn) ? (
                    <Link to={"/register"}>
                        <Button
                            className={classes.registerNavLink}
                            color="secondary"
                            variant="raised"
                        >
                            <AccountCircleOutlined className={classes.icons}/> Зарегистрироваться
                        </Button>
                    </Link>
                ) : (
                    <Link to={"/login"}>
                        <Button
                        className={classes.registerNavLink}
                        color="secondary"
                        variant="raised"
                        >
                            <AccountCircleOutlined className={classes.icons}/>Войти
                        </Button>
                    </Link>
                ))}
                <Snackbar
                anchorOrigin={{vertical, horizontal}}
                open={open}
                onClose={this.handleClose}
                ContentProps={{ 'aria-describedby': 'message-id' }}
                message={<span id="message-id">Вы выбрали красную таблетку</span>}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => {
            dispatch(signOut());
        }
    }
};
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(headerLinksStyle)
)(AuthBtn)