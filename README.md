![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/LearningProcesss/boardgamegeekjsclient/CD%20-%20NPM/main?style=for-the-badge) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/learningprocesss/boardgamegeekjsclient?color=ff595e&style=for-the-badge)

# boardgamegeekclient

It's a wrapper around the offcial boardgamegeek V2 API, 
with the scope to create a more confortable way to interact with them since they are exposed in XML format.  
With this package you can create your own web app or integrate your backend for example.

## Key features

- :ballot_box_with_check: Fully typed requests and responses
- :ballot_box_with_check: Easy to use
- :ballot_box_with_check: Typescript written
- :ballot_box_with_check: Promisified
- :ballot_box_with_check: thing, family, forum, thread, user, guild, play, collection endpoints

![](/docs/thing.gif)

## Installation

```bash
npm i boardgamegeekclient
```

```bash
yarn add boardgamegeekclient
```

## Usage

In Node.js (commonjs) environment

```js
const { BggClient } = require("boardgamegeekclient");
```

In ES environment

```js
import { BggClient } from 'boardgamegeekclient';
```

Initialize BggClient and get singleton instance

```js
const client = BggClient.Create();
```

## API

Interact with boardgamegeek entities using the corresponding client object and fire a request with **query** or **queryWithProgress** method.

### Thing

Get boardgame, boardgame expansion, boardgame accessory, videogame, rpgitem, rpgissue informations.  
Thing client expose **query** and **queryWithProgress**.  

#### Examples

```ts
const things: BggThingDto[] = await client.thing.query({ id: [174430, 35421], 
                                                         videos: 1,
                                                         comments: 1,
                                                         marketplace: 1,
                                                         stats: 1,
                                                         type: "boardgame" });

// with progress handler as parameter

await client.thing.queryWithProgress({
                id: [250621, 257668, 226255, 340790, 279307, 279306, 345121, 271447, 187104, 253618, 271512, 432, 68448, 173346, 346703, 302260, 239472, 172818, 231398, 202408, 267814, 267813, 191189, 267127, 281946, 264647, 2272, 230085, 31260, 247367, 256442, 161970, 6249, 181293],
                videos: 1,
                comments: 1,
                marketplace: 1,
                stats: 1,
                type: "boardgame"
            }, { limit: 10 }, _data => {
                
            });

// with progress handler registered on the client itself

client.thing.progressHandler = (_data) => { };

await client.thing.queryWithProgress({
    id: [250621, 257668, 226255, 340790, 279307, 279306, 345121, 271447, 187104, 253618, 271512, 432, 68448, 173346, 346703, 302260, 239472, 172818, 231398, 202408, 267814, 267813, 191189, 267127, 281946, 264647, 2272, 230085, 31260, 247367, 256442, 161970, 6249, 181293],
    videos: 1,
    comments: 1,
    marketplace: 1,
    stats: 1,
    type: "boardgame"
}, { limit: 10 });
```

## Family

Get rpg, rpgperiodical, boardgamefamily informations.  
Family client expose **query** and **queryWithProgress**. 

### Examples  

```js
const families = await client.family.query({ id: [174430, 35421] });
```

## Forum List

Get a list of forums  
(in boardgame or family page (of the id), forums tab, left sidebars with all forums).  
ForumList client expose **query** and **queryWithProgress**. 

### Examples

```ts
const forumlists: BggForumlistDto[] = await client.forumlist.query({ id: [8374,22184,59218,1029,2076], type: ['family']});
```  

## Forum

Get a **single** forum.  

### Examples  

```ts
const forum = await client.forum.query({ id: 19, page: 3 });
```  

## Thread

Get a **single** thread.

### Examples  

```ts
const threads: BggThreadDto[] = await client.thread.query({ id: 2571698, minarticledate: '2021-01-03', count: 15 });
```  

## User

Get public profile information about a user by username.

### Examples  

```ts
const users: BggUserDto[] = await client.user.query({ name: 'mattiabanned', hot: 1, top: 1 });
```  

## Guild

Get a **single** guild.

### Examples  

```ts
const guilds: BggGuildDto[] = await client.guild.query({ id: 1000, members: 1, sort: 'date', page: 1 });
```  

## Play

Request plays logged by a particular user or for a particular item.

### Examples  

```ts
const plays: BggPlayDto[] = await client.play.query({ username: 'mattiabanned' });
```  

### Collection

### Examples  

```ts
const collections: BggCollectionDto[]  = await client.collection.query({ username: 'mattiabanned', excludesubtype: ["boardgameaccessory"] });
``` 
