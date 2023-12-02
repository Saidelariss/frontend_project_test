import { Component } from '@angular/core';

@Component({
  selector: 'app-candidate-chart',
  templateUrl: './candidate-chart.component.html',
  styleUrls: ['./candidate-chart.component.css']
})
export class CandidateChartComponent {
  chartOptions = {
    title: {
      text: "Graphe de choix de candidat"
    },
    data: [{
      type: "bar",
      indexLabel: "{name}: {y}",
      yValueFormatString: "#,###.##'%'",
      dataPoints: [
        { y: 14.1, name: "Emploi 1" },
        { y: 28.2, name: "Emploi 2" },
        { y: 14.4, name: "Emploi 3" },
        { y: 43.3, name: "Emploi 4" }
      ]
    }]
  };
  
}
