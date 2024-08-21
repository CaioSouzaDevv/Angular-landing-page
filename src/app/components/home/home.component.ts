import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { BtnContactComponent } from '../btn-contact/btn-contact.component';
import { FormNewsletterComponent } from '../form-newsletter/form-newsletter.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    HeaderComponent,
    BtnContactComponent,
    FormNewsletterComponent,
    FooterComponent
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
