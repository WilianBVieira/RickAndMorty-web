import { IRickAndMorty } from "../../interfaces/char";

export interface DetailsParam {
  data: IRickAndMorty | undefined;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      details: DetailsParam;
    }
  }
}
