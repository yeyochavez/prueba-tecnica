import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../constants/endpoints.constant';
import { HttpService } from './http.service';
import { ICharacter } from '../interfaces/character.interface';
import { IResponse } from '../interfaces/reponse.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService extends HttpService<IResponse> {
  constructor(private _httpClient: HttpClient) {
    super();
    this.httpClient = _httpClient;
    this.apiUrl = ENDPOINTS.characters;
  }
}
