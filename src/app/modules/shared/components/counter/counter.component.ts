import { CommonModule } from "@angular/common";
import { Component, Input, SimpleChanges, signal } from "@angular/core";

@Component({
  selector: "app-counter",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./counter.component.html",
})
export class CounterComponent {
  @Input({ required: true }) duration = 0;
  @Input({ required: true }) message = "";

  counter = signal(0);
  counterRef: number | undefined;

  changeCounter() {
    this.counter.update((prev) => prev + 1);
  }

  constructor() {
    //NO ASYNC CALLS IN CONSTRUCTOR
    //BERFORE RENDER
    console.log("constructor");
    console.log("-".repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // BEFORE AND DURING RENDER
    console.log("ngOnChanges");
    console.log("-".repeat(10));
    console.log(changes);

    const duration = changes["duration"];
    if (duration) {
      console.log("Duration changed");
      console.log(duration);
    }
  }

  ngOnInit() {
    // AFTER RENDER
    // ONLY ONCE
    // ALLOWED TO MAKE ASYNC CALLS
    console.log("ngOnInit");
    console.log("-".repeat(10));
    this.counterRef = setInterval(() => {
      this.changeCounter();
      console.log("Counter: ", this.counter());

    }, this.duration);
  }

  ngAfterViewInit() {
    // AFTER RENDER
    // CHILD COMPONENTS ARE RENDERED
    console.log("ngAfterViewInit");
    console.log("-".repeat(10));
  }

  ngOnDestroy() {
    // BEFORE DESTROY
    console.log("ngOnDestroy");
    console.log("-".repeat(10));
    clearInterval(this.counterRef);
  }
}
