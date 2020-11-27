import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ng6-toastr-notifications';
import { LoginComponent } from './login/login.component';
import { NgbActiveModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from './services/common.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {DataTableModule} from "angular-6-datatable";
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import {NgxPrintModule} from 'ngx-print';
import { ModalModule } from 'ngb-modal';
import { AddOrderComponent } from './add-order/add-order.component';
import { BillGenerateComponent } from './bill-generate/bill-generate.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { PrintBillComponent } from './print-bill/print-bill.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdmindashboardComponent,
    AddOrderComponent,
    BillGenerateComponent,
    FoodMenuComponent,
    PrintBillComponent,
    
    
  ],

  entryComponents:[
    
  ],

  
  imports: [
    BrowserModule ,
    NgxPrintModule,
    AppRoutingModule,
    FormsModule,NgxPaginationModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule,

    NgbModule,Ng2SearchPipeModule,DataTableModule,ToastrModule.forRoot()
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }  
