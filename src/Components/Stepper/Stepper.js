import React, { useState } from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Singers from "../Singers/Singers";
import "./Stepper.css";
import Albums from "../Albums/Albums";
import Songs from "../Songs/Songs";
import SubmitForm from "../SubmitFrom/SubmitForm";
import OrderDetails from "../OrderDetails/OrderDetails";
import { clearStepper } from "../../Store/Actions/singers";
import { connect } from "react-redux";
function getSteps() {
    return [
        "Select Singers",
        "Select Albums",
        "Select Songs",
        "Submit Request",
    ];
}

function getStepContent(step, handleNext, steps, handleBack) {
    switch (step) {
        case 0:
            return (
                <>
                    <Singers
                        handleNext={handleNext}
                        steps={steps}
                        activeStep={step}
                        handleBack={handleBack}
                    />
                </>
            );
        case 1:
            return (
                <>
                    <Albums
                        handleNext={handleNext}
                        steps={steps}
                        activeStep={step}
                        handleBack={handleBack}
                    />
                </>
            );



        case 2:
            return (
                <>
                    <Songs
                        handleNext={handleNext}
                        steps={steps}
                        activeStep={step}
                        handleBack={handleBack}
                    />
                </>
            );

        case 3:
            return (
                <SubmitForm
                    handleNext={handleNext}
                    steps={steps}
                    activeStep={step}
                    handleBack={handleBack}
                />
            );
        default:
            return "unknown step";
    }
}

const LinaerStepper = (props) => {
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
        props.clearStepper();
    };
    const logFunc = () => {
        console.log("hello from log function");
    }

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
                        <div className="btnGroup1 text-center">
                            <Typography> All steps completed Click the Button to Show Your Order Details</Typography>
                            <div className="py-4">
                                <OrderDetails activeStep={activeStep} handleBack={handleBack} handleReset={handleReset} />
                            </div>
                            {/* <Button onClick={handleReset}>Reset</Button> */}
                        </div>
                    </React.Fragment>
                ) : (
                    <>
                        <div className="container my-4">{
                            getStepContent(activeStep, handleNext, steps, handleBack)
                        }</div>

                    </>
                )}
        </div>
    );
};


export default connect((state) => {
    return {
        singerList: state.singerList.singers
    }
}, { clearStepper })(LinaerStepper)
