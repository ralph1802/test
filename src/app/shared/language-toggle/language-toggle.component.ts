import { Component } from '@angular/core';
import { TranslateService } from '../../core/services/translate.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.scss'],
})
export class LanguageToggleComponent {
  constructor(private translateService: TranslateService) {}

  get currentLang(): string {
    return this.translateService.lang;
  }

  toggleLanguage(): void {
    this.translateService.changeLang();
  }
}
