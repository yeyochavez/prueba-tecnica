import { IPagination } from './pagination.interface';
import { ICharacter } from './character.interface';

export interface IResponse {
  info: IPagination;
  results: ICharacter [];
}
