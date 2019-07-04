import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { first } from 'rxjs/operators';
import { CustomersService } from '../customers.service';
import { Call } from '../call.model';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  loading = false;
  customers = [];

  constructor(private cutomersService: CustomersService) { }
  displayedColumns:  string[] = ['their_number', 'their_number_type', 'status'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.loading = true;
    this.cutomersService.getCustomers().pipe(first()).subscribe(customers => {
        this.loading = false;
        this.customers = customers
    });
  }

}
