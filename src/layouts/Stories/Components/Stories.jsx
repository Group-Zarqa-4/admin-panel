/* eslint-disable */

import MDBox from 'components/MDBox'
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import React from 'react'
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CustomPaginationActionsTable from './CustomPaginationActionsTable'
import MDTypography from 'components/MDTypography';

function Stories() {
  return (
    <>
    
      <div>
      <DashboardLayout>
          <DashboardNavbar absolute />
          <Grid style={{ paddingTop: "5rem" }} item xs={12}>
        <Card>
          <MDBox
            mx={2}
            mt={-3}
            py={3}
            px={2}
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="info"
          >
            <MDTypography variant="h6" color="white">
              Stories Table
            </MDTypography>
          </MDBox>
          <MDBox pt={3}>
        <MDBox mb={6} />
                <CustomPaginationActionsTable />
                </MDBox>
        </Card>
      </Grid>
      </DashboardLayout>
      </div>
      </>
  )
}

export default Stories