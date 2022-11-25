import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductComponent } from './components/pages/home/product/product.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product-service';
import { CartComponent} from './components/pages/cart/cart.component';
import { CartService } from './services/cart-service';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }