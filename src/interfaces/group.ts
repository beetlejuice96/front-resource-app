export type Group = {
  id?: string;
  title: string;
  resources: string[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type GroupByIdRequest = {
  id: string;
};
