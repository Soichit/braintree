import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";

declare var braintree:any;


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  //clientToken: any;
  //integration: any

  constructor(private httpService: HttpService) { }

  // retrieve client token
  // subscribe to onPaymentMethodReceived callback???
  ngOnInit() {
  //http service to retrieve token
    // this.httpService.getData()
    //   .subscribe(
    //     data => {
    //       console.log(data);
    //       console.log(data.body);
    //       this.clientToken = data;
    //         braintree.setup(this.clientToken, "dropin", {
    //           container: "payment-form"
    //         });
    //     }
    //   );
    
    // test token
    var clientToken = "eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiI3N2ZmNTdkZTZmNGJiN2RjYWUwMDJmZWMzNTVhMTYxMzRmOTE0YTlhMjlmMTI5ODg5MjQ4ZGVmNWU4ZDY3NzA4fGNyZWF0ZWRfYXQ9MjAxNi0xMS0wOFQwMjo0NDowNi4zMzE3OTg5NzYrMDAwMFx1MDAyNm1lcmNoYW50X2lkPWQ3YjZxNWRneDZoZGpoaHdcdTAwMjZwdWJsaWNfa2V5PW1tanB3dGs5azVtbXZzd3YiLCJjb25maWdVcmwiOiJodHRwczovL2FwaS5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tOjQ0My9tZXJjaGFudHMvZDdiNnE1ZGd4Nmhkamhody9jbGllbnRfYXBpL3YxL2NvbmZpZ3VyYXRpb24iLCJjaGFsbGVuZ2VzIjpbXSwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzL2Q3YjZxNWRneDZoZGpoaHcvY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vY2xpZW50LWFuYWx5dGljcy5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tL2Q3YjZxNWRneDZoZGpoaHcifSwidGhyZWVEU2VjdXJlRW5hYmxlZCI6dHJ1ZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiQmVsbGhhcHAiLCJjbGllbnRJZCI6bnVsbCwicHJpdmFjeVVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS9wcCIsInVzZXJBZ3JlZW1lbnRVcmwiOiJodHRwOi8vZXhhbXBsZS5jb20vdG9zIiwiYmFzZVVybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXNzZXRzVXJsIjoiaHR0cHM6Ly9jaGVja291dC5wYXlwYWwuY29tIiwiZGlyZWN0QmFzZVVybCI6bnVsbCwiYWxsb3dIdHRwIjp0cnVlLCJlbnZpcm9ubWVudE5vTmV0d29yayI6dHJ1ZSwiZW52aXJvbm1lbnQiOiJvZmZsaW5lIiwidW52ZXR0ZWRNZXJjaGFudCI6ZmFsc2UsImJyYWludHJlZUNsaWVudElkIjoibWFzdGVyY2xpZW50MyIsImJpbGxpbmdBZ3JlZW1lbnRzRW5hYmxlZCI6dHJ1ZSwibWVyY2hhbnRBY2NvdW50SWQiOiJiZWxsaGFwcCIsImN1cnJlbmN5SXNvQ29kZSI6IlVTRCJ9LCJjb2luYmFzZUVuYWJsZWQiOmZhbHNlLCJtZXJjaGFudElkIjoiZDdiNnE1ZGd4NmhkamhodyIsInZlbm1vIjoib2ZmIn0=";

     braintree.setup(clientToken, "dropin", {
      container: "payment-form"
    });

    //  var c = this;

    // var clientToken = "<client_token>";

    // braintree.setup(clientToken, "dropin", {
    //   container: "payment-form",
    //   onReady: function(int) {
    //     c.integration = int
    //   }
    // })
  }
}
