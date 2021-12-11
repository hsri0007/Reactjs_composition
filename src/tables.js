import MUIDataTable from "mui-datatables";
import React from "react";
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import { Button } from "react-bootstrap";
import EditComponent from "./editComponent";

const Tables = () => {
  const [Headers, setHeaders] = React.useState([]);
  const [state, setState] = React.useState([]);
  const [size, setSize] = React.useState(10);
  const [offset, setOffset] = React.useState(0);
  const [edit, setEdit] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [HeadersC, setHeadersC] = React.useState([]);
  const [stateC, setStateC] = React.useState([]);
  const [toggle, setToggle] = React.useState(true);
  const tableRef = React.useRef(null);

  // React.useEffect(() => {
  //   setState({ ...state, data: getDataSet() });
  // }, []);

  // let mainHeaders = Headers.length
  //   ? Headers.map((res) => {
  //       return {
  //         name: res,
  //         label: res,
  //         options: {
  //           filter: true,
  //           sort: true,
  //         },
  //       };
  //     })
  //   : [];

  let data = "";
  let data2 = "";
  // let toggle =true

  const handleToggle = () => {
    // setToggle((prev)=>setToggle(!prev))
    // if(tableRef.current){
    //   tableRef.current.onQueryChange()

    // }

    console.log(tableRef);
  };

  const DynamicHeaders = (resp) => {
    const Headers = resp[0].map((res) => {
      return {
        name: res,
        label: res,
        options: {
          filter: true,
          sort: true,
          serverSide: true,

          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <>
                {toggle ? (
                  <p>{value}</p>
                ) : (
                  <input
                    type={"text"}
                    defaultValue={value}
                    style={{ outline: "none" }}
                    variant="contained"
                    // color={EDIT_BUTTON_COLOR}
                    onChange={(e) => {
                      // setOpen(true);
                      // setEdit(true)
                      HandleChange(
                        tableMeta.rowIndex,
                        tableMeta.columnIndex,
                        e
                      );
                      // rowIndex: 0, columnIndex: 2

                      // setLoading(true);
                      // findOneById(tableMeta.rowData[0], COURSE, FIND_ONE).then(
                      //   (data) => {
                      //     setActiveRecord({ ...data });
                      //     setLoading(false);
                      //   }
                      // );
                    }}
                  />
                )}
              </>
            );
          },
        },
      };
    });

    data2 = Headers;

    setHeaders(Headers);
    // setDynamicRows(resp);

    if (Headers.length > 0) {
      const returnObj = (resp) => {
        const obj = resp.reduce(function (acc, cur, i) {
          acc[Headers[i].name] = cur;
          return acc;
        }, {});

        return obj;
      };
      const rowsPlayer = resp
        .filter((res, i) => i !== 0)
        .map((res, i) => returnObj(res));
      setState(rowsPlayer);
      data = rowsPlayer;
      console.log(rowsPlayer);
    } else {
      alert("no headers");
    }
  };

  const fileHandler = async (event) => {
    if (event.target.files[0]) {
      let fileObj = event.target.files[0];

      //just pass the fileObj as parameter
      ExcelRenderer(fileObj, (err, resp) => {
        if (err) {
          console.log(err);
        } else {
          DynamicHeaders(resp.rows);

          // Axios.post(
          //   "http://addonad.in:8080/Employee-0.1/admin/uploadExcelData",
          //   {
          //     rows: [],
          //     cols: [],
          //   }
          // ).then((res) => console.log(res.data));
        }
      });
    }
  };

  const togglePage = async (number, rowsPerPage) => {
    console.log(rowsPerPage);
    console.log(number);
    setSize(rowsPerPage);
    setOffset(number * rowsPerPage);
  };

  const getItemById = (valv) => {
    const resp = state.find((res) => res.orderId === valv);

    setStateC(resp);
    setHeadersC(Headers);
  };

  const vColumn = [
    ...Headers,
    {
      name: "Action",
      options: {
        filter: true,
        sort: true,

        serverSide: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <Button
              style={{ outline: "none" }}
              variant="contained"
              // color={EDIT_BUTTON_COLOR}
              onClick={() => {
                setOpen(true);
                setEdit(true);
                getItemById(tableMeta.rowData[0]);

                // setLoading(true);
                // findOneById(tableMeta.rowData[0], COURSE, FIND_ONE).then(
                //   (data) => {
                //     setActiveRecord({ ...data });
                //     setLoading(false);
                //   }
                // );
              }}
            >
              Edit
            </Button>
          );
        },
      },
    },
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const HandleChange = (arg1, arg2, e) => {
    const refObj = data[arg1];

    console.log((refObj[data2[arg2].name] = e.target.value));
    setState([...data, refObj]);
  };

  return (
    <div>
      {JSON.stringify(toggle)}
      <Button onClick={() => alert(JSON.stringify(state))}>submit</Button>
      <Button variant="outlined" onClick={() => handleToggle()}>
        Switch
      </Button>
      <input
        style={{ margin: "20px" }}
        type="file"
        onChange={fileHandler}
        accept=".csv"
      />
      {JSON.stringify(size)},{JSON.stringify(offset)}
      <MUIDataTable
        title="table"
        ref={tableRef}
        data={state}
        columns={vColumn}
        options={{
          filter: true,
          filterType: "dropdown",
          responsive: "standard",
          serverSide: true,

          rowsPerPageOptions: [5, 10, 25, 50, 100],

          onTableChange: async (action, tableState) => {
            togglePage(tableState.page, tableState.rowsPerPage);
          },
          jumpToPage: true,
          search: true,
          draggableColumns: {
            enabled: true,
          },
          sort: true,
          count: 500,
        }}
      />
      <EditComponent
        open={open}
        handleClose={handleClose}
        rows={stateC}
        headers={HeadersC}
      />
    </div>
  );
};

export default Tables;
