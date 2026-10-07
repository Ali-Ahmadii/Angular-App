import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';


@Component({
  imports: [],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  // @Input() avatar! : string;
  // @Input() name! : string;
  avatar = input.required<string>();
  name = input.required<string>();
  @Input({required : true}) id!: string;
  @Output() select = new EventEmitter();
  imagePath = computed(() => {
    return this.avatar();
  });
  // get imagePath(){
  //   return this.avatar;
  // }
  onSelectUser(){
    this.select.emit(this.id);
  }
}
