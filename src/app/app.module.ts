import { NgModule, ErrorHandler }                   from '@angular/core';
import { BrowserModule }                            from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { StatusBar }                                from '@ionic-native/status-bar';
import { SplashScreen }                             from '@ionic-native/splash-screen';

import { MyApp }                                    from './app.component';

import { FiltroCompletadoPipe }                     from '../pipes/filtro-completado/filtro-completado.pipe';

import { ListasComponent }                          from '../components/listas.component';

import { AgregarPage }                              from '../pages/agregar/agregar';
import { PendientesPage }                           from '../pages/pendientes/pendientes';
import { TabsPage }                                 from '../pages/tabs/tabs';
import { TerminadosPage }                           from '../pages/terminados/terminados';

import { DeseosService }                            from '../services/deseos.service';

@NgModule({
    declarations: [
        MyApp,
        AgregarPage,
        PendientesPage,
        TabsPage,
        TerminadosPage,
        ListasComponent,
        FiltroCompletadoPipe
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot( MyApp )
    ],
    bootstrap: [ IonicApp ],
    entryComponents: [
        MyApp,
        AgregarPage,
        PendientesPage,
        TabsPage,
        TerminadosPage
    ],
    providers: [
        DeseosService,
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})

export class AppModule {}
