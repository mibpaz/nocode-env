import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { featherCopy, featherDownload, featherEdit, featherExternalLink, featherMinus, featherMonitor, featherPlus, featherTrash, featherUpload, featherX } from '@ng-icons/feather-icons';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideIcons({ featherPlus, featherMinus, featherX, featherTrash, featherEdit, featherCopy, featherExternalLink, featherDownload, featherMonitor, featherUpload }),
  ]
};
