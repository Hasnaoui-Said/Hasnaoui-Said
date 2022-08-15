import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavListComponent } from './pages/sidenav-list/sidenav-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { AboutComponent } from './pages/about/about.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { SkillComponent } from './pages/skill/skill.component';
import { ProjetComponent } from './pages/projet/projet.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './pages/footer/footer.component';
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavListComponent,
    HeaderComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    ResumeComponent,
    SkillComponent,
    ProjetComponent,
    ContactComponent,
    FooterComponent,
    NotFoundComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        MatListModule,
        MatToolbarModule,
        MatSidenavModule,
        HttpClientModule,
        MatButtonModule,
        MatInputModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory, deps: [HttpClient]
            }
        }),
        NgbModule,
        MatCardModule,
        MatTableModule,
        MatProgressBarModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
