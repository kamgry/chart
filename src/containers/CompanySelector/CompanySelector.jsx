import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../api/apiKey";
import { requestHandler } from "../../api/requestHandler";
import { CustomSelect } from "../../components";
import { alphabeticalOrder } from "../../helpers/";
import "./CompanySelector.scss";

const placeholder = "Select company";

const CompanySelector = ({ company, setCompany, setData }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [companiesList, setCompaniesList] = useState([]);

  useEffect(() => {
    requestHandler(
      {
        url: `https://data.nasdaq.com/api/v3/datasets/?api_key=${API_KEY}`,
      },
      { display: enqueueSnackbar }
    ).then(
      (response) => {
        setCompaniesList(alphabeticalOrder(response.datasets, "name"));
      },
      (err) => {
        console.log(err);
      }
    );
  }, [enqueueSnackbar]);

  const handleChange = (item) => {
    setCompany(item.target.value);

    const companyDetails = companiesList.find(
      ({ id }) => id === item.target.value
    );

    setData({
      database_code: companyDetails.database_code,
      dataset_code: companyDetails.dataset_code,
    });
  };

  return (
    <div className="company-selector">
      <CustomSelect
        items={companiesList}
        value={company}
        handleChange={handleChange}
        label={placeholder}
      />
    </div>
  );
};
export default CompanySelector;
