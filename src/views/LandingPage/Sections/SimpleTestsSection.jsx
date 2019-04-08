import React from "react"
import withStyles from "@material-ui/core/styles/withStyles"
import Button from "@material-ui/core/Button"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import simpleTestsStyle from "assets/jss/material-kit-react/views/landingPageSections/simpleTestsStyle"
import { Link } from "react-router-dom"

class SimpleTestsSection extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.section}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={9}>
                        <h2 className={classes.titleContent}>Варианты схожие с реальными</h2>
                        <h5 className={classes.description}>
                            В этом разделе вы можете ознакомиться с экзаменационными вариантами по
                            профильной математике, схожими с реальными. Так же можете пройти случайно
                            сгенерированный вариант теста.
                        </h5>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    {[...Array(18)].map((x, i) =>
                        <GridItem xs={12} sm={6} md={2} key={i+1} className={classes.gridItem}>
                            <Link to={`test/${i+1}`}>
                                <Button
                                    size="small"
                                    variant="outlined"
                                    color="primary"
                                    fullWidth={true}
                                >
                                    {i+1} Вариант
                                </Button>
                            </Link>
                        </GridItem>
                    )}
                </GridContainer>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                        <Button
                            size="large"
                            color="secondary"
                            variant="raised"
                            fullWidth={true}
                            className={classes.bigButton}>
                            Случайный вариант
                        </Button>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(simpleTestsStyle)(SimpleTestsSection)