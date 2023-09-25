import { FormGroup } from "@angular/forms";

export function MatchValidation(controlName: string, matchingControlName: string ) {
    return(fg:FormGroup)=> {
        const control = fg.controls[controlName];
        const matchingControl = fg.controls[matchingControlName];

        if(matchingControl.errors && !matchingControl.errors['notmatched']){
            return;
        }
        
        if(control.value !== matchingControl.value){
            matchingControl.setErrors({notmatched:true});
        }
        else{
            matchingControl.setErrors(null);
        }
    }


}
