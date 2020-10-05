import { Component, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-graphic',
    templateUrl: './graphic.component.html',
    styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnDestroy {

    results: any[] = [
        {
            "name": "Game 1",
            "value": 20
        },
        {
            "name": "Game 2",
            "value": 50
        },
        {
            "name": "Game 3",
            "value": 30
        },
        {
            "name": "Game 4",
            "value": 40
        }
    ];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = true;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Games';
    showYAxisLabel = true;
    yAxisLabel = 'Population';
    colorScheme = 'nightLights';

    interval; 

    constructor() {
        this.interval = setInterval(() => {
            const newResults = [...this.results];

            for(let i in newResults) {
                newResults[i].value = Math.round(Math.random() * 500);
            }

            this.results = [...newResults];
        }, 1500);
    }

    onSelect(event) {
        console.log(event);
    }

    ngOnDestroy(): void {
        clearInterval(this.interval);
    }

}