import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MailService } from 'src/app/common/mail.service';
import { config} from 'src/environments/environment';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.scss']
})

export class RequestFormComponent implements OnInit {
  public form: FormGroup;
  public firm: FormControl;
  public tel: FormControl;
  public eMail: FormControl;
  public services: FormControl;
  public msg: FormControl;

  public serviceList: string[];  

  constructor(public MailService:MailService, 
              public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      firm: new FormControl({value: '', disabled: false}, [Validators.required]),
      tel: new FormControl({value: 0, disabled: false}, [Validators.pattern(config.RequestForm_TelRegEx)]),
      eMail: new FormControl({value: '', disabled: false}, [Validators.required, Validators.email]),
      services: new FormControl({value: '', disabled: false},[Validators.required]),
      msg: new FormControl({value: '', disabled: false}),
    });
 
    this.serviceList = config.RequestForm_Services;
  }

  sendEmail(){
    let formElement:HTMLFormElement = this.createFormElement();
    // serviceElement.setAttribute('value',this.form.controls['services'].value);

    this.MailService.sendMail(formElement).then(success=>{
      this.deleteTempElements();

      if(success){
        this.resetForm();
        this.snackBar.open("Die Anfrage wurde erfolgreich versendet!","close",{
          duration: 3000
        });
      }
      else{
        this.snackBar.open("Ein fehler ist aufgetreten! Versuchen Sie es bitte erneut!","close",{
          duration: 3000
        });
      }
    });
  }

  private createFormElement():HTMLFormElement{
    let formElement:HTMLFormElement = document.getElementById('requestForm') as HTMLFormElement;
    let serviceElement: Element = document.createElement<"input">("input");
    serviceElement.setAttribute("type","text");
    serviceElement.setAttribute("id","tempServiceElement");
    serviceElement.setAttribute("style","display: none;");
    serviceElement.setAttribute("name","client_service");
    serviceElement.setAttribute("value",this.form.controls['services'].value);
    formElement.insertAdjacentElement("beforeend",serviceElement);
    return formElement;
  }

  /*
    Because some Fields in the form are handled dynamically,
    each FormControl has to be reseted, individually.
  */
  private resetForm(){
    this.form.controls['firm'].reset();
    this.form.controls['tel'].reset();
    this.form.controls['eMail'].reset();
    this.form.controls['services'].setValue('');
    this.form.controls['msg'].setValue('');

    this.form.updateValueAndValidity();
  }

  private deleteTempElements(){    
    //delete TempServiceElement
    let serviceElement:Element = document.getElementById('tempServiceElement');
    if(serviceElement != null) serviceElement.parentNode.removeChild(serviceElement);
  }
}
