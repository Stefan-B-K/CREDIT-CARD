import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DateFormControl } from "../DateFormControl";
import { CardNumberControl } from "../CardNumberControl";
import { SecurityCodeControl } from "../SecurityCodeControl";

@Component({
    selector: 'app-card-form',
    templateUrl: './card-form.component.html',
    styleUrls: ['./card-form.component.css']
})
export class CardFormComponent {
    cardFrom = new FormGroup({
        name: new FormControl('', [
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(20),
            Validators.pattern(/^[a-zA-Z]* [a-zA-Z]*$/)
        ]),
        cardNumber: new CardNumberControl('', [
            Validators.required,
            Validators.pattern(/^\d{4}\-\d{4}\-\d{4}\-\d{4}$/)
        ]),
        expiration: new DateFormControl("", [
            Validators.required,
            Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
        ]),
        securityCode: new SecurityCodeControl('', [
            Validators.required,
            Validators.pattern(/^\d{3}$/)
        ])
    })

    onSubmit() {
        alert('****** SUBMITTED *******')
    }
}
