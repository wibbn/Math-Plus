import React from "react"
import withStyles from "material-ui/styles/withStyles"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button"
import pastYearsStyle from "assets/jss/material-kit-react/views/landingPageSections/pastYearsStyle"


class PastYearsSection extends React.Component {
    render() {
        const {classes} = this.props
        return (
            <div className={classes.section}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={9}>
                        <h2 className={classes.titleContent}>Тесты ЕГЭ прошлых лет</h2>
                        <h5 className={classes.description}>
                            Данный раздел предоставляет экзаменационные работы прошедших лет.
                            Здесь можно прорешать реальные варианты, узнать свой результат и
                            вычислить уровень своей подготовки.
                        </h5>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    <GridItem>
                        <div className={classes.yearsScroll}>
                            {[...Array(12)].map((x, i) =>
                                <Button
                                    key = {i}
                                    size="lg"
                                    simple
                                    color="primary">
                                    {2018-i}
                                </Button>
                            )}
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(pastYearsStyle)(PastYearsSection)