import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { AboutComponent } from './pages/about/about.component'
import { ContactComponent } from './pages/contact/contact.component'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, AboutComponent, ContactComponent],
    imports: [BrowserModule, AppRoutingModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
