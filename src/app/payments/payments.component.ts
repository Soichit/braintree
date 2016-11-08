import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

declare var braintree:any;


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  clientToken: any;
  price: number;

  constructor(private httpService: HttpService) { }

  // retrieve client token
  // subscribe to onPaymentMethodReceived callback???
  ngOnInit() {

    this.price = 4.50;
    // http service to retrieve token
    this.httpService.getData()
      .subscribe(
        data => {
          //console.log(data);
          this.clientToken = data;
            braintree.setup(this.clientToken, "dropin", {
              container: "payment-form"
            });
        }
      );
  }
}
