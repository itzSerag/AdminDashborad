import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "./../../theme";
import { mockDataInvoices } from "./../../data/mockingData";
import { useTheme } from "@mui/material";
import { Header } from "../../components/Header";

export const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID" },

        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },

        {
            field: "cost",
            headerName: "Cost",
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]}>
                    ${params.row.cost}
                </Typography>
            )
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },

        {
            field: "date",
            headerName: "Date",
            flex: 1
        }
    ];

    return (
        <Box m="20px">
            <Header
                title="INVOICES"
                subtitle="List of Invoices"
            />
            <Box
                m="40px 0 0 0"
                height="70vh"
                sx={{

                    "& .MuiDataGrid-root": {
                        border: "none",

                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                        alignContent: "center"
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                        alignItems: "center"
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.primary[400],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },

                }}
            >
                <DataGrid
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                />
            </Box>
        </Box>
    );
};

