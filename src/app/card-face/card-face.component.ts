import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card-face',
    templateUrl: './card-face.component.html',
    styleUrls: ['./card-face.component.css']
})
export class CardFaceComponent {
    @Input() name: string | null = ''
    @Input() cardNumber: string | null = ''
    @Input() expiration: string | null = ''

}
