# Angular Cross Field Validation

> [Great Answer here (SO)](https://stackoverflow.com/questions/31788681/angular2-validator-which-relies-on-multiple-form-fields)
> Full Example: [https://embed.plnkr.co/ukwCXm/](https://embed.plnkr.co/ukwCXm/)

In order for Validators to take parameters, they need to return a function with either a FormGroup or FormControl as a parameter. 
In this case, I'm validating a FormGroup.

```ts
function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
  return (group: FormGroup): {[key: string]: any} => {
    let password = group.controls[passwordKey];
    let confirmPassword = group.controls[confirmPasswordKey];

    if (password.value !== confirmPassword.value) {
      return {
        mismatchedPasswords: true
      };
    }
  }
}
```

