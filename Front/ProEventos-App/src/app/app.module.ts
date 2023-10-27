import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EventosComponent } from './eventos/eventos.component';
import { PalestrantesComponent } from './palestrantes/palestrantes.component';
import { NavComponent } from './nav/nav.component';

import { EventoService } from './services/evento.service';

import { DateTimeFormatPipe } from './helpers/date-time-format.pipe';

@NgModule({
  declarations: [	
    AppComponent,
    EventosComponent,
    PalestrantesComponent,
    NavComponent,
    DateTimeFormatPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
      progressBar: true,
      progressAnimation: 'decreasing'
    }),
    NgxSpinnerModule,
    FormsModule
  ],
  /*
  * A injeção de dependência pode ser feita de três formas:
  * 1- No componente de serviço declarando que ele é injetado na raiz do projeto
  * 2- No componente que irá utilizar o serviço
  * 3- No app.module.ts, que tem as configurações gerais
  * Por padrão, vamos adotar a opção 3 neste projeto
  * A linha abaixo é a forma 3
  */
 providers: [EventoService],
 bootstrap: [AppComponent],
 schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
