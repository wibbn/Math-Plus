import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// material-ui components
import withStyles from "material-ui/styles/withStyles";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";
import Tooltip from "material-ui/Tooltip";

// @material-ui/icons
import { Class, Inbox, AccountCircle, Work } from "@material-ui/icons";
// core components
import CustomDropdownLink from "components/CustomDropdown/CustomDropdownLink.jsx";
import Button from "components/CustomButtons/Button.jsx";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function LandingHeaderLinks({ ...props }) {
    const { classes } = props;
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
                        {'name': 'Log in', 'url': 'login-page'},
                        {'name': 'Ссылка 1', 'url': '#'},
                        {'name': 'Ссылка 2', 'url': '#'},
                        {'name': 'Ссылка 3', 'url': '#'},
                        {'name': 'Ссылка 4', 'url': '#'},
                    ]}
                />
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link to={"/landing"}>
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
                <Link to={"login-page"}>
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
                </Link>
            </ListItem>
        </List>
    );
}

export default withStyles(headerLinksStyle)(LandingHeaderLinks);
