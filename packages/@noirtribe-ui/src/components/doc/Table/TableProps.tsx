import React from "react";

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement> {}

export interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export interface TableFooterProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement> {}

export interface TableHeadProps
  extends React.ThHTMLAttributes<HTMLTableDataCellElement> {}

export interface TableCellProps
  extends React.TdHTMLAttributes<HTMLTableDataCellElement> {}

export interface TableCaptionProps
  extends React.HTMLAttributes<HTMLTableSectionElement> {}
