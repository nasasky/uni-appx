import { Component } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.less'],
})
export class TodoComponent {
  title = '12312312312';
  value = '';
  list = [];

  constructor(private notification: NzNotificationService) {
  }

  handleClick () {
    if (!this.value) {
      return
    }
    this.list.push(this.value)
    this.value = ''
    this.notification.create(
      'success',
      '呵呵呵',
      '这是一段很简单的话'
    );
  }
}
