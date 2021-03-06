import { Grid, Typography, makeStyles, Container } from "@material-ui/core";

import { useEffect } from "react";
import nsf from "./resources/nsf.png";

const useStyles = makeStyles({
    title: {
        margin: "1.5rem 0 1.5rem 0",
        fontWeight: "bold",
    },
    problemStatement: {
        fontStyle: "italic",
    },
    container: {
        width: "80%",
        marginRight: "10%",
        marginLeft: "10%",
    },
    information:{
        "@media (min-width: 600px)": {
            width: "90%",
        marginRight: "5%",
        marginLeft: "5%",
        },
        
    },
    subheader: {
        fontWeight: "bold",
    },
    sectionHeader: {
        fontWeight: "bold",
        display: "inline-flex",
        paddingLeft: ".5rem",
        verticalAlign: "top",
    },
    textBlock: {
        fontWeight: "normal",
        margin: "1rem 0 1rem 0",
    },
});
const coverImageStyle = {
    margin: "10px 5% 10px 5%",
    width: "90%",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "-2px 2px 4px 2px rgba(0,0,0,0.08)",
};


const lineStyle = {
    backgroundColor: "#E8E8E8",
    border: "none",
    display: "block",
    height: "2px",
    margin: "1.5rem ",
};

const ProjectDetail = (props) => {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const content = props.content;
    const blockStyle = {
        backgroundColor: content.color,
        height: "2rem",
        width: "2rem",
        borderRadius: "6px",
        display: "inline-flex",
    };

    return (
        <div>
            <img
                src={content.coverImage}
                alt="Cover"
                style={coverImageStyle}
            ></img>
            <div style={{ margin: "1rem 1.5rem 1rem 1.5rem" }}>
                <Typography
                    variant="h5"
                    component="h2"
                    align="center"
                    className={classes.problemStatement}
                >
                    {content.problemStatement}{" "}
                </Typography>
                <Typography
                    variant="h4"
                    component="h1"
                    className={classes.title}
                >
                    {content.title}
                </Typography>
                <Grid container spacing={2} className={classes.container}>
                    <Grid item xs={6} sm={6} md={3}>
                        <Typography className={classes.subheader}>
                            Role:
                        </Typography>
                        {content.roles.map((role) => (
                            <Typography>{role}</Typography>
                        ))}
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                        <Typography className={classes.subheader}>
                            Timeline:
                        </Typography>
                        {content.timeline.map((data) => (
                            <Typography>{data}</Typography>
                        ))}
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                        <Typography className={classes.subheader}>
                            Tools Used:
                        </Typography>
                        {content.tools.map((tool) => (
                            <Typography>{tool}</Typography>
                        ))}
                    </Grid>
                    <Grid item xs={6} sm={6} md={3}>
                        <Typography className={classes.subheader}>
                            Team Members:
                        </Typography>
                        {content.teamMembers.map((member) => (
                            <Typography>{member}</Typography>
                        ))}
                    </Grid>
                </Grid>
                {content.nsf && (
                    <div style={{verticalAlign:"middle", margin:"auto"}}>
                        <img src={nsf} alt="nsf logo" style={{maxWidth:"45px", display: "inline-flex", verticalAlign:"middle", margin:".5rem"}}/>
                        <Typography style={{display:"inline-flex"}}>
                            This project is funded by the National Science
                            Foundation grant #{content.nsf}.
                        </Typography>
                    </div>
                )}

                <hr style={lineStyle} />
                <Container className={classes.information}>
                <span style={{ verticalAlign: "top" }}>
                    <span style={blockStyle} />
                    <Typography
                        variant="h5"
                        component="h2"
                        className={classes.sectionHeader}
                    >
                        Problem Space
                    </Typography>
                </span>
                {content.problemSpace}
                <span style={{ verticalAlign: "top" }}>
                    <span style={blockStyle} />
                    <Typography
                        variant="h5"
                        component="h2"
                        className={classes.sectionHeader}
                    >
                        Proposed Solution
                    </Typography>
                </span>

                {content.solution}

                {content.details}
                </Container>
                
            </div>
        </div>
    );
};
export default ProjectDetail;
