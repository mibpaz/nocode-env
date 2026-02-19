import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { featherCopy, featherDownload, featherEdit, featherExternalLink, featherMinus, featherMonitor, featherPlus, featherTrash, featherX } from '@ng-icons/feather-icons';
@NgModule({
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ featherPlus, featherMinus, featherX, featherTrash, featherEdit, featherCopy, featherExternalLink, featherDownload, featherMonitor }),
  ],
})
export class IconsModule { }