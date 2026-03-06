import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideIcons } from '@ng-icons/core';

import { phosphorArrowSquareOutBold, phosphorFolderOpenBold, phosphorPlusBold, phosphorTrashBold } from '@ng-icons/phosphor-icons/bold';
import { phosphorPackageDuotone } from '@ng-icons/phosphor-icons/duotone';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideIcons({
      phosphorPlusBold,
      phosphorTrashBold,
      phosphorArrowSquareOutBold,
      phosphorFolderOpenBold,
      phosphorPackageDuotone,
    }),
  ]
};
