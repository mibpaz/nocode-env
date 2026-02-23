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
  readonly addContainer = output<string | null>();

  onAddContainer(event: SubmitEvent) {
    event.preventDefault();
    this.addContainer.emit(this.containerContent.value);
    this.containerContent.reset();
  }
}
