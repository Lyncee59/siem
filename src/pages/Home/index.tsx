import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { useDebounce } from "../../hooks/useDebounce";
import PublicLayout from "../../layouts/Public";
import { DataTable, DataCell, DataRow } from "../../components/DataTable";
import Input from "../../components/Input";
import { SearchLogs, SearchLogsVariables } from "../../generated/SearchLogs";
import StatusBar from "./StatusBar";
import { SearchQuery } from "./query";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const Home = () => {
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search, 500);

  const { loading, error, data } = useQuery<SearchLogs, SearchLogsVariables>(
    SearchQuery,
    {
      variables: { search: debounceSearch },
    }
  );

  return (
    <PublicLayout>
      <StatusBar loading={loading} error={error} />
      <SearchContainer>
        <Input value={search} onChange={setSearch} />
      </SearchContainer>
      {data && (
        <DataTable>
          <DataRow type="header">
            <DataCell width="60%">Message</DataCell>
            <DataCell width="20%">Source</DataCell>
            <DataCell width="10%">CustomerId</DataCell>
            <DataCell width="10%">CreatedAt</DataCell>
          </DataRow>
          {data.searchLogs.map((d) => (
            <DataRow type="data">
              <DataCell width="60%">{d.Message}</DataCell>
              <DataCell width="20%">{d.Source}</DataCell>
              <DataCell width="10%">{d.CustomerId}</DataCell>
              <DataCell width="10%"></DataCell>
            </DataRow>
          ))}
        </DataTable>
      )}
    </PublicLayout>
  );
};

export default Home;
