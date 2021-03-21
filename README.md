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

or Web using module and Skypack

```js
<script type="module">
  import boardgamegeekclient from 'https://cdn.skypack.dev/boardgamegeekclient';
</script>
```

Now you initialize BggClient

```js
const client = BggClient.Create();
```

## API

You can interact with boardgamegeek entities using the corresponding client object exposed and fire a request with **query** method.
Any client have only this public method but with different parameters.

### Thing

Get boardgame, boardgame expansion, boardgame accessory, videogame, rpgitem, rpgissue informations.  

### IThingRequest

| Property       | Type                                                                                                             | Required                | Example                                                               | Description                                                                                                                                                                                      |                                                                                                                                                                                                                                                   |
|----------------|------------------------------------------------------------------------------------------------------------------|-------------------------|-----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| id             | number \| number[]                                                                                               | :ballot_box_with_check: | { id: 281647 or id: [281647, 332398] }                                | Specifies the id of the thing(s) to retrieve. To request multiple things with a single query, NNN can specify a comma-delimited list of ids.                                                     |                                                                                                                                                                                                                                                   |
| type           | array of \| 'boardgame'\| 'boardgameexpansion' \| 'boardgameaccessory' \| 'videogame' \| 'rpgitem' \| 'rpgissue' |                         | { type: ['boardgame'] or type: ['boardgame', 'boardgameexpansions'] } | Specifies that, regardless of the type of thing asked for by id, the results are filtered by the THINGTYPE(s) specified. Multiple THINGTYPEs can be specified in a comma-delimited list.         |                                                                                                                                                                                                                                                   |
| version        | number                                                                                                           |                         | { version: 1 }                                                        | Returns version info for the item.                                                                                                                                                               |                                                                                                                                                                                                                                                   |
| videos         | number                                                                                                           |                         | { videos: 1 }                                                         | Returns videos for the item.                                                                                                                                                                     |                                                                                                                                                                                                                                                   |
| stats          | number                                                                                                           |                         | { stats: 1 }                                                          | Returns ranking and rating stats for the item.                                                                                                                                                   |                                                                                                                                                                                                                                                   |
| marketplace    | number                                                                                                           |                         | { marketplace: 1 }                                                    | Returns marketplace data.                                                                                                                                                                        |                                                                                                                                                                                                                                                   |
| comments       | number                                                                                                           |                         | { comments: 1 }                                                       | Returns all comments about the item. Also includes ratings when commented. See page parameter.                                                                                                   |                                                                                                                                                                                                                                                   |
| ratingcomments | number                                                                                                           |                         | { ratingcomments: 1 }                                                 | Returns all ratings for the item. Also includes comments when rated. See page parameter. The ratingcomments and comments parameters cannot be used together, as the output always appears in the | node of the XML; comments parameter takes precedence if both are specified. Ratings are sorted in descending rating value, based on the highest rating they have assigned to that item (each item in the collection can have a different rating). |
| page           | number                                                                                                           |                         | { page: 3 }                                                           | Defaults to 1, controls the page of data to see for historical info, comments, and ratings data.                                                                                                 |                                                                                                                                                                                                                                                   |
| pagesize       | number                                                                                                           |                         | { pagesize: 100 }                                                     | Set the number of records to return in paging. Minimum is 10, maximum is 100.                                                                                                                    |                                                                                                                                                                                                                                                   |

### Returns

```js
BggThingDto[]
```

### Examples

```js
const things = await client.thing.query({ id: [174430, 35421] });
```

## Family

Get rpg, rpgperiodical, boardgamefamily informations.  

### IFamilyRequest

| Property | Type                                                     | Required                | Example                                                           | Description                                                                                                                                                      |   |
|----------|----------------------------------------------------------|-------------------------|-------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|
| id       | number \| number[]                                       | :ballot_box_with_check: | { id: 8374 or id: [8374, 22184] }                                 | Specifies the id of the family to retrieve. To request multiple families with a single query, NNN can specify a comma-delimited list of ids.                     |   |
| type     | array of \| 'rpg'\| 'rpgperiodical' \| 'boardgamefamily' |                         | { type: ['boardgamefamily'] or type: ['boardgamefamily', 'rpg'] } | Specifies that, regardless of the type of family asked for by id, the results are filtered by the FAMILYTPE(s) specified. Multiple FAMILYTYPEs can be specified. |  

