import { Link } from "react-router-dom";
import { AccountCircle } from "@material-ui/icons";
import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import { signOut } from "../../store/actions/auth";

import Button from "components/CustomButtons/Button.jsx";
import UserButton from '../../components/CustomButtons/UserBatton'
import withStyles from "material-ui/styles/withStyles";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import ReactHtmlParser from 'react-html-parser';

var jdenticon = require("jdenticon");


const authBth = (props) => {
    const { auth, signin, classes, signOut } = props;

    if (auth.uid) {
        const userPic = jdenticon.toSvg(auth.uid, 40);
        return (
            <UserButton
            hoverColor="secondary"
            picChild = {ReactHtmlParser(userPic)}
            dropdownList={[
                {'name': 'Выйти', 'url': '#', 'onClick': signOut}
            ]}
            />
        )
    }

    else if (signin) {
        return (
            <Link to={"/register"}>
                <Button
                    // target="_blank"
                    className={classes.registerNavLink}
                    color="secondary">
                    <AccountCircle className={classes.icons}/> Зарегистрироваться
                </Button>
            </Link>
        )
    }
    else {
        return (
            <Link to={"/login"}>
                <Button
                    // target="_blank"
                    className={classes.registerNavLink}
                    color="secondary">
                    <AccountCircle className={classes.icons} />Войти
                </Button>
            </Link>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
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
)(authBth)