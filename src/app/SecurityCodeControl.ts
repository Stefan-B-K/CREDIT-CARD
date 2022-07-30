import { FormControl } from "@angular/forms";

export class SecurityCodeControl extends FormControl {
    override setValue (value: string, options: any) {

        const codeRegex = /^[0-9]{0,3}$/gi

        if (!value.match(codeRegex)) {
            super.setValue(this.value, { ...options,  emitModelToViewChange: true })
            return
        }

        super.setValue(value, options)
    }
}
