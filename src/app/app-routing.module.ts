import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AuthGuard } from './auth-guard';
import { AddOrderComponent } from './add-order/add-order.component';
import { BillGenerateComponent } from './bill-generate/bill-generate.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { PrintBillComponent } from './print-bill/print-bill.component';


const routes: Routes = [    
	{ path: '', component: LoginComponent },
	{
		path: 'adminDashboard/:username/:password',
		component: AdmindashboardComponent,
	},
	
	{
		path: 'addOrder',
		component: AddOrderComponent,
	},
	{
		path: 'billGenerate',
		component: BillGenerateComponent,
	},
	{
		path: 'foodMenu',
		component: FoodMenuComponent,
	},
	{
		path: 'printBill',
		component: PrintBillComponent
	}
	
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
