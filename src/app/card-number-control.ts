import { FormControl } from "@angular/forms";

export class CardNumberControl extends FormControl {

    override setValue (value: string | null, options: any) {

        if (!value) {
            super.setValue('', { ...options, emitModelToViewChange: true })
            return
        }

        const cardRegex = /^\d{0,4}(\-|)\d{0,4}(\-|)\d{0,4}(\-|)\d{0,4}$/gi

        if (!value.match(cardRegex)) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true })
            return
        }

        const dashes = [4, 9, 14]

        if (dashes.includes(value.length)) {
            if (this.value.length === value.length + 1) {
                super.setValue(value.slice(0, -1), { ...options, emitModelToViewChange: true })
            } else {
                super.setValue(value + '-', { ...options, emitModelToViewChange: true })
            }
            return
        }

        super.setValue(value, options)
    }
}
