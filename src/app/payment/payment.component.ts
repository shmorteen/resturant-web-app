import { Component, OnInit } from '@angular/core';
import { Flutterwave, InlinePaymentOptions, PaymentSuccessResponse } from 'flutterwave-angular-v3';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  publicKey = "FLWPUBK_TEST-db68cd098343262bb15b5fb684c9ad43-X";
  customerDetails = { name: 'Demo Customer Name', email: 'customer@mail.com', phone_number: '08100000000'}
  customizations = {title: 'Customization Title', description: 'Customization Description', logo: 'https://flutterwave.com/images/logo-coloured.svg'}
  meta = {'consumer_id': '7898', 'customer_mac': 'kjs9s8ss7dd'}
  paymentData: InlinePaymentOptions ={
    public_key: this.publicKey,
    tx_ref: this.generateRefrence(),
    amount: 10,
    currency: 'NGN',
    payment_options: 'card,ussd',
    redirect_url:  '',
    meta: this.meta,
    customer: this.customerDetails,
    customizations: this.customizations,
    callback: this.makePayementCallback,
    onclose: this.closedPaymentModel,
    callbackContext: this
  }

  constructor(private flutterwave: Flutterwave) { }

  ngOnInit(): void {
  }
  
  makePayement(){
    this.flutterwave.inlinePay(this.paymentData)
  }
  makePayementCallback(response: PaymentSuccessResponse): void {
    console.log("Pay", response);
    this.flutterwave.closePaymentModal(5)
  }
  closedPaymentModel(): void {
    console.log('payment is closed');
  }
  generateRefrence(): string {
    let date = new Date();
    return date.getTime().toString();
  }
}
