import React from "react"
import Config from '../../config/projectInfo';

import classNames from "classnames"

import Button from '@material-ui/core/Button'

import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";

import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import GridContainer from "../../components/Grid/GridContainer"
import GridItem from "../../components/Grid/GridItem"
import HeaderLinks from "../../components/Header/HeaderLinks"
import Parallax from "../../components/Parallax/Parallax"

import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage"
import {colorToPrimary} from "../../assets/jss/material-kit-react"

import SimpleTestsSection from "./Sections/SimpleTestsSection"
import PastYearsSection from "./Sections/PastYearsSection"
import ThemesSection from "./Sections/ThemesSection"

const dashboardRoutes = [];

class Landing extends React.Component {
    render() {
        const { classes, ...rest } = this.props;
        return (
            <div>
                <Header
                    color="transparent"
                    routes={dashboardRoutes}
                    brand={Config.projectName}
                    rightLinks={<HeaderLinks signIn={false}/>}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "white"
                    }}
                    {...rest}
                />
                <Parallax filter image={require("assets/img/blackboard.jpg")}>
                    <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>{Config.projectName}</h1>
                            <h4>
                                Здесь будет какая-нибудь инфа о моем проекте. Снизу прикреплен трейлер проекта. На этом сайте можно подготовиться к ЕГЭ и прорешать экзаменационные варианты
                            </h4>
                            <br />
                            <MuiThemeProvider theme={colorToPrimary('#e53935')}>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    size="large"
                                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                    >
                                    <i className="fas fa-play" style={{paddingRight: "10px"}}/>Смотреть тизер
                                </Button>
                            </MuiThemeProvider>
                        </GridItem>
                    </GridContainer>
                    </div>
                </Parallax>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <SimpleTestsSection/>
                        <PastYearsSection/>
                        <ThemesSection/>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withStyles(landingPageStyle)(Landing);
