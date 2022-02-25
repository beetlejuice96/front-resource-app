export type ResourceByIdRequest = {
  id: string;
};

export type Resource = {
  id: string;
  title: string;
  description: string;
  url: string;
  groups: string;
};
