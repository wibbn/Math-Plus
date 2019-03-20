import React from "react";
import { Link } from "react-router-dom";

import withStyles from "material-ui/styles/withStyles";
import List from "material-ui/List";
import ListItem from "material-ui/List/ListItem";

import { Class, Inbox, Work } from "@material-ui/icons";
import CustomDropdownLink from "components/CustomDropdown/CustomDropdownLink.jsx";
import Button from "components/CustomButtons/Button.jsx";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

import AuthBtn from './AuthButtons';

function HeaderLinks({ ...props }) {
    const { classes, signin } = props;

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
                <AuthBtn signin = {signin} />
            </ListItem>
        </List>
    );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
