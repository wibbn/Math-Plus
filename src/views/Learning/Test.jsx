import React from 'react';
import Config from '../../config/projectInfo';
import classNames from 'classnames';

import withStyles from 'material-ui/styles/withStyles';

import Header from 'components/Header/Header.jsx';
import HeaderLinks from 'components/Header/HeaderLinks.jsx';
import Footer from 'components/Footer/Footer.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import GridItem from 'components/Grid/GridItem.jsx';
import CustomInput from 'components/CustomInput/CustomInput.jsx';

import testPageStyle from 'assets/jss/material-kit-react/views/testPage.jsx';
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import firebase from 'firebase/app';

const dashboardRoutes = [];

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    renderTasks = async() => {
        const id = Number(this.props.match.params.id);
        let ts = [];
        firebase.firestore().collection('tasks').where('test_num', '==', id).orderBy('id').get().then(function(querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // console.log(doc.data().task);
                    ts.push(doc.data().task);
                })
        });

        this.setState({tasks: ts})
    };

    componentDidMount() {
        this.renderTasks();
    }

    render() {
        const { classes, ...rest } = this.props;
        const id = Number(this.props.match.params.id);
        const tasks = this.state.tasks;
        // console.log(id);
        return (
            <div>
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
                <div
                className={classes.pageHeader}
                style={{
                    backgroundColor: '#bbb',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center'
                }}>
                    <div className={classes.cont}>
                        <div className={classNames(classes.main, classes.mainRaised)}>
                            <div className={classes.container}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={12}>
                                        <h2 className={classes.titleContent}>{`Вариант №${id}`}</h2>
                                        <h5 className={classes.description}>
                                            Вариант схожий с настоящим экзаменационным тестом. В поля ответов вписывать то, что требуется в задаче. При наличие ответов вписывать через ';'. На часть С принимаются только ответы (без решений) На решение теста отводится 3 часа 55 минут. Успепхов!
                                        </h5>
                                    </GridItem>
                                    {console.log('this.state.tasks = ', this.state.tasks)}
                                    {console.log('this.state.tasks[0] = ', this.state.tasks[0])}
                                    {this.state.tasks.forEach(function (x) {
                                        console.log(x);
                                    })}
                                    {/*{this.state.tasks.map(x => console.log(x))}*/}
                                    {/*this.state.tasks && */this.state.tasks.map(  x =>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <div className={classes.task}>
                                                <h3 className={classes.taskNum}>Задание {x.id+1} <h5 className={classes.taskName}>{x.name}</h5></h3>
                                                <h5 className={classes.description}>{x.task}</h5>
                                                <div className={classes.inputForm}>
                                                    <CustomInput

                                                        labelText='Ответ...'
                                                        id={'ans'+x.id}
                                                        formControlProps={{
                                                            fullWidth: true
                                                        }}
                                                        inputProps={{
                                                            type: 'text',
                                                        }}
                                                    />
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

const mapStateToProps = (state) => {
    return {
        themes: state.firestore.ordered.themes,
        tasks: state.firestore.ordered.themes
    }
};

export default compose(
    withStyles(testPageStyle)
    // connect(mapStateToProps),
    // firestoreConnect([
    //     {
    //         collection: 'themes',
    //         orderBy: 'id'
    //     }, {
    //         collection: 'tasks',
    //         where: ['test_num', '==',  this.props.match.params.id],
    //         orderBy: 'id'
    //     }
    //     ])
)(Test)
