import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicHeaderService {
  private readonly _header: BehaviorSubject<string> = new BehaviorSubject<string>('Lädt...');
  constructor() { }

  public get header(): BehaviorSubject<string> {
    return this._header;
  }

  public setTitle(title:string):void{
    this._header.next(title);
  }
}
