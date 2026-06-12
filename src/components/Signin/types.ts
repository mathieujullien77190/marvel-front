export enum MODE {
  signin = "signin",
  signup = "signup",
}

export type SigninProps = {
  show: boolean;
  onClose: () => void;
};

export type User = {
  username?: string;
  email: string;
  password: string;
};
