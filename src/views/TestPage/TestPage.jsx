import React from "react"
import Config from "config"
import classNames from "classnames"

import themes from "../data/themes"
import tests from "../data/tests"

import withStyles from "material-ui/styles/withStyles"
import InputAdornment from "material-ui/Input/InputAdornment"
import { Link } from "react-router-dom"

import Header from "components/Header/Header.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import IconButton from "components/CustomButtons/IconButton.jsx"
import CustomInput from "components/CustomInput/CustomInput.jsx"

import testPageStyle from "assets/jss/material-kit-react/views/testPage.jsx"

import imageLg from "assets/img/classLg.jpg"

const math = window.matchMedia('(min-width: 3800px)').matches;

const dashboardRoutes = []

class TestPage extends React.Component {
    constructor(props) {
        super(props)
        // we use this to make the card to appear after the page has been rendered
        this.state = {
            cardAnimaton: "cardHidden"
        };
    }
    componentDidMount() {
        // we add a hidden class to the card and after 700 ms we delete it and the transition appears
        setTimeout(
            function() {
                this.setState({ cardAnimaton: "" })
            }.bind(this),
            700
        )
    }
    render() {
        const { classes, ...rest } = this.props
        return (
            <div>
                <Header
                    color="transparent"
                    routes={dashboardRoutes}
                    brand={Config.projectName}
                    rightLinks={<HeaderLinks authButton="login"/>}
                    fixed
                    changeColorOnScroll={{
                        height: 50,
                        color: "white"
                    }}
                    {...rest}
                />
                <div
                    className={classes.pageHeader}
                    style={{
                        backgroundColor: "#bbb",
                        backgroundSize: "cover",
                        backgroundPosition: "top center"
                    }}
                >
                    <div className={classes.cont}>
                        <div className={classNames(classes.main, classes.mainRaised)}>
                            <div className={classes.container}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <h2 className={classes.titleContent}>Вариант №1</h2>
                                        <h5 className={classes.description}>
                                            Вариант схожий с настоящим экзаменационным тестом. В поля ответов вписывать то, что требуется в задаче. При наличие ответов вписывать через ";". На часть С принимаются только ответы (без решений) На решение теста отводится 3 часа 55 минут. Успепхов!
                                        </h5>
                                    </GridItem>
                                    {[...Array(17)].map((x, i) =>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <div className={classes.task}>
                                                <h3 className={classes.taskNum}>Задание {i+1} <h5 className={classes.taskName}>{themes[i].name}</h5></h3>
                                                <h5 className={classes.description}>{tests[0][i].task}</h5>
                                                <div className={classes.inputForm}>
                                                    <CustomInput

                                                        labelText="Ответ..."
                                                        id={"ans"+i}
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            type: "text",
                                                        }}
                                                    />
                                                    {}
                                                </div>
                                            </div>
                                        </GridItem>
                                    )}
                                </GridContainer>
                            </div>
                        </div>
                    </div>
                    <Footer whiteFont />
                </div>
            </div>
        )
    }
}

export default withStyles(testPageStyle)(TestPage)
