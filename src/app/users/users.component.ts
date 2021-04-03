import { Component, OnInit } from '@angular/core';
import { IUser } from '../model/user';
import { UserService } from '../user.service';
import { Store, select } from '@ngrx/store';
import * as UserActions from '../state/actions/user.actions';
import * as fromUser from '../state/selectors/user.selectors';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  pageTitle = 'Users List';
  errorMessage: String = '';
  users: IUser[] = [];

  constructor(private userService: UserService, private store: Store) { } //store is a service 

  ngOnInit(): void {





  }

  clickdata() {
    this.store.dispatch(new UserActions.LoadUsers()); //action dispatch

    this.store.pipe(select(fromUser.getUsers)).subscribe((users => { this.users = users }
    ))

    this.store.pipe(select(fromUser.getError)).subscribe((err: any) => {
      console.log(err.message)
      this.errorMessage = err.message //this will be displayed when error occurs from store
    }
    )
  }



}
