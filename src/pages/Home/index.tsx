import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";
import { useDebounce } from "../../hooks/useDebounce";
import PublicLayout from "../../layouts/Public";
import { DataTable, DataCell, DataRow } from "../../components/DataTable";
import Input from "../../components/Input";
import StatusBar from "./StatusBar";

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5px 25px;
`;

const WELCOME = gql`
  query SearchLogs($search: String!) {
    searchLogs(search: $search) {
      Message
      Source
      CustomerId
    }
  }
`;

const Home = () => {
  const [search, setSearch] = useState("");
  const debounceSearch = useDebounce(search, 500);

  const { loading, error, data } = useQuery(WELCOME, {
    variables: { search: debounceSearch },
  });

  return (
    <PublicLayout>
      <StatusBar loading={loading} />
      <SearchContainer>
        <Input value={search} onChange={setSearch} />
      </SearchContainer>
      {data && (
        <DataTable>
          <DataRow type="header">
            <DataCell width="60%">Message</DataCell>
            <DataCell width="20%">Source</DataCell>
            <DataCell width="20%">CustomerId</DataCell>
          </DataRow>
          {data.searchLogs.map((d) => (
            <DataRow type="data">
              <DataCell width="60%">{d.Message}</DataCell>
              <DataCell width="20%">{d.Source}</DataCell>
              <DataCell width="20%">{d.CustomerId}</DataCell>
            </DataRow>
          ))}
        </DataTable>
      )}
    </PublicLayout>
  );
};

export default Home;
