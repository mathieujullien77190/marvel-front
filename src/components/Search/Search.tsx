import type { Choice, SearchProps } from "./types";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

export const Search = ({
  value,
  placeholder,
  choices = [],
  onChange,
}: SearchProps) => {
  return (
    <div className="w-1/2">
      <ReactSearchAutocomplete
        inputSearchString={value}
        placeholder={placeholder}
        items={choices}
        showNoResults={false}
        onSearch={onChange}
        onSelect={(choice: Choice) => {
          onChange(choice.name);
        }}
        autoFocus
        showClear
        formatResult={(item: Choice) => <span>{item.name}</span>}
        styling={{
          border: "1px solid var(--color-border-strong)",
          borderRadius: "var(--radius)",
          backgroundColor: "var(--color-canvas)",
          boxShadow: "none",
          fontSize: "14px",
          fontFamily: "Inter",
          iconColor: "var(--color-ink-light)",
          zIndex: 2,
        }}
      />
    </div>
  );
};
