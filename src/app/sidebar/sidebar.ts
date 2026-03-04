import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-sidebar',
  imports: [Icon, ReactiveFormsModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  protected readonly containerContent = new FormControl('');
  readonly onAddContainer = output<string | null>();
  readonly onExport = output<void>();
  readonly onImport = output<string>();

  addContainer(event: SubmitEvent) {
    event.preventDefault();
    this.onAddContainer.emit(this.containerContent.value);
    this.containerContent.reset();
  }

  exportSetup(): void {
    this.onExport.emit();
  }

  triggerImport(): void {
    const input = document.getElementById('import-file') as HTMLInputElement;
    input.click();
  }

  importSetup(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.onImport.emit(e.target?.result as string);
      };
      reader.readAsText(file);
    }
  }

}
