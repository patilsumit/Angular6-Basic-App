import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../courses.services';

@Component({
  selector: 'app-emertxe',
  templateUrl: './emertxe.component.html',
  styleUrls: ['./emertxe.component.css']
})
export class EmertxeComponent implements OnInit {
   
  title="List of Courses in WSA:";
  courses;

  constructor(services:CoursesService) {
    this.courses=services.getCoursesList();
   }
   
  ngOnInit() {
  }

  myValue=100;

}
