import { Component } from "./base-component.js";
// import { validate, Validatable } from "../util/validation.js";
import * as validation from "../util/validation.js";
import { autobind as Autobind} from "../decorators/autobind.js";
import { projectState } from "../state/project-state.js";

// ProjectInput Class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");
    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;
    this.configure();
  }

  private gatherUserinput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: validation.Validatable = {
      value: enteredTitle,
      required: true
    };

    const descValidatable: validation.Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 10,
      maxLength: 100
    };

    const peopleValidatable: validation.Validatable = {
      value: enteredPeople,
      required: true,
      min: 1,
      max: 10
    };

    if (
      validation.validate(titleValidatable) &&
      validation.validate(descValidatable) &&
      validation.validate(peopleValidatable)
    ) {
      return [enteredTitle, enteredDescription, parseFloat(enteredPeople)];
    } else {
      alert("Invalid input!");
      return;
    }
  }

  configure() {
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }

  renderContent() {}

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserinput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      //   console.log(title, desc, people);
      projectState.addProject(title, desc, people);
      this.clearInputs();
    }
  }
}
