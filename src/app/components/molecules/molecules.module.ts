import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters/filters.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CharacterComponent } from './character/character.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { AtomsModule } from '../atoms/atoms.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FiltersComponent, PaginationComponent, CharacterComponent],
  imports: [CommonModule, PipesModule, DirectivesModule, AtomsModule, ReactiveFormsModule],
  exports: [FiltersComponent, PaginationComponent, CharacterComponent],
})
export class MoleculesModule {}
