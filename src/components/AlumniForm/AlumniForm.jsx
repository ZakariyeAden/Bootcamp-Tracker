// HOOKS
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// MUI and Assets
import {
  Box,
  Typography,
  Select,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  TextField,
  InputLabel,
  MenuItem,
  Button,
  Grid,
} from "@mui/material";
import illustrationsImg from '../Assets/bootcamp_illustrations.png'
import './AlumniForm.css'
// Modules
import bootcamps from "./Modules/Bootcamps";
import JobDuration from "./Modules/JobDuration";
import JobPosition from "./Modules/JobPosition";
import JobType from "./Modules/JobType";
import JobTitle from "./Modules/JobTitle";
import JobRole from "./Modules/JobRole";
import states from "./Modules/States";
function AlumniForm() {
  // HOOKS
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const [jobInfoInput, setJobInfoInput] = useState({
    Bootcamp: "",
    GradDate: "",
    JobTitle: "",
    JobRole: "",
    Company: "",
    States: "",
    Promotions: "",
    Position: "",
    Hours: "",
    JobDuration: "",
    JobType: "",
    HireDate: "",
    Salary: "",
    Health: "",
    Dental: "",
    PTO: "",
    FourZeroOneK: "",
    STD: "",
    LTD: "",
    Bonuses: "",
    Equity: "",
    Extra: "",
  });
  // Submit Form and dispatch
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submitted", jobInfoInput);

    // Dispatch
    dispatch({
      type: "ADD_JOB_INFO",
      payload: {
        userId: user.id,
        jobTitle: jobInfoInput.JobTitle,
        jobRole: jobInfoInput.JobRole,
        Company: jobInfoInput.Company,
        state: jobInfoInput.States,
        promotions: jobInfoInput.Promotions,
        jobNumber: jobInfoInput.Position,
        hours: jobInfoInput.Hours,
        jobDuration: jobInfoInput.JobDuration,
        jobType: jobInfoInput.JobType,
        dateHired: jobInfoInput.HireDate,
        salary: jobInfoInput.Salary,
        graduationDate: jobInfoInput.GradDate,
        bootcamp: jobInfoInput.Bootcamp,
        health: jobInfoInput.Health,
        dental: jobInfoInput.Dental,
        PTO: jobInfoInput.PTO,
        fourZeroOneK: jobInfoInput.FourZeroOneK,
        equity: jobInfoInput.Equity,
        bonuses: jobInfoInput.Bonuses,
        LTD: jobInfoInput.LTD,
        STD: jobInfoInput.STD,
        notes: jobInfoInput.Extra,
      },
    });
  };

  return (
    <Grid container>
      <Grid item xs={6}>
      <form onSubmit={handleSubmit}>
        <Typography> Bootcamps</Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <label>Bootcamp graduated from:</label>
          <Select
            id="demo-simple-select"
            label="Bootcamps"
            onChange={e =>
              setJobInfoInput({ ...jobInfoInput, Bootcamp: e.target.value })
            }
            value={jobInfoInput.Bootcamp}
          >
            {bootcamps.map(bootcamp => {
              return (
                <MenuItem key={bootcamp.id} value={bootcamp.name}>
                  {bootcamp.name}
                </MenuItem>
              );
            })}
          </Select>
        </Box>

        <div>
          <label>Graduation Date:</label>
          <TextField
            type="date"
            placeholder="Graduation Date"
            onChange={e =>
              setJobInfoInput({ ...jobInfoInput, GradDate: e.target.value })
            }
            value={jobInfoInput.GradDate}
          />
        </div>
        {/* Job Information  */}
        <Typography>Job Information</Typography>
        <label>Job Title</label>
        <Select
          labelId="job-label"
          id="job-label"
          label="Job Title"
          onChange={e =>
            setJobInfoInput({ ...jobInfoInput, JobTitle: e.target.value })
          }
          value={jobInfoInput.JobTitle}
        >
          {JobTitle.map(job => {
            return (
              <MenuItem key={job.id} value={job.title}>
                {job.title}
              </MenuItem>
            );
          })}
        </Select>
        <label>Job Role</label>
        <Select
          id="demo-simple-select"
          label="Job Role"
          onChange={e =>
            setJobInfoInput({ ...jobInfoInput, JobRole: e.target.value })
          }
          value={jobInfoInput.JobRole}
        >
          {JobRole.map(job => {
            return (
              <MenuItem key={job.id} value={job.role}>
                {job.role}
              </MenuItem>
            );
          })}
        </Select>
        <label id="demo-simple-select-label">Company Name</label>
        <TextField
          type="text"
          placeholder="Company Name"
          onChange={e =>
            setJobInfoInput({ ...jobInfoInput, Company: e.target.value })
          }
        />
        <label id="demo-simple-select-label">States</label>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="States"
          onChange={e =>
            setJobInfoInput({ ...jobInfoInput, States: e.target.value })
          }
          value={jobInfoInput.States}
        >
          {states.map(state => {
            return (
              <MenuItem key={state.id} value={state.name}>
                {state.name}
              </MenuItem>
            );
          })}
        </Select>
        <FormLabel id="promotion-radio-group">Promotions</FormLabel>
        <RadioGroup
          row
          aria-labelledby="promotion-radio-group"
          onChange={e =>
            setJobInfoInput({ ...jobInfoInput, Promotions: e.target.value })
          }
          value={jobInfoInput.Promotions}
        >
          <FormControlLabel value="TRUE" control={<Radio />} label="Yes" />
          <FormControlLabel value="FALSE" control={<Radio />} label="No" />
        </RadioGroup>
        <label>Positon:</label>
        <Select
          id="demo-simple-select"
          label="Bootcamps"
          onChange={e =>
            setJobInfoInput({ ...jobInfoInput, Position: e.target.value })
          }
          value={jobInfoInput.Position}
        >
          {JobPosition.map(job => {
            return (
              <MenuItem key={job.id} value={job.positon}>
                {job.positon}
              </MenuItem>
            );
          })}
        </Select>
        <label id="demo-simple-select-label">Hours Worked</label>
        <TextField
          type="number"
          placeholder="Hours Worked"
          onChange={e =>
            setJobInfoInput({ ...jobInfoInput, Hours: e.target.value })
          }
          value={jobInfoInput.Hours}
        />
        <label id="demo-simple-select-label">Job Duration</label>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Job Duration"
          onChange={e =>
            setJobInfoInput({ ...jobInfoInput, JobDuration: e.target.value })
          }
          value={jobInfoInput.JobDuration}
        >
          {JobDuration.map(job => {
            return (
              <MenuItem key={job.id} value={job.duration}>
                {job.duration}
              </MenuItem>
            );
          })}
        </Select>

        <label id="demo-simple-select-label">Job Type</label>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Job Type"
          onChange={e =>
            setJobInfoInput({ ...jobInfoInput, JobType: e.target.value })
          }
          value={jobInfoInput.JobType}
        >
          {JobType.map(job => {
            return (
              <MenuItem key={job.id} value={job.type}>
                {job.type}
              </MenuItem>
            );
          })}
        </Select>
        <label id="demo-simple-select-label">Hire Date</label>
        <TextField
          type="date"
          placeholder="Hire Date"
          onChange={e =>
            setJobInfoInput({ ...jobInfoInput, HireDate: e.target.value })
          }
          value={jobInfoInput.HireDate}
        />
        <label id="demo-simple-select-label">Salary</label>
        <TextField
          type="number"
          placeholder="Salary - Yearly/hourly"
          onChange={e =>
            setJobInfoInput({ ...jobInfoInput, Salary: e.target.value })
          }
          value={jobInfoInput.Salary}
        />
        {/* Benefits */}
        <Typography>Benefits</Typography>
        <FormLabel id="health-insurance-radio-group">
          Health Insurance
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="health-insurance-radio-group"
          onChange={e =>
            setJobInfoInput({ ...jobInfoInput, Health: e.target.value })
          }
          value={jobInfoInput.Health}
        >
          <FormControlLabel value="TRUE" control={<Radio />} label="Yes" />
          <FormControlLabel value="FALSE" control={<Radio />} label="No" />
        </RadioGroup>
        <FormLabel id="dental-insurance-radio-group">
          Dental Insurance
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="dental-insurance-radio-group"
          onChange={e =>
            setJobInfoInput({ ...jobInfoInput, Dental: e.target.value })
          }
          value={jobInfoInput.Dental}
        >
          <FormControlLabel value="TRUE" control={<Radio />} label="Yes" />
          <FormControlLabel value="FALSE" control={<Radio />} label="No" />
        </RadioGroup>
        <FormLabel id="pto-radio-group">PTO</FormLabel>
        <RadioGroup
          row
          aria-labelledby="pto-radio-group"
          onChange={e =>
            setJobInfoInput({ ...jobInfoInput, PTO: e.target.value })
          }
          value={jobInfoInput.PTO}
        >
          <FormControlLabel value="TRUE" control={<Radio />} label="Yes" />
          <FormControlLabel value="FALSE" control={<Radio />} label="No" />
        </RadioGroup>
        <FormLabel id="401k-radio-group">401K</FormLabel>
        <RadioGroup
          row
          aria-labelledby="401k-radio-group"
          onChange={e =>
            setJobInfoInput({ ...jobInfoInput, FourZeroOneK: e.target.value })
          }
          value={jobInfoInput.FourZeroOneK}
        >
          <FormControlLabel value="TRUE" control={<Radio />} label="Yes" />
          <FormControlLabel value="FALSE" control={<Radio />} label="No" />
        </RadioGroup>
        <FormLabel id="lt-diability-radio-group">
          Long Term Disability
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="lt-diability-radio-group"
          onChange={e =>
            setJobInfoInput({ ...jobInfoInput, LTD: e.target.value })
          }
          value={jobInfoInput.LTD}
        >
          <FormControlLabel value="TRUE" control={<Radio />} label="Yes" />
          <FormControlLabel value="FALSE" control={<Radio />} label="No" />
        </RadioGroup>
        <FormLabel id="st-diability-radio-group">
          Short Term Disability
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="st-diability-radio-group"
          onChange={e =>
            setJobInfoInput({ ...jobInfoInput, STD: e.target.value })
          }
          value={jobInfoInput.STD}
        >
          <FormControlLabel value="TRUE" control={<Radio />} label="Yes" />
          <FormControlLabel value="FALSE" control={<Radio />} label="No" />
        </RadioGroup>
        <FormLabel id="bonus-radio-group">Bonuses</FormLabel>
        <RadioGroup
          row
          aria-labelledby="bonus-radio-group"
          onChange={e =>
            setJobInfoInput({ ...jobInfoInput, Bonuses: e.target.value })
          }
          value={jobInfoInput.Bonuses}
        >
          <FormControlLabel value="TRUE" control={<Radio />} label="Yes" />
          <FormControlLabel value="FALSE" control={<Radio />} label="No" />
        </RadioGroup>
        <FormLabel id="bonus-radio-group">Equity</FormLabel>
        <RadioGroup
          row
          aria-labelledby="bonus-radio-group"
          onChange={e =>
            setJobInfoInput({ ...jobInfoInput, Equity: e.target.value })
          }
          value={jobInfoInput.Equity}
        >
          <FormControlLabel value="TRUE" control={<Radio />} label="Yes" />
          <FormControlLabel value="FALSE" control={<Radio />} label="No" />
        </RadioGroup>
        <textarea
          type="text"
          placeholder="Notes"
          onChange={e =>
            setJobInfoInput({ ...jobInfoInput, Extra: e.target.value })
          }
          value={jobInfoInput.Extra}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    
      </Grid>
      <Grid item xs={6}>
       <div className="img-box">
           <img src={illustrationsImg} alt="Illustrations image" className="img"/>
       </div>
      </Grid>
    </Grid>
  );
}

export default AlumniForm;
