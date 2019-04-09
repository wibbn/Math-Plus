import React from "react";
import { Link } from "react-router-dom";

import {withStyles} from "@material-ui/core/styles";

import { List, Button, ListItem } from "@material-ui/core";

import { ClassOutlined, InboxOutlined, WorkOutline } from "@material-ui/icons";

import DropdownLink from "../CustomDropdown/Dropdown";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle";

import AuthBtn from "./AuthButtons";

function HeaderLinks({ ...props }) {
    const { classes, signIn } = props;

    return (
        
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <DropdownLink
                    buttonText="Темы"
                    buttonProps={{
                        className: classes.navLink
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
