import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyBYC89AK2wGzCP6di32HeWYYviGqONmq3E',
  authDomain: 'businesscontacts-c3c0a.firebaseapp.com',
  databaseURL: 'https://businesscontacts-c3c0a.firebaseio.com',
  storageBucket: 'businesscontacts-c3c0a.appspot.com'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
