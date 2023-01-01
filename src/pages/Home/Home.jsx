import React, { useContext, useEffect, useState } from "react";
import { requestHandler } from "../../api/requestHandler";
import { API_KEY } from "../../api/apiKey";
import { PageWrapper } from "../../components";
import Chart from "../../containers/Chart/Chart";
import { ParametersContext } from "../../App";
import { useSnackbar } from "notistack";

const Home = () => {
  const { enqueueSnackbar } = useSnackbar();

  const selectedCompany = useContext(ParametersContext);

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (selectedCompany.data.database_code) {
      requestHandler(
        {
          url: `https://data.nasdaq.com/api/v3/datasets/${selectedCompany.data.database_code}/${selectedCompany.data.dataset_code}/data.json?api_key=${API_KEY}`,
        },
        { display: enqueueSnackbar }
      ).then(
        (response) => {
          setChartData(response.dataset_data);
        },

        (err) => {
          console.log(err);
        }
      );
    }
  }, [selectedCompany, enqueueSnackbar]);

  return (
    <PageWrapper>
      <Chart data={chartData.data} />
    </PageWrapper>
  );
};

export default Home;
