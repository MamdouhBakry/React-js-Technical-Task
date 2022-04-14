import React from 'react';
import { Button, Typography, Grid, Checkbox, TextField, OutlinedInput, FormControl, InputLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import useForm from './useForm';


const useStyles = makeStyles({
    mainContent: {
        display: "grid",
        justifyContent: "center",
        position: "relative",
        zIndex: 5
    },
    formContainer: {
        position: "relative",
        width: "28.125rem",
        height: "auto",
        padding: "2rem",
        border: "1px solid #999",
        borderRadius: "5px",
        marginTop: "1rem"
    }
})
function SubmitForm(props) {
    const classes = useStyles();

    // Define the state schema
    const stateSchema = {
        name: { value: "", error: "" },
        emailAddress: { value: "", error: "" },
        phoneNumber: { value: "", error: "" },
    }
    // Define stateValidatorSchema
    const stateValidatorSchema = {
        name: {
            required: true,
            validator: {
                func: value => /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/.test(value),
                error: "First Name must be more than 1 character"
            }
        },
        emailAddress: {
            required: true,
            validator: {
                func: value => /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(value),
                error: "Invalid Email Format"
            }
        },
        phoneNumber: {
            required: true,
            validator: {
                func: value => /^01[0125][0-9]{8}$/gm.test(value),
                error: "Please Enter Wirght Number"
            }
        }
    }
    const { values, errors, dirty, handleOnChange } = useForm(stateSchema, stateValidatorSchema);
    const { name, emailAddress, phoneNumber } = values;
    return (
        <div className={classes.mainContent}>
            <Typography variant="h5" style={{ color: "#999", textAlign: "center", marginTop: "10px" }}>
                Submit Request
            </Typography>
            <div className={classes.formContainer}>
                <form>

                    <TextField
                        id="Name"
                        label="Name"
                        variant="outlined"
                        placeholder="Enter Your Name"
                        fullWidth
                        margin="normal"
                        name="name"
                        value={name}
                        onChange={handleOnChange}
                    />
                    {errors.name && dirty.name && (
                        <Typography style={{ marginTop: "0px", color: "red", fontWeight: "200" }}>
                            {errors.name}
                        </Typography>
                    )}
                    <TextField
                        id="email"
                        label="E-mail"
                        variant="outlined"
                        placeholder="Enter Your E-mail Address"
                        fullWidth
                        margin="normal"
                        name="emailAddress"
                        value={emailAddress}
                        onChange={handleOnChange}
                    />
                    {errors.emailAddress && dirty.emailAddress && (
                        <Typography style={{ marginTop: "0px", color: "red", fontWeight: "200" }}>
                            {errors.emailAddress}
                        </Typography>
                    )}
                    <TextField
                        id="phone-number"
                        label="Phone Number"
                        variant="outlined"
                        placeholder="Enter Your Phone Number"
                        fullWidth
                        margin="normal"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={handleOnChange}
                    />
                    {errors.phoneNumber && dirty.phoneNumber && (
                        <Typography style={{ marginTop: "0px", color: "red", fontWeight: "200" }}>
                            {errors.phoneNumber}
                        </Typography>
                    )}
                </form>
            </div>
            <div className="btnGroup2">
                <Button

                    disabled={props.activeStep === 0}
                    onClick={props.handleBack}
                >
                    back
                </Button>
                {
                    !name || !emailAddress || !phoneNumber ? (<Button
                        variant="contained"
                        color="primary"
                        onClick={props.handleNext}
                        disabled
                    >
                        {props.activeStep === props.steps.length - 1 ? "SUBMIT" : "Next"}
                    </Button>)
                        : (<Button
                            variant="contained"
                            color="primary"
                            onClick={props.handleNext}

                        >
                            {props.activeStep === props.steps.length - 1 ? "SUBMIT" : "Next"}
                        </Button>)
                }
            </div>
        </div>
    )
}

export default SubmitForm