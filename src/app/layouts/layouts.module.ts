import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { VerticalLayoutComponent } from './vertical/vertical.component';
import { ContentModule } from './content/content.module';
import { HeaderComponent } from './header/header.component';
import { CommonDirectives } from '../shared/directives/common-directives.module';

@NgModule({
  imports: [
    CommonModule,
    ContentModule,
    CommonDirectives
  ],
  declarations: [ VerticalLayoutComponent,NavBarComponent, FooterComponent, SidebarComponent, HeaderComponent],
  exports: [VerticalLayoutComponent]
})
export class LayoutsModule { }
