# Equalyzer

Meeting leaders utilize Equalyzer in order to better moderate group discussions. The web application keeps track of those speaking, noting on-screen frequent interruptors and absent voices. These prompts assist leaders in more objectively understanding the dynamic of their team, and concerns they should address.

## How it Works

Equalyzer uses IBM's speech recognition capabilities to convert speech, in multiple languages and optionally multiple people, into text. The transcription of incoming audio is continuously sent back to the client with minimal delay, and it is corrected as more speech is heard. The service is accessed via a WebSocket interface; a REST HTTP interface is also available. Node.js is also used to provide the browser client's authentication token.

## Inspiration
During the opening ceremony, Dr. John Gates, the University of Virginia's School of Engineering's Dean of Diversity and Inclusion, spoke about to achieve true diversity means more than casting a wider net of inclusion. No matter how wide a net of inclusion, there'll exist some form of exclusion. Hence, it's important that the battle for diversity involve both greater inclusion and engagement.

Our team thought about what it meant to more fully engage underrepresented or otherwise disenfranchised members of the community. In doing so, we thought up of roundtable discussions, and how they involve a few major players dominating the conversation, with others wishing the time away. This dynamic prevents teams from achieving their full potential. They're missing out on the ideas and insights of valuable team members.

## License

  This code is licensed under Apache 2.0.