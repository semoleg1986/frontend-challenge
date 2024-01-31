export interface ICat {
  id: string;
  url: string;
  width: number;
  height: number;
  isFavorite?: boolean;
}

export interface ICatResult {
  cats: ICat[];
}
