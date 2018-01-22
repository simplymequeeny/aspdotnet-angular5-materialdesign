import {
    Component, OnInit,
    // animation imports
    trigger, state, style, transition, animate, Inject
} from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../shared/user.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    animations: [
        // Animation example
        // Triggered in the ngFor with [@flyInOut]
        trigger('flyInOut', [
            state('in', style({ transform: 'translateY(0)' })),
            transition('void => *', [
                style({ transform: 'translateY(-100%)' }),
                animate(1000)
            ]),
            transition('* => void', [
                animate(1000, style({ transform: 'translateY(100%)' }))
            ])
        ])
    ]
})
export class UsersComponent implements OnInit {

    displayedColumns = ['id', 'username', 'action'];
    dataSource = new MatTableDataSource<User>();

    selectedRowId;
    users: User[];
    selectedUser: User;

    // Use "constructor"s only for dependency injection
    constructor(
      private userService: UserService
    ) { }

    // Here you want to handle anything with @Input()'s @Output()'s
    // Data retrieval / etc - this is when the Component is "ready" and wired up
    ngOnInit() {
        this.userService.getUsers().subscribe(result => {
            console.log('HttpClient [GET] /api/users/allresult', result);
            this.users = result;
            this.dataSource.data = this.users;
        });
    }

    onSelect(user: User): void {
        this.selectedUser = user;
    }

    deleteUser(user) {
        console.log('deleting .. ', user);
        this.userService.deleteUser(user).subscribe(result => {
            console.log('Delete user result: ', result);
            let position = this.users.indexOf(user);
            this.users.splice(position, 1);
        }, error => {
            console.log(`There was an issue. ${error._body}.`);
        });
    }

    addUser(newUserName) {
        this.userService.addUser(newUserName).subscribe(result => {
            console.log('Post user result: ', result);
            this.users.push(result);
            this.dataSource.data = this.users;
        }, error => {
            console.log(`There was an issue. ${error._body}.`);
        });
    }

    highlight(row) {
        this.selectedRowId = row.id;
    }
}