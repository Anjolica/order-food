// import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
// import { DatePipe } from '@angular/common';

// export class CustomNgbDateParserFormatter extends NgbDateParserFormatter {
// 	datePipe = new DatePipe('en_IN');
// 	constructor( dateFormatString: string) {
// 		super();
// 	}
// 	format(date: NgbDateStruct): string {
// 		if (date === null) {
// 			return '';
// 		}
// 		try {
   
//       return this.datePipe.transform(new Date(date.year, date.month - 1, date.day), 'dd-MM-yyyy');
// 		} catch (e) {  
// 			return '';
// 		}
// 	}

// 	parse(value: string): NgbDateStruct {
//         console.log('value',value);
// 		let returnVal: NgbDateStruct;
// 		if (!value) {
//             console.log('value 11 ',value);
// 			returnVal = null;
// 		} else {
//             console.log('value 22 ',value);
// 			try {
// 				let dateParts = this.datePipe.transform(value, 'd-m-y').split('-');
//                 console.log('dateParts',dateParts);
// 				returnVal = { day: parseInt(dateParts[1]) , month: parseInt(dateParts[0]),year: parseInt(dateParts[2]) };
//                 console.log('returnVal',returnVal);
//             } catch (e) {
// 				returnVal = null;
// 			}
// 		}
// 		return returnVal;
// 	}
// }