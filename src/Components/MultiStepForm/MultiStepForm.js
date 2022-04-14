import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import { makeStyles } from '@mui/styles';
import Singers from "../Singers/Singers";
import SubmitForm from '../SubmitFrom/SubmitForm';

const useStyles = makeStyles({
    root: {
        width: "100%",
        padding: "15px",
        border: "1px solid #999"
    }
})
function MultiStepForm() {
    // React hooks
    const [activeStep, setActiveStep] = React.useState(0);


    function getSteps() {
        return ['SELECT SINGER', 'SELECT ALBUM', 'SELECT SONG', 'SUBMIT REQUEST'];
    }

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1)
    }
    const steps = getSteps();


    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <>
                        <Singers />
                    </>
                );
            case 1:
                return "Step Tow 'Choose PLAN'";
            case 2:
                return "Step Three 'Checkout'";
            case 3:
                return (
                    <>
                        <SubmitForm />
                    </>
                );
            default:
                return "Unknown Step";
        }
    }
    const classes = useStyles();
    return (
        <>
            <Stepper className={classes.root} activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))
                }
            </Stepper>
            {activeStep === steps.length ? "The Steps Completed" : (
                <>
                    {getStepContent(activeStep)}
                    <br></br>
                    <Button onClick={handleNext}>
                        {activeStep === steps.length ? "Finish" : "Next"}
                    </Button>
                </>
            )}
        </>
    )
}

export default MultiStepForm