import React from 'react';
import Config from '../../config/projectInfo';
import classNames from 'classnames';
import {compose} from "redux";
import firebase from 'firebase/app';

import {withStyles} from "@material-ui/core/styles";

import {InputAdornment, Paper, TextField} from "@material-ui/core";

import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Footer from '../../components/Footer/Footer';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import CustomInput from '../../components/CustomInput/CustomInput';
import Parallax from "../../components/Parallax/Parallax";

import testPageStyle from '../../assets/jss/material-kit-react/views/testPage';

const dashboardRoutes = [];

class TestOld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    getTasks = async(test_num = 1) => {
        const db = firebase.firestore();
        const collection = db.collection('tasks');
        const query = collection
            .where('test_num', '==', test_num)
            .orderBy('id');
        const snapshot = await query.get();
        return snapshot.docs.map(doc => (doc.data()));
    };

    runQuery = async(test_num) => {
        const data = await this.getTasks(test_num);
        this.setState({tasks: data});
    };

    componentDidMount() {
        const id = Number(this.props.match.params.id);
        this.runQuery(id);
    }

    render() {
        const { classes, ...rest } = this.props;
        const id = Number(this.props.match.params.id);
        return (
            <div style={{background: '#37474f'}}>
                <Header
                    color='transparent'
                    routes={dashboardRoutes}
                    brand={Config.projectName}
                    rightLinks={<HeaderLinks authButton='login'/>}
                    fixed
                    changeColorOnScroll={{
                        height: 50,
                        color: 'white'
                    }}
                    {...rest}
                />
                <Parallax
                    className={classes.parallax}
                    xs
                >
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <h2 className={classes.title}>
                                    {`Вариант №${id}`}
                                </h2>
                                <h4>
                                    Вариант схожий с настоящим экзаменационным тестом. В поля ответов вписывать то, что требуется в задаче. При наличие ответов вписывать через ';'. На часть С принимаются только ответы (без решений) На решение теста отводится 3 часа 55 минут. Успепхов!
                                </h4>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classes.container}>
                    <div className={classNames(classes.main, classes.mainRaised)}>
                        <div className={classes.container}>
                            <GridContainer>
                                {this.state.tasks && this.state.tasks.map(job =>
                                    <GridItem xs={12} sm={12} md={12} className={classes.task}>
                                        <h3 className={classes.taskNum}>Задание {job.id}</h3>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={job.img ? 6 : 9}>
                                                <Paper className={classes.paper} elevation={1}>
                                                    <h5>{job.task}</h5>
                                                    {job.equ ? <img style={{margin:'10px 0', display: "block"}} src={job.equ} alt='Формула к задаче'/> : <br/>}
                                                    <TextField
                                                        style={{fontStyle: "normal"}}
                                                        label="Ответ..."
                                                        type='text'
                                                        id={`ans${job.id}`}
                                                        InputProps={{
                                                            // onChange: this.handleChange,
                                                        }}
                                                        margin="normal"
                                                        variant="filled"
                                                    />

                                                </Paper>
                                            </GridItem>
                                            {job.img ?
                                                <GridItem xs={12} sm={12} md={6} className={classes.imageBox}>
                                                    <img src={job.img} alt='Рисунок к задаче'/>
                                                </GridItem>
                                                :
                                                null
                                            }
                                        </GridContainer>
                                    </GridItem>
                                )}

                            </GridContainer>
                        </div>
                    </div>
                </div>
                <Footer whiteFont />
            </div>
        )
    }
}



export default compose(
    withStyles(testPageStyle)
)(TestOld)
