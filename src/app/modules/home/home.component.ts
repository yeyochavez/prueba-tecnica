import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { CharactersService } from '../../shared/https/characters.service';
import { ICharacter } from '../../shared/interfaces/character.interface';
import { IPagination } from '../../shared/interfaces/pagination.interface';
import { IResponse } from '../../shared/interfaces/reponse.interface';
import { LoadingBarService } from '../../shared/services/loading-bar.service';
import { IFilterCharacter } from '../../shared/interfaces/filter-character.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  characters: ICharacter[] = [];

  pagination?: IPagination;

  filtersCharacters?: IFilterCharacter;

  page = 1;

  constructor(private _charactersService: CharactersService) {
    this.setCharacters();
  }

  async setCharacters(): Promise<void> {
    LoadingBarService.emmitLoading(true);
    await this._charactersService
      .filter(this.filterParams())
      .then((response: IResponse) => {
        this.characters = response?.results || [];
        this.pagination = response?.info;
      })
      .catch(() => {
        this.characters = [];
        this.pagination = undefined;
      });
    LoadingBarService.emmitLoading(false);
  }

  handlerFiltersCharacters(filters: IFilterCharacter): void {
    this.filtersCharacters = filters;
    this.page = 1;
    this.setCharacters();
  }

  handlerChangePage(value: number): void {
    this.page = value;
    this.setCharacters();
  }

  private filterParams(): HttpParams {
    return new HttpParams()
    .set('name', this.filtersCharacters?.name || '')
    .set('status', this.filtersCharacters?.status || '')
    .set('page', this.page);
  }
}