### Returns

```js
BggFamilyDto[]
```

### Examples  

```js
const families = await client.family.query({ id: [174430, 35421] });
```

## Forum List

Get a list of forums  
(in boardgame or family page (of the id), forums tab, left sidebars with all forums)

### IForumlistRequest

| Property | Type                           | Required                | Example                           | Description                                                                                                                                                                         |   |
|----------|--------------------------------|-------------------------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---|
| id       | number \| number[]             | :ballot_box_with_check: | { id: 8374 or id: [8374, 22184] } | Specifies the id of the type of database entry you want the forum list for. This is the id that appears in the address of the page when visiting a particular game in the database. |   |
| type     | array of \| 'thing'\| 'family' |                         | { type: ['thing'] }               | The type of entry in the database.                                                                                                                                                  |  

### Returns

```js
BggForumlistDto[]
```

<h3><span style="color:green">Examples</span></h3>

```js
const forumlists = await client.forumlist.query({ id: [8374,22184,59218,1029,2076], type: ['family']});
```  

## Forum

Get a **single** forum.  

### IForumRequest

| Property | Type   | Required                | Example     | Description                                                                                                                 |
|----------|--------|-------------------------|-------------|-----------------------------------------------------------------------------------------------------------------------------|
| id       | number | :ballot_box_with_check: | { id: 19 }  | Specifies the id of the forum. This is the id that appears in the address of the page when visiting a forum in the browser. |
| page     | number |                         | { page: 2 } | The page of the thread list to return; page size is 50. Threads in the thread list are sorted in order of most recent post. |  

### Returns

```js
BggForumDto[]
```

### Examples  

```js
const forum = await client.forum.query({ id: 19 });
```  

## Thread

Get a **single** thread.

### IThreadRequest

| Property       | Type   | Required                | Example                          | Description                                                                                     |
|----------------|--------|-------------------------|----------------------------------|-------------------------------------------------------------------------------------------------|
| id             | number | :ballot_box_with_check: | { id: 2571698 }                       | Specifies the id of the thread to retrieve.                                                     |
| minarticleid   | number |                         | { minarticle: 2 }                | Filters the results so that only articles with an equal or higher id than NNN will be returned. |
| minarticledate | string |                         | { minarticledate: '2021-01-03' } | Filters the results so that only articles on the specified date or later will be returned.      |
| count          | number |                         | { count: 20 }                    | Limits the number of articles returned to no more than NNN.                                     |  

### Returns

```js
BggThreadDto[]
```

### Examples  

```js
const thread = await client.thread.query({ id: 2571698, minarticledate: '2021-01-03' });
```  

## User

Get public profile information about a user by username.

### IUserRequest

| Property | Type                                                   | Required                | Example                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|----------|--------------------------------------------------------|-------------------------|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| name     | string                                                 | :ballot_box_with_check: | { name: 'mattiabanned' }  | Specifies the user name (only one user is requestable at a time).                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| buddies  | number                                                 |                         | { buddies: 1 }      | Turns on optional buddies reporting. Results are paged; see page parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| guilds   | number                                                 |                         | { guilds: 1}       | Turns on optional guilds reporting. Results are paged; see page parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| hot      | number                                                 |                         | { count: 1 }        | Include the user's hot 10 list from their profile. Omitted if empty.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| top      | number                                                 |                         | { top: 1 }          | Include the user's top 10 list from their profile. Omitted if empty.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| domain   | string - one of \| 'boardgame' \| 'rpg' \| 'videogame' |                         | { domain: 'rpg'}        | Controls the domain for the users hot 10 and top 10 lists. The DOMAIN default is boardgame                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| page     | number                                                 |                         | { page: 2 }              | Specifies the page of buddy and guild results to return. The default page is 1 if you don't specify it; page size is 100 records (Current implementation seems to return 1000 records). The page parameter controls paging for both buddies and guilds list if both are specified. If a buddies or guilds node is empty, it means that you have requested a page higher than that needed to list all the buddies/guilds or, if you're on page 1, it means that that user has no buddies and is not part of any guilds. |  

### Returns

```js
BggUserDto[]
```

### Examples  

