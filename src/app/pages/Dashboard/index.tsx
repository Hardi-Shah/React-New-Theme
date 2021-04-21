import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Select,
  FormControl,
  MenuItem,
  FormLabel,
} from "@material-ui/core";
import React from "react";
import {
  AvgSaleIcon,
  DeleteIcon,
  EarningsIcon,
  EditIcon,
  SalesGraph1Icon,
  SalesGraph2Icon,
  SalesIcon,
  TotalLossIcon,
  VisitorsIcon,
} from "../../assets/images";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  const [select, setSelect] = React.useState("Today");

  const handleChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelect(event.target.value as string);
  };

  function toggleOverlay() {
    document
      .getElementById("overlay")!
      .classList.toggle("display-block-toggle");
    document.getElementById("Sidebar")!.classList.toggle("sidenav-toggle");
    document.getElementById("main")!.classList.toggle("main-toggle");
  }
  return (
    <div className="wrapper">
      <div id="overlay" onClick={() => toggleOverlay()}></div>
      <Header />
      <Sidebar />
      <div id="main">
        <div className="dashboard-content">
          <Grid container className="admin-content">
            <Grid item xs={12} className="col-md-6 dashboard-sort">
              <h3 className="dashboard-header">Dashboard</h3>
              <span className="select-div">
                <FormLabel>Sort by</FormLabel>
                <FormControl variant="filled">
                  <Select
                    id="entry"
                    value={select}
                    className="select-entry"
                    onChange={handleChangeSelect}
                  >
                    <MenuItem value={1}>Today</MenuItem>
                    <MenuItem value={2}>Yesterday</MenuItem>
                    <MenuItem value={3}>PreviousDay</MenuItem>
                  </Select>
                </FormControl>
              </span>
            </Grid>
            <Grid item xs={12} lg={4} sm={6} md={6} xl className="col-md-6">
              <div className="card visitors">
                <div className="card-body">
                  <div className="content-box">
                    <Grid container>
                      <Grid item xs={4} className="stats-icon">
                        <img
                          src={VisitorsIcon}
                          alt="visitors"
                          className="stats-img"
                        />
                      </Grid>
                      <Grid item xs={8}>
                        <div className="visitors-number">120,570</div>
                      </Grid>
                    </Grid>

                    <Grid container className="">
                      <Grid item className=" col-12  ">
                        <span className="visitors-text">Visitors</span>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} lg={4} sm={6} md={6} xl className="col-md-6">
              <div className="card visitors">
                <div className="card-body">
                  <div className="content-box">
                    <Grid container>
                      <Grid item xs={5} className="stats-icon">
                        <img
                          src={SalesIcon}
                          alt="total-pending"
                          className="stats-img"
                        />
                      </Grid>
                      <Grid item xs={7}>
                        <div className="visitors-number">150</div>
                      </Grid>
                    </Grid>
                    <Grid container className="">
                      <Grid item className=" col-12  ">
                        <span className="visitors-text">Sales</span>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item lg={4} xs={12} sm={6} md={6} xl className="col-md-6">
              <div className="card visitors">
                <div className="card-body">
                  <div className="content-box">
                    <Grid container>
                      <Grid item xs={5} className="stats-icon">
                        <img
                          src={EarningsIcon}
                          alt="earnings"
                          className="stats-img"
                        />
                      </Grid>
                      <Grid item xs={7}>
                        <div className="visitors-number">3,200</div>
                      </Grid>
                    </Grid>
                    <Grid container className="">
                      <Grid item className=" col-12  ">
                        <span className="visitors-text">Earnings</span>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item lg={4} xs={12} sm={6} md={6} xl className="col-md-6">
              <div className="card visitors">
                <div className="card-body">
                  <div className="content-box">
                    <Grid container>
                      <Grid item xs={5} className="stats-icon">
                        <img
                          src={AvgSaleIcon}
                          alt="avg-sale"
                          className="stats-img"
                        />
                      </Grid>
                      <Grid item xs={7}>
                        <div className="visitors-number">210</div>
                      </Grid>
                    </Grid>
                    <Grid container className="">
                      <Grid item className=" col-12  ">
                        <span className="visitors-text">Avg Sale</span>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item lg={4} xs={12} sm={6} md={6} xl className="col-md-6">
              <div className="card visitors">
                <div className="card-body">
                  <div className="content-box">
                    <Grid container>
                      <Grid item xs={5} className="stats-icon">
                        <img
                          src={TotalLossIcon}
                          alt="total-loss"
                          className="stats-img"
                        />
                      </Grid>
                      <Grid item xs={7}>
                        <div className="visitors-number">20</div>
                      </Grid>
                    </Grid>
                    <Grid container className="">
                      <Grid item className=" col-12  ">
                        <span className="visitors-text">Total Loss</span>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xl={6} sm={12} className="col-md-6">
              <div className="card sales-card-1">
                <div className="card-body">
                  <div className="analytics-div content-box">
                    <h3>Sales</h3>
                    <div className="analytics-image">
                      <img
                        className="analytic-img"
                        src={SalesGraph1Icon}
                        alt="sales-graph"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xl={6} sm={12} className="col-md-6">
              <div className="card sales-card-2">
                <div className="card-body">
                  <div className="analytics-div content-box">
                    <h3>Sales</h3>
                    <div className="analytics-image">
                      <img
                        className="analytic-img"
                        src={SalesGraph2Icon}
                        alt="sales-graph"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} className="col-md-6 col-sm-12 ">
              <div className="card analytic-card">
                <div className="card-body">
                  <div className="table-div content-box">
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
                            </TableRow>
                          </TableHead>

                          <TableBody>
                            <TableRow>
                              <TableCell>12/09/2019</TableCell>
                              <TableCell>AB Technologies</TableCell>
                              <TableCell>John Doe</TableCell>
                              <TableCell>PAD</TableCell>
                              <TableCell>99823982373</TableCell>
                              <TableCell className="text-city">
                                Gujarat
                              </TableCell>
                              <TableCell className="text-icon">
                                <div className="btn-active">Active</div>
                              </TableCell>
                              <TableCell>
                                <img
                                  className="edit-img"
                                  src={EditIcon}
                                  alt=""
                                />
                                <img
                                  className="edit-img"
                                  src={DeleteIcon}
                                  alt=""
                                />
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell>12/09/2019</TableCell>
                              <TableCell>AB Technologies</TableCell>
                              <TableCell>John Doe</TableCell>
                              <TableCell>PAD</TableCell>
                              <TableCell>99823982373</TableCell>
                              <TableCell className="text-city">
                                Gujarat
                              </TableCell>
                              <TableCell className="text-icon">
                                <div className="btn-pending">Pending</div>
                              </TableCell>
                              <TableCell>
                                <img
                                  className="edit-img"
                                  src={EditIcon}
                                  alt=""
                                />
                                <img
                                  className="edit-img"
                                  src={DeleteIcon}
                                  alt=""
                                />
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell>12/09/2019</TableCell>
                              <TableCell>AB Technologies</TableCell>
                              <TableCell>John Doe</TableCell>
                              <TableCell>PAD</TableCell>
                              <TableCell>99823982373</TableCell>
                              <TableCell className="text-city">
                                Gujarat
                              </TableCell>
                              <TableCell className="text-icon">
                                <div className="btn-cancelled">Cancelled</div>
                              </TableCell>
                              <TableCell>
                                <img
                                  className="edit-img"
                                  src={EditIcon}
                                  alt=""
                                />
                                <img
                                  className="edit-img"
                                  src={DeleteIcon}
                                  alt=""
                                />
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell>12/09/2019</TableCell>
                              <TableCell>AB Technologies</TableCell>
                              <TableCell>John Doe</TableCell>
                              <TableCell>PAD</TableCell>
                              <TableCell>99823982373</TableCell>
                              <TableCell className="text-city">
                                Gujarat
                              </TableCell>
                              <TableCell className="text-icon">
                                <div className="btn-completed">Completed</div>
                              </TableCell>
                              <TableCell>
                                <img
                                  className="edit-img"
                                  src={EditIcon}
                                  alt=""
                                />
                                <img
                                  className="edit-img"
                                  src={DeleteIcon}
                                  alt=""
                                />
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell>12/09/2019</TableCell>
                              <TableCell>AB Technologies</TableCell>
                              <TableCell>John Doe</TableCell>
                              <TableCell>PAD</TableCell>
                              <TableCell>99823982373</TableCell>
                              <TableCell className="text-city">
                                Gujarat
                              </TableCell>
                              <TableCell className="text-icon">
                                <div className="btn-active">Active</div>
                              </TableCell>
                              <TableCell>
                                <img
                                  className="edit-img"
                                  src={EditIcon}
                                  alt=""
                                />
                                <img
                                  className="edit-img"
                                  src={DeleteIcon}
                                  alt=""
                                />
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell>12/09/2019</TableCell>
                              <TableCell>AB Technologies</TableCell>
                              <TableCell>John Doe</TableCell>
                              <TableCell>PAD</TableCell>
                              <TableCell>99823982373</TableCell>
                              <TableCell className="text-city">
                                Gujarat
                              </TableCell>
                              <TableCell className="text-icon">
                                <div className="btn-active">Active</div>
                              </TableCell>
                              <TableCell>
                                <img
                                  className="edit-img"
                                  src={EditIcon}
                                  alt=""
                                />
                                <img
                                  className="edit-img"
                                  src={DeleteIcon}
                                  alt=""
                                />
                              </TableCell>
                            </TableRow>

                            <TableRow>
                              <TableCell>12/09/2019</TableCell>
                              <TableCell>AB Technologies</TableCell>
                              <TableCell>John Doe</TableCell>
                              <TableCell>PAD</TableCell>
                              <TableCell>99823982373</TableCell>
                              <TableCell className="text-city">
                                Gujarat
                              </TableCell>
                              <TableCell className="text-icon">
                                <div className="btn-pending">pending</div>
                              </TableCell>
                              <TableCell>
                                <img
                                  className="edit-img"
                                  src={EditIcon}
                                  alt=""
                                />
                                <img
                                  className="edit-img"
                                  src={DeleteIcon}
                                  alt=""
                                />
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Footer />
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
