import {Component, Input, signal} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-input-custom',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule
  ],
  templateUrl: './input-custom.component.html',
  styleUrl: './input-custom.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputCustomComponent,
      multi: true
    }
  ]
})
export class InputCustomComponent implements ControlValueAccessor{

  @Input() type : 'text' | 'submit' | 'password' | 'number' = 'text'

  valueInp = signal('')
  private onChangefn! : Function

  changeText($event: any) : void {
    this.onChangefn($event.target.value)
  }

  writeValue(value: string): void {
    this.valueInp.set(value)
  }

  registerOnChange(fn: any): void {
    this.onChangefn = fn
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }


}