```js
const user = await client.user.query({ name: 'mattiabanned', hot: 1, top: 1 });
```  

## Guild

Get a **single** guild.

### IGuildRequest

| Property | Type                                    | Required                | Example            | Description                                                            |
|----------|-----------------------------------------|-------------------------|--------------------|------------------------------------------------------------------------|
| id       | number                                  | :ballot_box_with_check: | { id: 1000 }       | ID of the guild you want to view.                                      |
| members  | number                                  |                         | { buddies: 1 }     | Include member roster in the results. Member list is paged and sorted. |
| sort     | string - one of \| 'username' \| 'date' |                         | { sort: 'date' }   | Specifies how to sort the members list; default is username.           |
| page     | number                                  |                         | { page: 2 }        | The page of the members list to return. Page size is 25.               |  

### Returns

```js
BggGuildDto[]
```

### Examples  

```js
const guild = await client.guild.query({ id: 1000, members: 1, sort: 'date', page: 1 });
```  

## Play

Request plays logged by a particular user or for a particular item.

### IPlayRequest

| Property | Type                                                                                                        | Required                            | Example                           | Description                                                                                                                                                                         |
|----------|-------------------------------------------------------------------------------------------------------------|-------------------------------------|-----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| username | string                                                                                                      | :ballot_box_with_check: or id       | { string: 'mattiabanned' }        | Name of the player you want to request play information for. Data is returned in backwards-chronological form. You must include either a username or an id and type to get results. |
| id       | number                                                                                                      | :ballot_box_with_check: or username | { id: 1 }                         | Id number of the item you want to request play information for. Data is returned in backwards-chronological form.                                                                   |
| type     | string - one of \| 'thing' \| 'family'                                                                      |                                     | { type: 'thing' }                 | Type of the item you want to request play information for.                                                                                                                          |
| mindate  | string                                                                                                      |                                     | { mindate: '2020-05-27' }                   | Returns only plays of the specified date or later.                                                                                                                                  |
| maxdate  | string                                                                                                      |                                     | { maxdate: '2020-06-13' }                   | Returns only plays of the specified date or earlier.                                                                                                                                |
| subtype  | string - one of \| 'boardgame' \| 'boardgameexpansion' \| 'boardgameaccessory' \| 'rpgitem' \| 'videogame'  |                                     | { subtype: 'boardgameexpansion' } | Limits play results to the specified TYPE; boardgame is the default.                                                                                                                |
| page     | number                                                                                                      |                                     | { page: 2 }                       | The page of information to request. Page size is 100 records.                                                                                                                       |  

### Returns

```js
BggPlayDto[]
```

### Examples  

```js
const play = await client.play.query({ username: 'mattiabanned' });
```  

### Collection

### ICollectionRequest

Get details about a user's collection.

