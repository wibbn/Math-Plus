import React from "react"

import {withStyles} from "@material-ui/core/styles";

import {Button} from '@material-ui/core'

import GridContainer from "../../../components/Grid/GridContainer"
import GridItem from "../../../components/Grid/GridItem"
import pastYearsStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/pastYearsStyle"

class PastYearsSection extends React.Component {
    render() {
        const {classes} = this.props;
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
                                    size="large"
                                    color="primary"
                                >
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