import React from "react";
import withStyles from "material-ui/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import RadianStatus from "components/RadianStatus/RadianStatus";
import HiddenBlock from "components/HiddenBlock/HiddenBlock";
import themesStyle from "assets/jss/material-kit-react/views/landingPageSections/themesStyle";
import themes from "../../data/themes";
import classNames from "classnames";


class ThemesSection extends React.Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.section}>
                <HiddenBlock zipSize={500} fullSize={2000}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={9}>
                            <h2 className={classes.titleContent}>Подготовка по темам</h2>
                            <h5 className={classes.description}>
                                Вы можете выбрать тему по которой хотите подготовиться,
                                узнать уровень ее сложности и процент решаемых на экзамене задач.
                                Вот такой вот раздел получился.
                            </h5>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem>
                            <GridContainer className={classNames(classes.tableRow)}>
                                <GridItem xs={12} sm={6} md={6}><h5 className={classes.numberName}> Задание </h5></GridItem>
                                <GridItem xs={4} sm={2} md={2} className={classes.flexCell}> Баллы </GridItem>
                                <GridItem xs={4} sm={2} md={2} className={classes.flexCell}> Сложность </GridItem>
                                <GridItem xs={4} sm={2} md={2} className={classes.flexCell}> Решили </GridItem>
                            </GridContainer>
                        </GridItem>
                        { themes.map((theme, i) =>
                        <GridItem key={i} md={12}>
                            <GridContainer className={classNames(classes.tableRow, classes.geg)}>
                                <GridItem xs={12} sm={6} md={6}>
                                    <h5 className={classes.numberName}>{i+1 + ". " + theme.name}</h5>
                                </GridItem>
                                <GridItem xs={4} sm={2} md={2} className={classes.flexCell}>
                                    {theme.mark + " б"}
                                </GridItem>
                                <GridItem xs={4} sm={2} md={2} className={classes.flexCell}>
                                    <div className={classNames(classes["level" + theme.level], classes.level)}>
                                        {theme.level}
                                    </div>
                                </GridItem>
                                <GridItem xs={4} sm={2} md={2} className={classes.flexCell}>
                                    <RadianStatus num= {theme.succ} />
                                </GridItem>
                            </GridContainer>
                        </GridItem>
                        )}
                    </GridContainer>
                </HiddenBlock>
            </div>
        )
    }
}

export default withStyles(themesStyle)(ThemesSection)