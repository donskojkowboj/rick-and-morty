export interface NextPageParams {
  params?: { slug: string };
  searchParams?: Record<string, string> & SearchParamsPage;
}

export interface SearchParamsPage {
  page?: string;
}
