// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

export const config = {
  EmailJS_UserID:     "user_GwQvPrAzwGxkI20BAZJgB",
  EmailJS_ServiceID:  "service_ory974k",
  EmailJS_TemplateID: "template_csd0zh7",
  RequestForm_Services: ["Lohnbuchkontrolle","Lohnadministration","Buchhaltung", "übriges.."],
  RequestForm_TelRegEx: "^(((\\+?)(\\d{2,4}))|0)(\\s?)(\\-?)((\\(0\\))?)(\\s?)(\\d{2})(\\s?)(\\-?)(\\d{3})(\\s?)(\\-?)(\\d{2})(\\s?)(\\-?)(\\d{2})"
}