export type TUserInfo = {
  id: number;
  first_name: string;
  email: string;
  avatar: string;
};

export type TUserCardProps = {
  userInfo: TUserInfo;
};

export type TResponseInfo = {
  page: number;
  total_pages: number;
  data: TUserInfo[];
};