| Property         | Type                                                                                                                     | Required                | Example                                    | Description                                                                                                                                                                                                                                      |
|------------------|--------------------------------------------------------------------------------------------------------------------------|-------------------------|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| username         | string                                                                                                                   | :ballot_box_with_check: | { username: 'mattiabanned' }               | Name of the user to request the collection for.                                                                                                                                                                                                  |
| version          | number                                                                                                                   |                         | { version: 1 }                             | Returns version info for each item in your collection.                                                                                                                                                                                           |
| subtype          | string - one of \| 'boardgame' \| 'boardgameexpansion' \| 'boardgameaccessory' \| 'rpgitem' \| 'rpgissue' \| 'videogame' |                         | { subtype: 'rpgitem' }                     | Specifies which collection you want to retrieve the default is boardgame.                                                                                                                                                                        |
| excludesubtype   | string                                                                                                                   |                         | { excludesubtype: }                        | Specifies which subtype you want to exclude from the results.                                                                                                                                                                                    |
| id               | number \| number[]                                                                                                       |                         | { id: 312484 } or { id: [312484, 255984] } | Filter collection to specifically listed item(s)                                                                                                                                                                                                 |
| brief            | number                                                                                                                   |                         | { brief: 2 }                               | Returns more abbreviated results.                                                                                                                                                                                                                |
| stats            | number                                                                                                                   |                         | { stats: 1 }                               | Returns expanded rating/ranking info for the collection.                                                                                                                                                                                         |
| own              | number                                                                                                                   |                         | { own: 1 }                                 | Filter for owned games. Set to 0 to exclude these items so marked. Set to 1 for returning owned games and 0 for non-owned games.                                                                                                                 |
| rated            | number                                                                                                                   |                         | { rated: 1 }                               | Filter for whether an item has been rated. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.                                                                                                            |
| played           | number                                                                                                                   |                         | { played: 1 }                              | Filter for whether an item has been played. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.                                                                                                           |
| comment          | number                                                                                                                   |                         | { comment: 1 }                             | Filter for items that have been commented. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.                                                                                                            |
| trade            | number                                                                                                                   |                         | { trade: 1 }                               | Filter for items marked for trade. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.                                                                                                                    |
| want             | number                                                                                                                   |                         | { want: 1 }                                | Filter for items wanted in trade. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.                                                                                                                     |
| wishlist         | number                                                                                                                   |                         | { wishlist: 1 }                            | Filter for items on the wishlist. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.                                                                                                                     |
| wishlistpriority | number - range 1-5                                                                                                       |                         | { wishlistpriority: 1 }                    | Filter for wishlist priority. Returns only items of the specified priority.                                                                                                                                                                      |
| preordered       | number                                                                                                                   |                         | { preordered: 1 }                          | Filter for pre-ordered games Returns only items of the specified priority. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.                                                                            |
| wanttoplay       | number                                                                                                                   |                         | { wanttoplay: 1 }                          | Filter for items marked as wanting to play. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.                                                                                                           |
| wanttobuy        | number                                                                                                                   |                         | { wanttobuy: 1 }                           | Filter for ownership flag. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.                                                                                                                            |
| prevowned        | number                                                                                                                   |                         | { prevowned: 1 }                           | Filter for games marked previously owned. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.                                                                                                             |
| hasparts         | number                                                                                                                   |                         | { hasparts: 1 }                            | Filter on whether there is a comment in the Has Parts field of the item. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.                                                                              |
| wantparts        | number                                                                                                                   |                         | { wantparts: 1 }                           | Filter on whether there is a comment in the Wants Parts field of the item. Set to 0 to exclude these items so marked. Set to 1 to include only these items so marked.                                                                            |
| minrating        | number - range 1-10                                                                                                      |                         | { minrating: 6 }                           | Filter on minimum personal rating assigned for that item in the collection.                                                                                                                                                                      |
| rating           | number - range 1-10                                                                                                      |                         | { rating: 10 }                             | Filter on maximum personal rating assigned for that item in the collection. [Note: Although you'd expect it to be maxrating, it's rating.]                                                                                                       |
| minbggrating     | number - range 1-10                                                                                                      |                         | { minbggrating: 3 }                        | Filter on minimum BGG rating for that item in the collection. Note: 0 is ignored... you can use -1 though, for example min -1 and max 1 to get items w/no bgg rating.                                                                            |
| bggrating        | number - range 1-10                                                                                                      |                         | { bggrating: 2 }                           | Filter on maximum BGG rating for that item in the collection. [Note: Although you'd expect it to be maxbggrating, it's bggrating.]                                                                                                               |
| minplays         | number                                                                                                                   |                         | { minplays: 3 }                            | Filter by minimum number of recorded plays.                                                                                                                                                                                                      |
| maxplays         | number                                                                                                                   |                         | { maxplays: 3 }                            | Filter by maximum number of recorded plays. [Note: Although the two maxima parameters above lack the max part, this one really is maxplays.]                                                                                                     |
| showprivate      | number                                                                                                                   |                         | { showprivate: 1 }                         | Filter to show private collection info. Only works when viewing your own collection and you are logged in.                                                                                                                                       |
| collid           | number                                                                                                                   |                         | { collid: 1000 }                           | Restrict the collection results to the single specified collection id. Collid is returned in the results of normal queries as well.                                                                                                              |
| modifiedsince    | string                                                                                                                   |                         | { modifiedsince: '20-12-31' }              | Restricts the collection results to only those whose status (own, want, fortrade, etc.) has changed or been added since the date specified (does not return results for deletions). Time may be added as well: modifiedsince=YY-MM-DD%20HH:MM:SS |


### Returns

```js
BggPlayDto[]
```

### Examples  

```js
const play = await client.play.query({ username: 'mattiabanned' });
``` 
