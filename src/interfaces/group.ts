export type Group = {
  id?: string;
  title: string;
  resources: string[];
};

export type GroupByIdRequest = {
  id: string;
};
