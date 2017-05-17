import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from "../service/access-control-log.service"

@Component({
  selector: 'app-log-from-component',
  templateUrl: './log-from-component.component.html',
  styleUrls: ['./log-from-component.component.css'],
  providers: [AccessControlLogService]
})
export class LogFromComponentComponent implements OnInit {
  dismissed: boolean = true;
  constructor(private controlLog: AccessControlLogService) { }

  ngOnInit() {
  }
  addMessage(person, message){
    if(!message || !person){
      console.log("invalid input");
      return;
    }
    console.log("AYYY");
    this.controlLog.addAccessItem(person, message);
    this.dismissed = false;
    setTimeout(()=>{
      this.dismissed = true;
    }, 2000)
  }
  showAll(){
    console.log(this.controlLog.getAccessLog());
  }
  dismiss(){
    this.dismissed = true;
  }
}
