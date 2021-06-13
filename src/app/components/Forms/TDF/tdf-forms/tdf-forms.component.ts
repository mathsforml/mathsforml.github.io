import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/user';

@Component({
  selector: 'mfm-tdf-forms',
  templateUrl: './tdf-forms.component.html',
  styleUrls: ['./tdf-forms.component.scss']
})
export class TdfFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  topics = ["Angular", "React", "Vue"];

  userModel = new User('Kuldeep',
                       'kschouhan714@gmail.com',
                        '1234567890',
                        'Angular',
                        'morning',
                        true)

}
