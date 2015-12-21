//  1
//export class App{}

//  2
//export class App{
//    constructor()
//    {
//        this.heading = 'Welcome to the Aurelia Navigation App!';
//        this.firstName = 'John';
//        this.lastName = 'Doe';
//    }

//    get fullName(){
//        return `${this.firstName} ${this.lastName}`;
//    }

//    submit(){
//        alert(`App, ${this.fullName}!`);
//    }
//}

//  -------------------------------------------
//  3
//import {Validation} from 'aurelia-validation';

//export class App{
    
//    static inject() { return [Validation]; }

//    constructor(validation) {
//        this.heading = 'Welcome to the Aurelia Navigation App!';
//        this.firstName = 'John';
//        this.lastName = 'Doe';

//        //this.validation = validation.on(this)
//        //   .ensure('firstName')
//        //         .isNotEmpty()
//        //         .hasMinLength(3)
//        //         .hasMaxLength(10)
//        //   .ensure('lastName')
//        //         .isNotEmpty()
//        //         .hasMinLength(3)
//        //         .hasMaxLength(10) ;

//        this.validation = validation.on(this)
//                    .ensure('firstName')
//                    .isNotEmpty()
//                    .hasLengthBetween(3,10)
//                    .ensure('lastName')
//                    .isNotEmpty()
//                    .hasLengthBetween(3,10);
//    }

//    get fullName() {
//        return `${this.firstName} ${this.lastName}`;
//    }

//    //  Old - works
//    //submit(){
//    //    alert(`App, ${this.fullName}!`);
//    //}

//    submit() {
//        //the validate will fulfil when validation is valid, and reject if not
//        this.validation.validate() 
//            .then( () => {
//                alert(`App, ${this.fullName}! `);
//            });
//    }

//}

//  -------------------------------------------
//  4

import {Validation} from 'aurelia-validation';
import {ensure} from 'aurelia-validation';
import {inject} from 'aurelia-framework';

//@inject(Validation)
//export class RegisterViewModel {
export class App {
    static inject() { return [Validation]; }

  //@ensure(function(it){ it.isNotEmpty().hasLengthBetween(3,10) })
  //login = '';

  //@ensure(function(it){ it.isNotEmpty().hasLengthBetween(3,10).isStrongPassword(4) })
  //  password = '';

    constructor(validation) {
        this.heading = 'Aurelia Login Validation !';
        this.login = 'login';
        this.password = '*****';

        //this.validation = validation.on(this);
        this.validation = validation.on(this)
                    .ensure('login')
                    .isNotEmpty()
                    .hasLengthBetween(3,10)
                    .ensure('password')
                    .isNotEmpty()
                    .hasLengthBetween(3,10)
                    .isStrongPassword(4);
    }

    register(){
        //check if the validation is valid before performing the register
        this.validation.validate().then( () => {
              alert('Welcome!'); //Your more meaningful stuff would go here

            var identity = { login : this.login, password:this.password };
            var jsonObj = JSON.stringify( identity );
			
            var html = "";
            for( var key in jsonObj ){
                //html += "<br> &nbsp; &nbsp; &nbsp; "+ 
                //    key +" = " + jsonObj[key] +
                //    " &nbsp; &nbsp; &nbsp;(" 
                //    + typeof( jsonObj[key] ) +")";
                html += jsonObj[key] ;
            }
            //document.getElementsByTagName("p")[0].innerHTML = html;
            document.getElementById("Message").innerHTML = html;

        });
    }

}

