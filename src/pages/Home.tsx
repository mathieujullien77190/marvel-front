import Header from "@/components/Header";
import ListCharacters from "@/components/ListCharacters";
import { Wrapper } from "@/components/Wrapper";
import { useFetch } from "@/hooks/useFetch";
import { getCharacteres } from "@/services/getCharacters";
import type { CharactersResponse } from "@/types";

export const Home = () => {
  const { data } = useFetch<CharactersResponse>(getCharacteres);

  return (
    <>
      <Header />{" "}
      <Wrapper>
        {data && <ListCharacters total={data.count} list={data?.results} />}
      </Wrapper>
    </>
  );
};
