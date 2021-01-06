import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mock-users',
  templateUrl: './mock-users.component.html',
  styleUrls: ['./mock-users.component.scss']
})
export class MockUsersComponent implements OnInit {

  title="Hello mock"

  constructor() { }

  ngOnInit(): void {
  }

}
