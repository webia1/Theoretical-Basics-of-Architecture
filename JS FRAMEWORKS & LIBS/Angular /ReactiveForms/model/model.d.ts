import { Observable } from 'rxjs';
import { AsyncValidatorFn, ValidationErrors, ValidatorFn } from './directives/validators';

export declare const VALID     = "VALID";
export declare const INVALID   = "INVALID";
export declare const PENDING   = "PENDING";

export declare const DISABLED  = "DISABLED";
export declare type  FormHooks = 'change' | 'blur' | 'submit';

export interface AbstractControlOptions {
    validators?: ValidatorFn | ValidatorFn[] | null;
    asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[] | null;
    updateOn?: 'change' | 'blur' | 'submit';
}

export declare abstract class AbstractControl {
    validator: ValidatorFn | null;
    asyncValidator: AsyncValidatorFn | null;
    private _parent;
    private _asyncValidationSubscription;
    readonly value: any;

    constructor(validator: ValidatorFn | null, asyncValidator: AsyncValidatorFn | null);

    readonly parent: FormGroup | FormArray;
    
    readonly status: string;  // VALID, INVALID, PENDING, DISABLED
    
    readonly valid: boolean;
    readonly invalid: boolean;
    
    readonly pending: boolean;
    
    readonly disabled: boolean;
    readonly enabled: boolean;
    
    readonly errors: ValidationErrors | null;
    
    readonly pristine: boolean;
    readonly dirty: boolean;
    readonly touched: boolean;
    readonly untouched: boolean;
    
    readonly valueChanges: Observable<any>;
    readonly statusChanges: Observable<any>;
    readonly updateOn: FormHooks; //  default: change | blur| submit

    setValidators(newValidator: ValidatorFn | ValidatorFn[] | null): void;
    setAsyncValidators(newValidator: AsyncValidatorFn | AsyncValidatorFn[] | null): void;
    clearValidators(): void;
    clearAsyncValidators(): void;

    markAsTouched(opts?: {
        onlySelf?: boolean;
    }): void;

    markAsUntouched(opts?: {
        onlySelf?: boolean;
    }): void;

    markAsDirty(opts?: {
        onlySelf?: boolean;
    }): void;

    markAsPristine(opts?: {
        onlySelf?: boolean;
    }): void;

    markAsPending(opts?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;

    disable(opts?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;

    enable(opts?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    
    
    private _updateAncestors;
     setParent(parent: FormGroup | FormArray): void;

    abstract setValue(value: any, options?: Object): void;

    abstract patchValue(value: any, options?: Object): void;
 
    abstract reset(value?: any, options?: Object): void;

    updateValueAndValidity(opts?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
    
    private _setInitialStatus;
    private _runValidator;
    private _runAsyncValidator;
    private _cancelExistingSubscription;
    setErrors(errors: ValidationErrors | null, opts?: {
        emitEvent?: boolean;
    }): void;
  
    get(path: Array<string | number> | string): AbstractControl | null;
    getError(errorCode: string, path?: Array<string | number> | string): any;
      hasError(errorCode: string, path?: Array<string | number> | string): boolean;

    readonly root: AbstractControl;
    private _calculateStatus;
}

export declare class FormControl extends AbstractControl {

    constructor(formState?: any, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null);
    setValue(value: any, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
        emitModelToViewChange?: boolean;
        emitViewToModelChange?: boolean;
    }): void;

    patchValue(value: any, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
        emitModelToViewChange?: boolean;
        emitViewToModelChange?: boolean;
    }): void;

    reset(formState?: any, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;

    registerOnChange(fn: Function): void;
    registerOnDisabledChange(fn: (isDisabled: boolean) => void): void;
    private _applyFormState;
}

export declare class FormGroup extends AbstractControl {
    controls: {
        [key: string]: AbstractControl;
    };

    constructor(controls: {
        [key: string]: AbstractControl;
    }, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null);
  
    registerControl(name: string, control: AbstractControl): AbstractControl;
    addControl(name: string, control: AbstractControl): void;
    removeControl(name: string): void;
    setControl(name: string, control: AbstractControl): void;
    contains(controlName: string): boolean;

    setValue(value: {
        [key: string]: any;
    }, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
   
    patchValue(value: {
        [key: string]: any;
    }, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
 
    reset(value?: any, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;

    getRawValue(): any;
}
export declare class FormArray extends AbstractControl {
    controls: AbstractControl[];
    constructor(controls: AbstractControl[], validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null);

    at(index: number): AbstractControl;
    push(control: AbstractControl): void;
    insert(index: number, control: AbstractControl): void;
    removeAt(index: number): void;
    setControl(index: number, control: AbstractControl): void;
 
    readonly length: number;

 
    setValue(value: any[], options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;

    patchValue(value: any[], options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;
   
    reset(value?: any, options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
    }): void;

    getRawValue(): any[];
    private _registerControl;
}
