import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters/characters.component';
import { MoleculesModule } from '../molecules/molecules.module';

@NgModule({
  declarations: [CharactersComponent],
  imports: [CommonModule, MoleculesModule],
  exports: [CharactersComponent],
})
export class OrganismsModule {}
