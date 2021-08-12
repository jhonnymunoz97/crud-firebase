import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface User{
  id:'',
  user:'',
  password:''
};


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  data: User[] = []
  item: Observable<any[]>;


  constructor(private firestore: AngularFirestore) { 
     
    //this.item = this.firestore.collection('items').valueChanges();
    this.item = this.firestore.collection('items').snapshotChanges()
    this.item.subscribe(
      resp =>{
        this.data = []
        resp.forEach(element => {
          this.data.push(
            {
              id: element.payload.doc.id,
            ...element.payload.doc.data()
            }
          )
        });
      }
    )
  }

  ngOnInit(): void {  }

  addEmpleado(){
    this.firestore.collection('items').add({user:'steven',password:'steven123'})
  }

  deleteEmpleado(id:string){
    this.firestore.collection('items').doc(id).delete()

  }

  editEmpleado(id:string){
    this.firestore.collection('items').doc(id).update({user:'Gianela',password:'gianella123'})
  }
}
