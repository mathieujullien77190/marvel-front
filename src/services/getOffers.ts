import type { OffersResponse, SearchParams } from "@/types";
import { api } from "./fetch";

export const getOffers = (
  searchParams: SearchParams,
): Promise<OffersResponse> => api.get(`/offers`, { params: searchParams });
