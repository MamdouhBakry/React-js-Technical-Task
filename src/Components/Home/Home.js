import React from 'react';
// import { makeStyles, Theme, createStyles }
//     from '@material-ui/core/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import { FormHelperText } from '@mui/material';
import Singers from '../Singers/Singers';

// const useStyles = makeStyles((theme) =>
//     createStyles({
//         root: {
//             width: '100%',
//         },
//         button: {
//             marginTop: theme.spacing(1),
//             marginRight: theme.spacing(1),
//         },
//         actionsContainer: {
//             marginBottom: theme.spacing(2),
//         },
//         resetContainer: {
//             padding: theme.spacing(3),
//         },

//     }),
// );

function getSteps() {
    return [<b style={{ color: 'purple' }}>'Enter Personal Details'</b>,
    <b style={{ color: 'purple' }}>'Enter Education Details'</b>,
    <b style={{ color: 'purple' }}>'Enter Address'</b>];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return (
                // <FormControl>
                //     <Singers />
                //     <InputLabel htmlFor="my-input">Email address</InputLabel>
                //     <Input id="my-input" aria-describedby="my-helper-text" />
                //     <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                // </FormControl>
                <Singers />
            );
        case 1:
            return (
                <form class="form-group">
                    <label>High School Percentage</label>
                    <input type="number" placeholder="High School Percentage"></input>
                    <br></br>
                    <label>Graduation percentage</label>
                    <input type="number" placeholder="Graduation Percentage"></input>
                </form>
            );
        case 2:
            return (
                <form class="form-group">
                    <label>Permanent Address</label>
                    <input type="text" placeholder="Permanent Address"></input>
                    <br></br>
                    <label>Temporary Address</label>
                    <input type="text" placeholder="Temporary Address"></input>
                </form>
            );
        default:
            return 'Unknown step';
    }
}

export default function GeekStepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className="container">
            <h1>Song Selling</h1>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                            <div >
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        variant="contained"
                                        color="primary"
                                        sx={{ mr: 5 }}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        sx={{ ml: 5 }}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} >
                    <Typography>Form is submitted</Typography>
                    <Button onClick={handleReset} >
                        Reset
                    </Button>
                </Paper>
            )}
        </div>
    );
}
