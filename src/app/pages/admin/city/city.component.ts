import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss'
})
export class CityComponent implements OnInit {
  cityList: any [] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.getAllCities();
  }

  getAllCities() {
    this.http.get("/api/FlightBooking/GetAllCity").subscribe((res:any) => {
      this.cityList = res.data;
    })
  }

  bulkUpdate() {
    this.http.post("/api/FlightBooking/AddUpdateBulkCity", this.cityList).subscribe((res:any) => {
      if(res.result) {
        alert("Bulk Update Success");
      } else {
        alert(res.message)
      }
    })
  }

  addNew() {
    const cityObj = {
      cityId: 0,
      cityName: '',
    }
    this.cityList.unshift(cityObj)
  }
}
