import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent } from './filters/filters.component';
import { CharacterComponent } from './character/character.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { AtomsModule } from '../atoms/atoms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginationSimpleComponent } from './pagination-simple/pagination-simple.component';
import { PaginationFullComponent } from './pagination-full/pagination-full.component';

@NgModule({
  declarations: [
    FiltersComponent,
    PaginationSimpleComponent,
    PaginationFullComponent,
    CharacterComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule,
    AtomsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FiltersComponent,
    PaginationSimpleComponent,
    PaginationFullComponent,
    CharacterComponent,
  ],
})
export class MoleculesModule {}
