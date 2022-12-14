import { IRickAndMorty } from "./char";
import { IInfo } from "./info";

export interface IReq {
  info: IInfo;
  results: [IRickAndMorty] | undefined;
}
