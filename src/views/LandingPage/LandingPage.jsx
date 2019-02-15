import React from "react"
import Config from "config.js"

import classNames from "classnames"

import withStyles from "material-ui/styles/withStyles"

import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx"
import "./LandingPage.css"

import SimpleTestsSection from "./Sections/SimpleTestsSection"
import PastYearsSection from "./Sections/PastYearsSection"
import ThemesSection from "./Sections/ThemesSection"

const dashboardRoutes = []

class LandingPage extends React.Component {
    render() {
        const { classes, ...rest } = this.props;
        return (
            <div>
                <Header
                    color="transparent"
                    routes={dashboardRoutes}
                    brand={Config.projectName}
                    rightLinks={<HeaderLinks authButton="login"/>}
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
                            <Button
                                color="danger"
                                size="lg"
                                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i className="fas fa-play"/>Смотреть тизер
                            </Button>
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

export default withStyles(landingPageStyle)(LandingPage);
