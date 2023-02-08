import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTwoComponent } from './page-two.component';
import { PageTwoRoutingModule } from './page-two-routing.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [PageTwoComponent],
  imports: [CommonModule, PageTwoRoutingModule, ComponentsModule],
})
export class PageTwoModule {}
