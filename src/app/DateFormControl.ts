import { FormControl } from "@angular/forms";

export class DateFormControl extends FormControl {

    override setValue (value: string, options: any) {

        const dateRegex = /^0{1}[^\d]{1}$|^1{1}[^[012]{1}$|^[^01]+$/gi

        if (value.match(dateRegex)) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true })
            return
        }

        if (value.length === 2) {
            if (this.value.length === 3) {
                super.setValue(value.slice(0, -1), { ...options, emitModelToViewChange: true })
            } else {
                super.setValue(value + '/', { ...options, emitModelToViewChange: true })
            }
            return
        }

        if (value.length > 3 && (value[4] == '.' || isNaN(Number(value.slice(3))))) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true })
            return
        }

        if (value.length > 5) {
            super.setValue(this.value, { ...options, emitModelToViewChange: true })
            return
        }

        super.setValue(value, options)
    }
}
