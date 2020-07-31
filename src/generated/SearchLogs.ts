/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchLogs
// ====================================================

export interface SearchLogs_searchLogs {
  __typename: "Log";
  Message: string | null;
  Source: string | null;
  CustomerId: number | null;
}

export interface SearchLogs {
  searchLogs: SearchLogs_searchLogs[];
}

export interface SearchLogsVariables {
  search: string;
}
