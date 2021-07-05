import { Injectable } from '@angular/core';
import { Appointment } from './Appointment';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class AppointmentService {
  bookingListRef: AngularFireList<any>;
  bookingRef: AngularFireObject<any>;

  constructor( private db: AngularFireDatabase ) { }

  // crear
  createBooking( apt: Appointment ){
    return this.bookingListRef.push({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile
    })
  }

  //obtener el elemento
  getBooking( id: String ) {
    this.bookingRef = this.db.object( '/appointment/' + id );
    return this.bookingListRef;
  }

  //obtener una lista
  getBookingList( ) {
    this.bookingRef = this.db.object( '/appointment/' );
    return this.bookingListRef;
  }

  //update
  updateBooking( id, apt:Appointment ) {
    return this.bookingRef.update({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile
    })
  }

  //delete
  deleteBooking( id: String ) {
    this.bookingRef = this.db.object( '/appointment/' + id );
    this.bookingRef.remove();
  }
}
