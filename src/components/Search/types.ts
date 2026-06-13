export type Choice = { id: string; name: string };

export type SearchProps = {
  value: string;
  placeholder: string;
  choices?: Choice[];
  onChange: (value: string) => void;
};
