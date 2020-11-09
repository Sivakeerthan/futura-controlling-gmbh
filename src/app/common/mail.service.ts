import { Injectable } from '@angular/core';
import emailjs, {init} from 'emailjs-com';
import {config} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor() { }

  init(){
    init(config.EmailJS_UserID);
  }

  async sendMail(form:HTMLFormElement):Promise<boolean>{ 
    return await emailjs.sendForm(config.EmailJS_ServiceID, config.EmailJS_TemplateID,form)
            .then(result=>{
              console.log(result.text);
              return true;
            }, error => {
              console.error(error.text);
              return false;
            });
  }
}
