//  1
//export function configure(aurelia) {
//    aurelia.use
//      .standardConfiguration()
//      .developmentLogging();

//    aurelia.start().then(a => a.setRoot());
//}

//  2
//export function configure(aurelia) {
//    aurelia.use
//      .standardConfiguration()
//      .developmentLogging();

//    aurelia.start().then(a => a.setRoot('app', document.body));
//}

//  3
export function configure(aurelia) {
    aurelia.use
      .standardConfiguration()
      .developmentLogging()
      .plugin('aurelia-validation'); //Add this line to load the plugin

    aurelia.start().then(a => a.setRoot('app', document.body));
}