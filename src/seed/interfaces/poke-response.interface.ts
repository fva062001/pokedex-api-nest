export class PokeResult {
  name: string;
  url: string;
}

export class PokeResponse {
  count: number;
  next: string;
  previous: string;
  results: PokeResult[];
}
