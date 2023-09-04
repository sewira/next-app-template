import React from "react";
import HeaderDashboard from "./_components/HeaderDashboard";
import TableDashboard from "./_components/TableDashboard";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <React.Fragment>
      <HeaderDashboard />
      <TableDashboard />
    </React.Fragment>
  );
};

export default DashboardPage;
