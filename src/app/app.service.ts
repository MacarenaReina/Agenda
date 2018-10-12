import { Injectable } from '@angular/core';
import { Document, Schema, Model, model} from "mongoose";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  url = 'mongodb://localhost/blogDb';
  

  constructor() { }
}
