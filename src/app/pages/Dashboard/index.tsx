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
    createData("12/09/2019","AB Technology","John Doe","PAD","99823982373","Gujarat","Active","btn-active"),
    createData("12/09/2019","AB Technology","John Doe","PAD","99823982373","Gujarat","Pending","btn-pending"),
    createData("12/09/2019","AB Technology","John Doe","PAD","99823982373","Gujarat","Cancelled","btn-cancelled"),
    createData("12/09/2019","AB Technology","John Doe","PAD","99823982373","Gujarat","Completed","btn-completed"),
    createData("12/09/2019","AB Technology","John Doe","PAD","99823982373","Gujarat","Active","btn-active"),
    createData("12/09/2019","AB Technology","John Doe","PAD","99823982373","Gujarat","Active","btn-active"),
    createData("12/09/2019","AB Technology","John Doe","PAD","99823982373","Gujarat","Pending", "btn-pending"),
  ];
  return (
    /* Start Wrapper */
    <div className="wrapper">
      <Helmet>
        <title>Dashboard | Theme</title>
      </Helmet>
      <div id="overlay" onClick={() => toggleOverlay()}></div>
      <Header />
      <Sidebar />
      {/* Start Dashboard  */}
      <div id="main">
        <div className="dashboard-content">
          <Grid container spacing={4} className="admin-content">
            <Grid item xs={12} className=" dashboard-sort">
              <h3 className="dashboard-header">Dashboard</h3>
              <span className="select-div">
                <FormLabel>Sort by</FormLabel>
                <FormControl variant="filled">
                  <Select
                    id="entry"
                    value={select}
                    autoWidth={true}
                    className="select-entry"
                    onChange={handleChangeSelect}
                  >
                    <MenuItem value="Today">Today</MenuItem>
                    <MenuItem value="Yesterday">Yesterday</MenuItem>
                    <MenuItem value="NextDay">NextDay</MenuItem>
                  </Select>
                </FormControl>
              </span>
            </Grid>
            <Grid item xs={12} lg={4} sm={6} md={6} xl>
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
                      <div className="visitors-number">120,570</div>
                      <div className="visitors-text">Visitors</div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} lg={4} sm={6} md={6} xl>
              <div className="card visitors">
                <div className="card-body">
                  <div className="content-box">
                    <img src={SalesIcon} alt="sales" className="stats-img" />
                    <img src={Sales1Icon} alt="sales" className="stats-img-1" />
                    <div className="visitors-div">
                      <div className="visitors-number">150</div>
                      <div className="visitors-text">Sales</div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item lg={4} xs={12} sm={6} md={6} xl>
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
                      <div className="visitors-number">3,200</div>
                      <div className="visitors-text">Earnings</div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item lg={6} xs={12} sm={6} md={6} xl>
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
                      <div className="visitors-number">210</div>
                      <div className="visitors-text">Avg Sale</div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item lg={6} xs={12} sm={12} md={12} xl>
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
                      <div className="visitors-number">20</div>
                      <div className="visitors-text">Total Loss</div>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xl={5} xs={12} className="sales-grid1">
              <div className="card sales-card-1">
                <div className="card-body">
                  <div className="analytics-div">
                    <h3>Sales</h3>
                    <img
                      src={ThreeDotIcon}
                      alt="three-dot"
                      className="dot-img"
                    />

                    <img
                      className="analytic-img"
                      src={SalesGraph1Icon}
                      alt="sales-graph"
                    />
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xl={7} xs={12} className="sales-grid2">
              <div className="card sales-card-2">
                <div className="card-body">
                  <div className="analytics-div ">
                    <h3>Sales</h3>
                    <img
                      src={ThreeDotIcon}
                      alt="three-dot"
                      className="dot-img"
                    />

                    <img
                      className="sales-graph"
                      src={SalesGraph2Icon}
                      alt="sales-graph"
                    />
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} className="table-grid">
              <div className="card analytic-card">
                <div className="card-body">
                  <div className="table-div">
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
                                  <span className={row.classBtn}>
                                    {row.status}
                                  </span>
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
          </Grid>
          <Footer />
        </div>
      </div>
      {/* End Dashboard  */}
    </div>
    /* End Wrapper */
  );
};

export default Dashboard;
