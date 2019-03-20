import { Link } from "react-router-dom";
import { AccountCircle } from "@material-ui/icons";
import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import { signOut } from "../../store/actions/auth";

import Button from "components/CustomButtons/Button.jsx";
import Snackbar from 'material-ui/Snackbar/Snackbar';
import UserButton from '../../components/CustomButtons/UserBatton'
import withStyles from "material-ui/styles/withStyles";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

import ReactHtmlParser from 'react-html-parser';

var jdenticon = require("jdenticon");


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
        const { auth, signin, classes, signOut } = this.props;
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
                ) : ((signin) ? (
                    <Link to={"/register"}>
                        <Button
                            // target="_blank"
                            className={classes.registerNavLink}
                            color="secondary">
                            <AccountCircle className={classes.icons}/> Зарегистрироваться
                        </Button>
                    </Link>
                ) : (
                    <Link to={"/login"}>
                        <Button
                        // target="_blank"
                        className={classes.registerNavLink}
                        color="secondary">
                            <AccountCircle className={classes.icons}/>Войти
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