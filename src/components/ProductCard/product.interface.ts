export interface IParam {
  name: string;
  value: string;
}

export default interface IProduct {
  id: number;
  code: string;
  imgUrl: string;
  availability: boolean;
  title: string;
  params: IParam[];
  price: number;
  inFav: boolean;
  inComparison: boolean;
}