# Equalyzer

Meeting leaders utilize Equalyzer in order to better moderate group discussions. The web application keeps track of those speaking, noting on-screen frequent interruptors and absent voices. These prompts assist leaders in more objectively understanding the dynamic of their team, and concerns they should address.

## How it Works

Equalyzer uses IBM's speech recognition capabilities to convert speech, in multiple languages and optionally multiple people, into text. The transcription of incoming audio is continuously sent back to the client with minimal delay, and it is corrected as more speech is heard. The service is accessed via a WebSocket interface; a REST HTTP interface is also available. Node.js is also used to provide the browser client's authentication token.

## Inspiration
During the opening ceremony, Dr. John Gates, the University of Virginia's School of Engineering's Dean of Diversity and Inclusion, spoke about to achieve true diversity means more than casting a wider net of inclusion. No matter how wide a net of inclusion, there'll exist some form of exclusion. Hence, it's important that the battle for diversity involve both greater inclusion and engagement.

Our team thought about what it meant to more fully engage underrepresented or otherwise disenfranchised members of the community. In doing so, we thought up of roundtable discussions, and how they involve a few major players dominating the conversation, with others wishing the time away. This dynamic prevents teams from achieving their full potential. They're missing out on the ideas and insights of valuable team members.

## Getting started

1. You need a Bluemix account. If you don't have one, [sign up][sign_up].

2. Download and install the [Cloud-foundry CLI][cloud_foundry] tool if you haven't already.

3. Edit the `manifest.yml` file and change `<application-name>` to something unique. The name you use determines the URL of your application. For example, `<application-name>.mybluemix.net`.

  ```yaml
  applications:
  - services:
    - my-service-instance
    name: <application-name>
    command: npm start
    path: .
    memory: 512M
  ```

4. Connect to Bluemix with the command line tool.

  ```sh
  cf api https://api.ng.bluemix.net
  cf login
  ```

5. Create and retrieve service keys to access the [Speech to Text][service_url] service:

  ```none
  cf create-service speech_to_text standard my-stt-service
  cf create-service-key my-stt-service myKey
  cf service-key my-stt-service myKey
  ```

6. Create a `.env` file in the root directory by copying the sample `.env.example` file using the following command:

  ```none
  cp .env.example .env
  ```
  You will update the `.env` with the information you retrieved in steps 5.

  The `.env` file will look something like the following:

  ```none
  SPEECH_TO_TEXT_USERNAME=<username>
  SPEECH_TO_TEXT_PASSWORD=<password>
  ```

7. Install the dependencies you application need:

  ```none
  npm install
  ```

8. Start the application locally:

  ```none
  npm start
  ```

9. Point your browser to [http://localhost:3000](http://localhost:3000).

For more details about developing applications that use Watson Developer Cloud services in Bluemix, see [Getting started with Watson Developer Cloud and Bluemix][getting_started].


## Troubleshooting

* The main source of troubleshooting and recovery information is the Bluemix log. To view the log, run the following command:

  ```sh
  cf logs <application-name> --recent
  ```

* For more details about the service, see the [documentation][docs] for the Speech to Text service.


----

### Directory structure

```none
.
├── app.js                      // express routes
├── config                      // express configuration
│   ├── express.js
│   └── security.js
├── manifest.yml
├── package.json
├── public                      // static resources
├── server.js                   // entry point
├── test                        // tests
└── views                       // react components
```

## License

  This  ode is licensed under Apache 2.0.

## Contributing

  See [CONTRIBUTING](CONTRIBUTING.md).

## Open Source @ IBM
  Find more Watson open source projects on the [IBM Github Page](http://ibm.github.io/)