import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-airport',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './airport.component.html',
  styleUrl: './airport.component.scss'
})
export class AirportComponent implements OnInit {
  airportList: any [] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      this.getAllAirports();
  }

  getAllAirports() {
    this.http.get("/api/FlightBooking/GetAllAirport").subscribe((res:any) => {
      this.airportList = res.data;
    })
  }

  addNew() {
    const airportObj = {
      airportId: 0,
      airportCode: '',
      airportName: '',
      cityName: '',
    }

    this.airportList.unshift(airportObj);
  }

}
