import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DxDataGridModule, DxCheckBoxModule } from 'devextreme-angular';
import { DxDropDownBoxModule } from 'devextreme-angular';
import { DxListModule } from 'devextreme-angular';
import { DxTabPanelModule } from 'devextreme-angular';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DxTabsModule, DxSelectBoxModule } from 'devextreme-angular';

const appRoutes: Routes = [
  {
    path: '', 
    component: TasksComponent
  },
  {
    path: 'about', 
    component: AboutComponent
  },
  {
    path: 'multi-view',
    component: DropdownComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
    DatagridComponent,
    DropdownComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    DxCheckBoxModule,
    DxDataGridModule,
    DxDropDownBoxModule,
    DxListModule,
    DxTabPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
