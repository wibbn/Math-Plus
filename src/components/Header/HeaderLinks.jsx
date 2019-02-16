import React from "react";

import { Link } from "react-router-dom";

import withStyles from "material-ui/styles/withStyles";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import Tooltip from "material-ui/Tooltip";

import { Class, Inbox, AccountCircle, Work } from "@material-ui/icons";

import CustomDropdownLink from "components/CustomDropdown/CustomDropdownLink.jsx";
import Button from "components/CustomButtons/Button.jsx";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
    const { classes, authButton } = props;
    const authBtns = {
        login:
            (<Link to={"login-page"}>
                <Tooltip title= "или создать аккаунт"
                         placement={window.innerWidth > 959 ? "top" : "left"}
                         classes={{ tooltip: classes.tooltip }}>
                    <Button
                        target="_blank"
                        className={classes.registerNavLink}
                        color="secondary">
                        <AccountCircle className={classes.icons} />Войти
                    </Button>
                </Tooltip>
            </Link>),
        register:
            (<Link to={"login-page"}>
                <Button
                    target="_blank"
                    className={classes.registerNavLink}
                    color="secondary">
                    <AccountCircle className={classes.icons} /> Зарегистрироваться
                </Button>
            </Link>)
    }
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <CustomDropdownLink
                    buttonText="Темы"
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    buttonIcon={Class}
                    hoverColor="secondary"
                    dropdownList={[
                        {'name': 'Ссылка 1', 'url': '#'},
                        {'name': 'Ссылка 2', 'url': '#'},
                        {'name': 'Ссылка 3', 'url': '#'},
                        {'name': 'Ссылка 4', 'url': '#'},
                    ]}
                />
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link to={"#"}>
                    <Button
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}>
                        <Inbox className={classes.icons} /> Варианты
                    </Button>
                </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link to={"#"}>
                    <Button
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}>
                        <Work className={classes.icons} /> Материалы
                    </Button>
                </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
                {authButton === "login" ? authBtns.login : authBtns.register}
            </ListItem>
        </List>
    );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
