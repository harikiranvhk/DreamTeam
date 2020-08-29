import { Component, OnInit } from "@angular/core";
import { SchoolService } from "../school/school.service";
import { SpinnerService } from "../sharedService/spinner.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  idList: any;
  studentData: any;
  showData: boolean = false;

  constructor(
    private schoolService: SchoolService,
    private spinner: SpinnerService
  ) {
    console.log("About Component Constructor Called");
  }

  ngOnInit() {
    this.getallIds();
  }

  getallIds() {
    this.spinner.loadSpinner(true);

    this.schoolService.getDataById().subscribe((res) => {
      this.idList = res;
      console.log(res);
      this.spinner.loadSpinner(false);
    });
  }
  idChanged(id: any) {
    this.spinner.loadSpinner(true);
    this.schoolService.getInfoById(id).subscribe((res) => {
      console.log(res);
      res = this.studentData;
      this.showData = true;
      this.spinner.loadSpinner(false);
    });
  }
}
