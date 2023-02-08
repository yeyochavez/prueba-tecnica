import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneRoutingModule } from './page-one-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { PageOneComponent } from './page-one.component';

@NgModule({
  declarations: [PageOneComponent],
  imports: [CommonModule, PageOneRoutingModule, ComponentsModule],
})
export class PageOneModule {}
