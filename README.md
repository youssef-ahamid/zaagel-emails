

![zaagel](https://i.ibb.co/HV0VDH6/Component-3.png)

Send templated emails from anywhere to everywhere in 2 lines of code.

[![NPM](https://nodei.co/npm/zaagel.png?compact=true)](https://nodei.co/npm/zaagel/)

## Installation

``` bash 
npm i zaagel
```

## Usage

let's say i have this piece of data

``` javascript
const data = {
  name: 'foo',
  decription: 'bar',
  message: 'foo bar never gets old',
};
```

THIS is how easy it is to send it as a templated email with zaagel
``` javascript 
const message = {
  to: "your-email@domain.com",
  subject: "Sending automated emails is easy!",
  template: "message-confirmation", // email template used
  body: data, // data to populate template,
  replyTo: "other-email@domain.com",
}

import zaagel from  'zaagel';
zaagel.mail(message);
```


By default, emails are sent from zaagel@samuraisoftware.house.
 
If you need to override the default behavior, or want further customization, you can pass in your own SMTP settings to the configure function before making a mailing request.


``` javascript 
const siteData = {
  siteName: 'your-site.com',
  siteOwner: 'your-name',
  siteEmail: 'your-email@domain.com'
}
const config = { 
  service: "Outlook365", // or gmail, zoho, etc.
  host: "smtp.office365.com",
  port: "587",
  tls: { 
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
  auth: {
    user: 'your-email@domain.com',
    pass: 'your-app-password',
  },
}

import zaagel from  'zaagel';
zaagel.configure(siteData, config)
```

## Contributing
Here's where this project is headed:
#### Near Future:
🎁  Templates documentation

🎁  API documentation

🎁  More email templates

🎁  Email scheduling (send at time t)

#### Later:
🤯 Visual email editor

🤯 Dashboard to track email performance 

Contributing to any of these would be major!!

## License

Zaagel is licensed under the **MIT license**

---

