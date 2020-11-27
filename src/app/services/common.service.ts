import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrManager } from 'ng6-toastr-notifications';
import { environment } from 'src/environments/environment';
@Injectable({
	providedIn: 'root'  
})

export class CommonService {
	token: string;
	usertypes:string;
	vendorcodes:string;
	inwordcode:string;

	constructor(public httpClient: HttpClient, public toastr: ToastrManager) {
		//
	}

	loggedIn() {
	  return this.token != null;
	}

	getsinglepolist(data: any) {
		// //return this.httpClient.post(environment.apiUrl + 'user/getsinglepolist', data,{headers:{'x-access-token':this.token}});
	}
	getsingleitemlist(data: any) {
		// //return this.httpClient.post(environment.apiUrl + 'user/getpoitemlist', data,{headers:{'x-access-token':this.token}});
	}

	getpoCheckStatus(data: any) {
		// //return this.httpClient.post(environment.apiUrl + 'user/getpoCheckStatus', data,{headers:{'x-access-token':this.token}});
	}



	getpocloseitemlist(data: any) {
		// //return this.httpClient.post(environment.apiUrl + 'user/getpocloseitemlist', data,{headers:{'x-access-token':this.token}});
	}
	getInvoiceList(data: any) {
		//return this.httpClient.post(environment.apiUrl + 'invoice/getInvoiceList', data,{headers:{'x-access-token':this.token}});
	}

	getList(data:any) {
		//return this.httpClient.post(environment.apiUrl + 'invoice/getList', data,{headers:{'x-access-token':this.token}});
	}

	getVendorInvoiceList(data: any) {
		//return this.httpClient.post(environment.apiUrl + 'invoice/getVendorInvoiceList', data,{headers:{'x-access-token':this.token}});
	}


	getinwardInvoiceList(data: any) {
		//return this.httpClient.post(environment.apiUrl + 'invoice/getinwardInvoiceList', data,{headers:{'x-access-token':this.token}});
	}


	getShortCloseItemList(data: any) {
		//return this.httpClient.post(environment.apiUrl + 'invoice/getShortCloseItemList', data,{headers:{'x-access-token':this.token}});
	}


	getInvoiceItemList(data: any) {
		//return this.httpClient.post(environment.apiUrl + 'invoice/invoiceitemlist', data,{headers:{'x-access-token':this.token}});
	}
	getSingleInvoiceList(data: any) {
		//return this.httpClient.post(environment.apiUrl + 'invoice/getSingleInvoiceList', data,{headers:{'x-access-token':this.token}});
	}
	getPoList(data: any) {
		//return this.httpClient.post(environment.apiUrl + 'user/getallpolist',data,{headers:{'x-access-token':this.token}});
	}
	getVendorList() {
		//return this.httpClient.get(environment.apiUrl + 'user/getVendorList',{headers:{'x-access-token':this.token}});
	}
	getclosepolist(data) {
		//return this.httpClient.post(environment.apiUrl + 'user/getclosepolist',data,{headers:{'x-access-token':this.token}});
	}

	getshortclosepolist(data) {
		//return this.httpClient.post(environment.apiUrl + 'user/getshortclosepolist',data,{headers:{'x-access-token':this.token}});
	}


	getpocounter(data:any) {
		//return this.httpClient.post(environment.apiUrl + 'user/getpocounter',data,{headers:{'x-access-token':this.token}});
	}

	getSingleVendorList(data: any) {
		//return this.httpClient.post(environment.apiUrl + 'user/getSingleVendorList', data,{headers:{'x-access-token':this.token}});
	}

	poItemlist(data: any) {
		//return this.httpClient.post(environment.apiUrl + 'user/poItemlist', data,{headers:{'x-access-token':this.token}});
	}


	pocloseItemlist(data: any) {
		//return this.httpClient.post(environment.apiUrl + 'user/pocloseItemlist', data,{headers:{'x-access-token':this.token}});
	}
	
	getsearchclosepolist(data: any) {
		//return this.httpClient.post(environment.apiUrl + 'user/getsearchclosepolist', data,{headers:{'x-access-token':this.token}});
	}
	getsearchpolist(data: any) {
		//return this.httpClient.post(environment.apiUrl + 'user/getsearchpolist', data,{headers:{'x-access-token':this.token}});
	}

	postData(data: any) {
		//return this.httpClient.post<any>(environment.apiUrl + 'invoiceItems/saveItems', data);
	}

	postUpdateUser(data: any) {
		//return this.httpClient.post<any>(environment.apiUrl + 'user/UpdateUser', data);
	}

	postDataSaveuser(data: any) {
		//return this.httpClient.post<any>(environment.apiUrl + 'user/saveUser', data);
	}


	UpdateStatus(data: any) {
		//return this.httpClient.post<any>(environment.apiUrl + 'user/UpdateStatus', data,{headers:{'x-access-token':this.token}});
		}

	showalert(message: string, type: string) {
		if (type == 'success')
			this.toastr.successToastr(message, 'Success!', { position: 'top-center', animate: 'slideFromBottom', toastTimeout: 2000 });
		else
			this.toastr.warningToastr(message, 'Warning!', { position: 'top-center', animate: 'slideFromBottom', toastTimeout: 2000 });
	}

	login(data:any){
	   
		//return this.httpClient.post(environment.apiUrl + 'user/checkUser',data);
	}
	checkInvoiceNo(data: any) {
		//return this.httpClient.post(environment.apiUrl + 'invoice/checkInvoiceNo', data,{headers:{'x-access-token':this.token}});
	}
	checkVendorCode(data: any) {
		//return this.httpClient.post(environment.apiUrl + 'user/checkVendorCode', data);
	}
}


