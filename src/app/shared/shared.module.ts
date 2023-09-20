import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Prime
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MenubarModule,
    CarouselModule,
    ButtonModule,
    TabMenuModule,
    TableModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    CheckboxModule,
    RadioButtonModule
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MenubarModule,
    CarouselModule,
    ButtonModule,
    TabMenuModule,
    TableModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    CheckboxModule,
    RadioButtonModule
  ],
})
export class SharedModule { }
