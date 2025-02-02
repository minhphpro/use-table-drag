export interface IColumn {
  key: string;
  label: string | number;
  sortable?: boolean;
  minWidth?: number;
  maxWidth?: number;
  width?: number;
  className?: string;
  headerClassName?: string;
}

export interface IRow {
  [key: string]: any;
}
