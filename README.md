# AzureFuncSecuredNGApp

This is a sample applicaiton and code that accompanies a blog post.  For full details and instructions, please see my blog post series on [Securing Azure Functions with Azure Active Directory ](https://peteskelly.com/secure-functions-aad-1/)This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.  

To begin, clone the repository and install local packages using yarn or npm. For example:

```
$ git clone https://github.com/pkskelly/AzureFuncSecuredNGApp.git
```
then...
```
$ yarn install
``` 

Once you have the packages installed locally, update the ```configuration.service.ts``` file with your Azure Function App information.

```
// instance: 'https://login.microsoftonline.com/',
tenant: 'your tenant name',  //e.g. lastname.onmicrosoft.com
tenantid: 'your tenant id',  //your tenant id
clientId: 'your client / App Id', // your client id - or App Id
redirectUri: window.location.origin + '/',
postLogoutRedirectUri: window.location.origin + '/',
endpoints: {
    /* 'target endpoint to be called': 'target endpoint's resource ID'  */
    // Custom Azure Function HTTP endpoint - sample below
    'https://securefuncapp8.azurewebsites.net/api': 'https://securefuncapp8.azurewebsites.net',
},
//sample service url
serviceUrl: 'https://securefuncapp8.azurewebsites.net/api/GetGolfers',
``` 

## Start the Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

```
$ ng serve -o
```

Be sure you have updated the CORS "Allowed Origins" in your Azure Functions' Platform Settings to match your client apps url. 

## Drop me a note
If you have issues, suggestions or comments, feel free to leave a comment on my [blog](https://peteskelly.com).

## Disclaimer
THIS CODE IS PROVIDED AS IS WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING ANY IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.


[![Analytics](https://ga-beacon.appspot.com/UA-72318043-2/azfunc-ng-client/readme)](https://github.com/igrigorik/ga-beacon)
