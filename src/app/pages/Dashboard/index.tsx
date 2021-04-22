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
import Pagination from "@material-ui/lab/Pagination";
import React from "react";
import {
  AvgSale1Icon,
  AvgSaleIcon,
  DeleteIcon,
  Earnings1Icon,
  EarningsIcon,
  EditIcon,
  Sales1Icon,
  SalesGraph1Icon,
  SalesGraph2Icon,
  SalesIcon,
  ThreeDotIcon,
  TotalLoss1Icon,
  TotalLossIcon,
  Visitors1Icon,
  VisitorsIcon,
} from "../../assets/images";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Helmet } from "react-helmet";

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
    /* Start Wrapper */
    <div className="wrapper">
      <Helmet>
        <title>Dashboard | Theme</title>
      </Helmet>
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
                    <MenuItem value={"Today"}>Today</MenuItem>
                    <MenuItem value={"Yesterday"}>Yesterday</MenuItem>
                    <MenuItem value={"NextDay"}>NextDay</MenuItem>
                  </Select>
                </FormControl>
              </span>
            </Grid>
            <Grid item xs={12} lg={4} sm={6} md={6} xl className="col-md-6">
              <div className="card visitors">
                <div className="card-body">
                  <div className="content-box">
                    <img
                      src={VisitorsIcon}
                      alt="visitors"
                      className="stats-img"
                    />
                    <img
                      src={Visitors1Icon}
                      alt="visitors"
                      className="stats-img-1"
                    />
                    <div className="visitors-div">
                      <h3 className="visitors-number">120,570</h3>
                      <p className="visitors-text">Visitors</p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} lg={4} sm={6} md={6} xl className="col-md-6">
              <div className="card visitors">
                <div className="card-body">
                  <div className="content-box">
                    <img src={SalesIcon} alt="sales" className="stats-img" />
                    <img src={Sales1Icon} alt="sales" className="stats-img-1" />
                    <div className="visitors-div">
                      <h3 className="visitors-number">150</h3>
                      <p className="visitors-text">Sales</p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item lg={4} xs={12} sm={6} md={6} xl className="col-md-6">
              <div className="card visitors">
                <div className="card-body">
                  <div className="content-box">
                    <img
                      src={EarningsIcon}
                      alt="earnings"
                      className="stats-img"
                    />
                    <img
                      src={Earnings1Icon}
                      alt="earnings"
                      className="stats-img-1"
                    />
                    <div className="visitors-div">
                      <h3 className="visitors-number">3,200</h3>
                      <p className="visitors-text">Earnings</p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item lg={6} xs={12} sm={6} md={6} xl className="col-md-6">
              <div className="card visitors">
                <div className="card-body">
                  <div className="content-box">
                    <img
                      src={AvgSaleIcon}
                      alt="avg-sale"
                      className="stats-img"
                    />
                    <img
                      src={AvgSale1Icon}
                      alt="avg-sale"
                      className="stats-img-1"
                    />
                    <div className="visitors-div">
                      <h3 className="visitors-number">210</h3>
                      <p className="visitors-text">Avg Sale</p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item lg={6} xs={12} sm={12} md={12} xl className="col-md-6">
              <div className="card visitors">
                <div className="card-body">
                  <div className="content-box">
                    <img
                      src={TotalLossIcon}
                      alt="total-loss"
                      className="stats-img"
                    />
                    <img
                      src={TotalLoss1Icon}
                      alt="total-loss"
                      className="stats-img-1"
                    />
                    <div className="visitors-div">
                      <h3 className="visitors-number">20</h3>
                      <p className="visitors-text">Total Loss</p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xl={5} xs={12} className="col-md-6 sales-grid1">
              <div className="card sales-card-1">
                <div className="card-body">
                  <div className="analytics-div ">
                    <h3>Sales</h3>
                    <img
                      src={ThreeDotIcon}
                      alt="three-dot"
                      className="dot-img"
                    />
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

            <Grid item xl={7} xs={12} className="col-md-6 sales-grid2">
              <div className="card sales-card-2">
                <div className="card-body">
                  <div className="analytics-div ">
                    <h3>Sales</h3>
                    <img
                      src={ThreeDotIcon}
                      alt="three-dot"
                      className="dot-img"
                    />
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
                  <div className="table-div ">
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
                                  className="delete-img"
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
                                  className="delete-img"
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
                                  className="delete-img"
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
                                  className="delete-img"
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
                                  className="delete-img"
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
                                  className="delete-img"
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
                                  className="delete-img"
                                  src={DeleteIcon}
                                  alt=""
                                />
                              </TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <Pagination
                        count={5}
                        color="primary"
                        className="pagination-nav"
                      />
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
    /* End Wrapper */
  );
};

export default Dashboard;
