import { container } from "assets/jss/material-kit-react.jsx"
import {section, titleContent} from "assets/jss/material-kit-react.jsx"


const testPageStyle = {
    inputForm: {
        display: "inline-block",
        width: "250px",
        margin: "0 40px"
    },
    task: {
        margin: "20px 0"
    },
    taskNum: {
        marginLeft: "40px",
        fontSize: "1.4em",
        display: "inline-block",
        color: "#777"
    },
    taskName : {
        fontSize: "0.9rem",
        display: "inline-block",
        color: "#999",

    },
    titleContent: {
        marginLeft: "30px",
        textAlign: "left",
        ...titleContent
    },
    section: {
        ...section
    },
    description: {
        color: "#999"
    },
    cont: {
        ...container,
        zIndex: "2",
        position: "relative",
        paddingTop: "20vh",
        color: "#FFFFFF"
    },
    container: {
        zIndex: "1",
        color: "#FFFFFF",
        ...container
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3"
    },
    mainRaised: {
        paddingTop: "25px",
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow:
            "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    cardHidden: {
        opacity: "0",
        transform: "translate3d(0, -80px, 0)"
    },
    pageHeader: {
        minHeight: "100vh",
        height: "auto",
        display: "inherit",
        position: "relative",
        margin: "0",
        padding: "0",
        border: "0",
        alignItems: "center",
        "&:before": {
            background: "rgba(0, 0, 0, 0.5)"
        },
    "&:before,&:after": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: '""'
    }
    },
    form: {
        margin: "0"
    },
    divider: {
        marginTop: "30px",
        marginBottom: "0px",
        textAlign: "center",
        fontWeight: "300",
        color: "#999"
    },
    socialLine: {
        marginTop: "1rem",
        textAlign: "center",
        padding: "0",
    },
    inputIconsColor: {
        color: "#495057",
    }
};

export default testPageStyle;
