import { Component, Input } from '@angular/core';
import { ICharacter } from '../../../shared/interfaces/character.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent {
  @Input() characters: ICharacter[] = [];

  constructor() {}
}
