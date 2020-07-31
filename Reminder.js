class Reminder {
    constructor(){
        this.greeting = createElement('h4');
        this.greeting.html("Enter your reminders in the spaces below!");

        
        this.reminder2 = createInput("Reminder 2");
        this.reminder3 = createInput("Reminder 3");
        this.reminder4 = createInput("Reminder 4");
        this.reminder5 = createInput("Reminder 5");
        this.reminder6 = createInput("Reminder 6");
        this.reminder7 = createInput("Reminder 7");
        this.reminder8 = createInput("Reminder 8");
        this.reminder9 = createInput("Reminder 9");
        this.reminder10 = createInput("Reminder 10");


    }

    display(){
        this.greeting.html("Enter your reminders in the spaces below!");
        this.greeting.position(200,100);
        this.reminder1 = createInput("Reminder 1");
        this.reminder1.position(75,75);



    
    }

}