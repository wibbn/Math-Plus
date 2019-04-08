import React from "react";
import { Link } from "react-router-dom";

import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";

import { ClassOutlined, InboxOutlined, WorkOutline } from "@material-ui/icons";

import DropdownLink from "components/CustomDropdown/Dropdown.jsx";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

import AuthBtn from './AuthButtons';

function HeaderLinks({ ...props }) {
    const { classes, signIn } = props;

    return (
        
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <DropdownLink
                    buttonText="Темы"
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    buttonIcon={ClassOutlined}
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
                        className={classes.navLink}>
                        <InboxOutlined className={classes.icons} /> Варианты
                    </Button>
                </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link to={"#"}>
                    <Button
                        className={classes.navLink}>
                        <WorkOutline className={classes.icons} /> Материалы
                    </Button>
                </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
                <AuthBtn signIn = {signIn} />
            </ListItem>
        </List>
    );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
