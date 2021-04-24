import React, { useState } from "react";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Button,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Radio,
  MenuItem,
  FormLabel,
  TextField,
  Divider,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Helmet } from "react-helmet";
import Pagination from "@material-ui/lab/Pagination";
import {
  AddIcon,
  AlertCloseIcon,
  AlertDangerIcon,
  AlertInfoIcon,
  AlertSuccessIcon,
  AlertWarnIcon,
  DeleteIcon,
  EditIcon,
  FileUploadIcon,
} from "../../assets/images";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { FormControl } from "@material-ui/core";
import { Select } from "@material-ui/core";
import DefaultSwitch from "../../components/Switch";
import DefaultTabs from "../../components/Tabs";
import DefaultSelect from "../../components/Select";
import Footer from "../../components/Footer";

const InnerPage = () => {
  function createData(
    date: string,
    comapny: string,
    name: string,
    type: string,
    contact: string,
    area: string,
    status: string,
    classBtn: string
  ) {
    return { date, comapny, name, type, contact, area, status, classBtn };
  }

  const rows = [
    createData(
      "12/09/2019",
      "AB Technology",
      "John Doe",
      "PAD",
      "99823982373",
      "Gujarat",
      "Active",
      "btn-active"
    ),
    createData(
      "12/09/2019",
      "AB Technology",
      "John Doe",
      "PAD",
      "99823982373",
      "Gujarat",
      "Pending",
      "btn-pending"
    ),
    createData(
      "12/09/2019",
      "AB Technology",
      "John Doe",
      "PAD",
      "99823982373",
      "Gujarat",
      "Cancelled",
      "btn-cancelled"
    ),
    createData(
      "12/09/2019",
      "AB Technology",
      "John Doe",
      "PAD",
      "99823982373",
      "Gujarat",
      "Completed",
      "btn-completed"
    ),
    createData(
      "12/09/2019",
      "AB Technology",
      "John Doe",
      "PAD",
      "99823982373",
      "Gujarat",
      "Active",
      "btn-active"
    ),
    createData(
      "12/09/2019",
      "AB Technology",
      "John Doe",
      "PAD",
      "99823982373",
      "Gujarat",
      "Active",
      "btn-active"
    ),
    createData(
      "12/09/2019",
      "AB Technology",
      "John Doe",
      "PAD",
      "99823982373",
      "Gujarat",
      "Pending",
      "btn-pending"
    ),
  ];

  const [showSuccess, setShowSuccess] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [showWarning, setShowWarning] = useState(true);
  const [showDanger, setShowDanger] = useState(true);

  const [checked, setChecked] = useState(true);

  const handleChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const [radio, setRadio] = useState("option1");

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadio((event.target as HTMLInputElement).value);
  };

  const [select, setSelect] = useState("6");

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelect(event.target.value as string);
  };

  const toggleOverlay = () => {
    document.body.classList.toggle("toggle-nav");
  };
  return (
    <div className="wrapper">
      <Helmet>
        <title>InnerPage | Theme</title>
      </Helmet>
      <div
        id="overlay"
        className="display-block-toggle"
        onClick={() => toggleOverlay()}
      ></div>
      <Header />
      <Sidebar />
      <div id="main" className="main-toggle">
        <div className="innerpage-content">
          <Grid container>
            <Grid item md={12} className="col-md-12">
              <h3 className="innerpage-text">Maintenance</h3>
            </Grid>

            <Grid item md={12} className="col-md-12">
              <div className="innerpage-table-div card">
                <div className="table-text">
                  <h3>Sales</h3>
                  <img src={AddIcon} alt="add"></img>
                </div>
                <div className="stats-table">
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell scope="col">Date</TableCell>
                          <TableCell scope="col">Company</TableCell>
                          <TableCell scope="col">Name</TableCell>
                          <TableCell scope="col">Type</TableCell>
                          <TableCell scope="col">Contact No.</TableCell>
                          <TableCell scope="col">Area</TableCell>
                          <TableCell scope="col">Status</TableCell>
                          <TableCell scope="col"></TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {rows.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell scope="row">{row.date}</TableCell>
                            <TableCell>{row.comapny}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.type}</TableCell>
                            <TableCell>{row.contact}</TableCell>
                            <TableCell className="text-city">
                              {row.area}
                            </TableCell>
                            <TableCell className="text-icon">
                              <span className={row.classBtn}>{row.status}</span>
                            </TableCell>
                            <TableCell>
                              <div className="edit-cell">
                                <img
                                  className="edit-img"
                                  src={EditIcon}
                                  alt=""
                                />
                                <img
                                  className="delete-img"
                                  src={DeleteIcon}
                                  alt=""
                                />
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <div className="main-pagination">
                    <div className="records-entry">
                      <span>
                        <h2 className="pt-3">Show:</h2>
                      </span>
                      <span className="select-box">
                        <FormControl variant="filled">
                          <Select
                            id="entry"
                            value={select}
                            className="show-entry"
                            onChange={handleChangeSelect}
                          >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                          </Select>
                        </FormControl>
                      </span>
                      <span>
                        <h3 className="pt-3">Entries</h3>
                      </span>
                    </div>

                    <Pagination
                      count={5}
                      color="primary"
                      className="pagination-nav page"
                    />
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item md={12} className="col-md-12">
              <div className="form-div card">
                <div className="analytics-text">
                  <h3>Form Styles</h3>
                </div>
                <form>
                  <Grid container>
                    <Grid item md={12} className="col-12">
                      <h3 className="one-column-head">One Column</h3>
                      <Divider className="divider-one" />
                    </Grid>
                    <Grid item md={12} className="col-12">
                      <FormGroup>
                        <TextField
                          type="text"
                          variant="filled"
                          id="exampleInput"
                          label="Textbox"
                        />
                      </FormGroup>
                      <FormGroup>
                        <DefaultSelect />
                      </FormGroup>
                      <FormGroup>
                        <TextField
                          className="form-textarea"
                          id="exampleTextarea"
                          type="textarea"
                          label="Textarea"
                          variant="filled"
                        ></TextField>
                      </FormGroup>
                    </Grid>
                  </Grid>
                </form>

                <form>
                  <Grid container>
                    <Grid item xs={12} className="col-12">
                      <h3 className="two-column-head">Two Column</h3>
                      <Divider className="divider-two" />
                    </Grid>
                    <Grid item md={6} className="col-md-6">
                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          id="exampleInput"
                          label="Textbox"
                        />
                      </FormGroup>

                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          label="Disabled"
                          id="exampleInput"
                          disabled
                        />
                      </FormGroup>
                    </Grid>
                    <Grid item md={6} className="col-md-6">
                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          id="exampleInput"
                          label="Textbox"
                        />
                      </FormGroup>

                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          id="exampleInput"
                          label="Focus"
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>
                </form>

                <form>
                  <Grid container>
                    <Grid item xs={12} className="col-12">
                      <h3 className="three-column-head">Three Column</h3>
                      <Divider className="divider-three" />
                    </Grid>
                    <Grid item md={4} className="col-md-4">
                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          id="exampleInput"
                          label="Textbox"
                        />
                      </FormGroup>

                      <FormGroup>
                        <DefaultSelect />
                      </FormGroup>
                    </Grid>
                    <Grid item md={4} className="col-md-4">
                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          id="exampleInput"
                          label="Textbox"
                        />
                      </FormGroup>

                      <FormGroup>
                        <DefaultSelect />
                      </FormGroup>
                    </Grid>
                    <Grid item md={4} className="col-md-4">
                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          id="exampleInput"
                          label="Textbox"
                        />
                      </FormGroup>

                      <FormGroup>
                        <DefaultSelect />
                      </FormGroup>
                    </Grid>
                  </Grid>
                </form>

                <form>
                  <Grid container>
                    <Grid item xs={12} className="col-12">
                      <h3 className="four-column-head">Four Column</h3>
                      <Divider className="divider-four" />
                    </Grid>
                    <Grid item md={3} className="col-md-3">
                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          id="exampleInput"
                          label="Textbox"
                        />
                      </FormGroup>

                      <FormGroup>
                        <DefaultSelect />
                      </FormGroup>
                    </Grid>
                    <Grid item md={3} className="col-md-3">
                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          id="exampleInput"
                          label="Textbox"
                        />
                      </FormGroup>

                      <FormGroup>
                        <DefaultSelect />
                      </FormGroup>
                    </Grid>
                    <Grid item md={3} className="col-md-3">
                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          id="exampleInput"
                          label="Textbox"
                        />
                      </FormGroup>

                      <FormGroup>
                        <DefaultSelect />
                      </FormGroup>
                    </Grid>
                    <Grid item md={3} className="col-md-3">
                      <FormGroup>
                        <TextField
                          variant="filled"
                          type="text"
                          id="exampleInput"
                          label="Textbox"
                        />
                      </FormGroup>

                      <FormGroup>
                        <DefaultSelect />
                      </FormGroup>
                    </Grid>
                  </Grid>
                </form>

                <form>
                  <Grid container>
                    <Grid item md={12} className="col-md-12">
                      <h3 className="element-head">Other Elements</h3>
                      <Divider className="divider-element" />
                    </Grid>

                    <Grid item md={12} className="col-md-12">
                      <div className="file-upload">
                        <span className="form-label one-column-label">
                          File Upload:
                        </span>

                        <FormLabel htmlFor="input-file">
                          <img
                            src={FileUploadIcon}
                            alt=""
                            className="upload-white-icon"
                          />{" "}
                          Upload
                        </FormLabel>
                        <TextField id="input-file" type="file" />
                      </div>
                    </Grid>

                    <Grid item md={12} className="col-md-12">
                      <FormGroup>
                        <FormLabel
                          className="checkbox-label"
                          htmlFor="exampleInput"
                        >
                          Check Boxes
                        </FormLabel>
                      </FormGroup>
                    </Grid>

                    <Grid item md={12} className="col-md-12">
                      <FormGroup>
                        <div className="custom-Control custom-checkbox checkbox1">
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={checked}
                                color="primary"
                                disableRipple={true}
                                onChange={handleChangeCheckbox}
                              />
                            }
                            label="Option 1"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                defaultChecked
                                color="primary"
                                disableRipple={true}
                              />
                            }
                            label="Option 2"
                          />
                          <FormControlLabel
                            control={
                              <Checkbox
                                defaultChecked
                                color="primary"
                                disableRipple={true}
                              />
                            }
                            label="Option 3"
                          />
                        </div>
                      </FormGroup>
                    </Grid>

                    <Grid item xs={12} className="col-md-12">
                      <FormGroup>
                        <FormLabel
                          className="checkbox-label"
                          htmlFor="exampleInput"
                        >
                          Radio Buttons
                        </FormLabel>
                      </FormGroup>
                    </Grid>

                    <Grid item md={12} className="col-md-12">
                      <FormGroup>
                        <div className="custom-Control custom-radio checkbox1">
                          <FormControlLabel
                            value="option1"
                            control={
                              <Radio
                                onChange={handleChangeRadio}
                                color="primary"
                                name="option"
                                disableRipple={true}
                                checked={radio === "option1"}
                              />
                            }
                            label="Option 1"
                          />
                          <FormControlLabel
                            value="option2"
                            control={
                              <Radio
                                onChange={handleChangeRadio}
                                color="primary"
                                checked={radio === "option2"}
                                name="option"
                                disableRipple={true}
                              />
                            }
                            label="Option 2"
                          />
                          <FormControlLabel
                            value="option3"
                            control={
                              <Radio
                                onChange={handleChangeRadio}
                                checked={radio === "option3"}
                                color="primary"
                                disableRipple={true}
                                name="option"
                              />
                            }
                            label="Option 3"
                          />
                        </div>
                      </FormGroup>
                    </Grid>

                    <Grid item md={12} className="col-md-12">
                      <div className="button-element">
                        <Button
                          type="button"
                          variant="contained"
                          color="primary"
                          className="primary-btn"
                        >
                          Primary
                        </Button>
                        <Button
                          type="button"
                          variant="contained"
                          color="default"
                          className="secondary-btn"
                        >
                          Secondary
                        </Button>
                        <DefaultSwitch leftlabel="OFF" rightlabel="ON" />
                      </div>
                    </Grid>

                    <Grid item md={12} className="col-md-12">
                      <div className="alert-message">
                        {!showSuccess && (
                          <div>
                            <Button
                              variant="contained"
                              className="mb-2 btn-success"
                              onClick={() => setShowSuccess(true)}
                            >
                              Show Success Alert
                            </Button>
                          </div>
                        )}
                        {showSuccess && (
                          <Alert icon={false} className="alert-success">
                            <img
                              className="alert-icon"
                              src={AlertSuccessIcon}
                              alt=""
                            />
                            <span className="alert-success-text">
                              This is a success message
                            </span>
                            <img
                              className="alert-close"
                              src={AlertCloseIcon}
                              onClick={() => setShowSuccess(false)}
                              alt=""
                            />
                          </Alert>
                        )}

                        {!showInfo && (
                          <div>
                            <Button
                              variant="contained"
                              className="btn-info mb-2"
                              onClick={() => setShowInfo(true)}
                            >
                              Show Info Alert
                            </Button>
                          </div>
                        )}
                        {showInfo && (
                          <Alert icon={false} className="alert alert-info">
                            <img
                              className="alert-icon"
                              src={AlertInfoIcon}
                              alt=""
                            />
                            <span className="alert-info-text">
                              This is an info message
                            </span>
                            <img
                              className="alert-close"
                              src={AlertCloseIcon}
                              alt=""
                              onClick={() => setShowInfo(false)}
                            />
                          </Alert>
                        )}

                        {!showWarning && (
                          <div>
                            <Button
                              variant="contained"
                              className=" btn-warning mb-2"
                              onClick={() => setShowWarning(true)}
                            >
                              Show Warning Alert
                            </Button>
                          </div>
                        )}
                        {showWarning && (
                          <Alert icon={false} className="alert alert-warning">
                            <img
                              className="alert-icon"
                              src={AlertWarnIcon}
                              alt=""
                            />
                            <span className="alert-warn-text">
                              This is an alert message
                            </span>
                            <img
                              className="alert-close"
                              src={AlertCloseIcon}
                              alt=""
                              onClick={() => setShowWarning(false)}
                            />
                          </Alert>
                        )}

                        {!showDanger && (
                          <div>
                            <Button
                              variant="contained"
                              className="btn-danger mb-2"
                              onClick={() => setShowDanger(true)}
                            >
                              Show Danger Alert
                            </Button>
                          </div>
                        )}
                        {showDanger && (
                          <Alert
                            icon={false}
                            className="alert alert-danger"
                            role="alert"
                          >
                            <img
                              className="alert-icon"
                              src={AlertDangerIcon}
                              alt=""
                            />
                            <span className="alert-danger-text">
                              This is an error message
                            </span>
                            <img
                              className="alert-close"
                              src={AlertCloseIcon}
                              alt=""
                              onClick={() => setShowDanger(false)}
                            />
                          </Alert>
                        )}
                      </div>
                    </Grid>
                  </Grid>
                </form>

                <Grid container>
                  <Grid item xs={12}>
                    <h3 className="tab-head">Tab Style</h3>
                    <Divider className="tab-divider" />
                  </Grid>
                  <Grid item xs={12}>
                    <DefaultTabs />
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Footer />
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default InnerPage;
