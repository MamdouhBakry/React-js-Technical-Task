import React, { useState } from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";
import Singers from "../Singers/Singers";
import "./Stepper.css";
import Albums from "../Albums/Albums";
import Songs from "../Songs/Songs";

function getSteps() {
    return [
        "Select Singers",
        "Select Albums",
        "Select Songs",
        "Submit Request",
    ];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                <>
                    <Singers />
                </>
            );
        case 1:
            return (
                <>
                    <Albums />
                </>
            );



        case 2:
            return (
                <>
                    <Songs />
                </>
            );

        case 3:
            return (
                <>
                    <TextField
                        id="Name"
                        label="Name"
                        variant="outlined"
                        placeholder="Enter Your Name"
                        fullWidth
                        margin="normal"
                        name="name"
                    />
                    <TextField
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        placeholder="Enter Your E-mail Address"
                        fullWidth
                        margin="normal"
                        name="emailAddress"
                    />
                    <TextField
                        id="phone-number"
                        label="Phone Number"
                        variant="outlined"
                        placeholder="Enter Your Phone Number"
                        fullWidth
                        margin="normal"
                        name="phoneNumber"
                    />
                    {/* <TextField
                        id="alternate-phone"
                        label="Alternate Phone"
                        variant="outlined"
                        placeholder="Enter Your Alternate Phone"
                        fullWidth
                        margin="normal"
                        name="alternatePhone"
                    /> */}
                </>
            );
        default:
            return "unknown step";
    }
}

const LinaerStepper = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [skippedSteps, setSkippedSteps] = useState([]);
    const steps = getSteps();

    const isStepOptional = (step) => {
        return step === 1 || step === 2;
    };

    const isStepSkipped = (step) => {
        return skippedSteps.includes(step);
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);
        setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className="container mt-5">
            <Stepper alternativeLabel activeStep={activeStep}>
                {steps.map((step, index) => {
                    const labelProps = {};
                    const stepProps = {};
                    return (
                        <Step {...stepProps} key={index}>
                            <StepLabel {...labelProps}>{step}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>

            {
                activeStep === steps.length ? (
                    <React.Fragment>
                        <div className="btnGroup1">
                            <Typography className="text-center">
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Button onClick={handleReset}>Reset</Button>
                        </div>
                    </React.Fragment>
                ) : (
                    <>
                        <div className="container my-4">{getStepContent(activeStep)}</div>
                        <div className="btnGroup2">
                            <Button

                                disabled={activeStep === 0}
                                onClick={handleBack}
                            >
                                back
                            </Button>
                            <Button

                                variant="contained"
                                color="primary"
                                onClick={handleNext}
                            >
                                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                            </Button>
                        </div>
                    </>
                )}
        </div>
    );
};

export default LinaerStepper;
