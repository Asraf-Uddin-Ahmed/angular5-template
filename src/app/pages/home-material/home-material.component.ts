import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { AppHttpService } from '../../services/app-http.service';
import { AlertMessageService } from '../../services/alert-message.service';

@Component({
  selector: 'app-home-material',
  templateUrl: './home-material.component.html',
  styleUrls: ['./home-material.component.css']
})
export class HomeMaterialComponent implements OnInit, AfterViewInit {

  displayedColumns = ['description', 'answerType', 'privacyMode'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private appHttpService: AppHttpService, private alertMessageService: AlertMessageService) {
    // this.paginationFieldNames.startOffset = 'pagination.displayStart';
    // this.paginationFieldNames.itemsPerPage = 'pagination.displaySize';
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.changeSearch({ itemsPerPage: 10 });
  }

  changeSearch($event) {
    console.log($event);
    this.appHttpService.get('http://localhost:4873/questions', $event)
      .subscribe(data => {
        console.log(data);
        this.paginator.length = data['totalItem'];
        this.dataSource = data['items'];
      }, err => {
        console.log(err);
        this.alertMessageService.setError('Failed to search');
      });
  }
}
