import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartItem } from 'chart.js';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.scss']
})
export class Chart2Component implements AfterViewInit{
  @ViewChild('acquisitionsCanvas') private chartRef!: ElementRef;

  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    const canvas = this.chartRef?.nativeElement as ChartItem;

    if (canvas) {
      new Chart(canvas, {
        type: 'bar',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count)
            }
          ]
        }
      });
    }
  }
}

  
 