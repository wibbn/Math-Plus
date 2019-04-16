import { container } from "assets/jss/material-kit-react.jsx"
import {section, titleContent} from "assets/jss/material-kit-react.jsx"


const testPageStyle = {
    parallax: {
        background: '#37474f',
        color: '#fff'
    },
    taskNum: {
        margin: '20px 0 20px 40px'
    },
    container: {
        ...container
    },
    main: {
        background: "#FFFFFF",
        paddingTop: "25px",
        margin: "-60px 30px 0px",
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        position: "relative",
        zIndex: "3"
    },
    task: {
        padding: '0 0 30px 0'
    },
    paper: {
        background: '#eceff1',
        color: '#666',
        fontStyle: 'italic',
        padding: '10px 20px 10px 20px'
    },
    imageBox: {
        "& img": {
            maxWidth: '100%',
            height: '100%',
            objectFit: 'scale-down',
            margin: '10px auto 10px auto',
            display: 'block'
        }
    },
};

export default testPageStyle;
