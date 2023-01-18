<!-- omit in toc -->
# Example Podcast API

<!-- omit in toc -->
**Table of Contents**

- [🤖 Technology](#-technology)
- [📦Data](#data)
	- [Relationships](#relationships)
	- [Endpoints](#endpoints)
	- [Genre Titles](#genre-titles)
- [🧑 User Stories](#user-stories)

## 🤖 Technology

**You are welcome to attempt this project with plain JavaScript, however it is strongly advised that you use a framework and/or build-process to manage all complexity involved.** 

You are welcome to use any technology set that you are comfortable, whether this be Next.js, Create React App (CRA) or Vue.js. It is recommended that you use TypeScript as well, however you are welcome to avoid TypeScript if you do not feel comfortable with it’s usage just yet.

## 📦Data

**Data consists of three basic semantic units**

- `SHOW`: A specific podcast that contains a single or several `SEASON`
- `SEASON`: A collection of `EPISODE` released across a specific timespan
- `EPISODE`: Corresponds to a specific MP3 file that user can listen

However, the following information is also exposed via the API

- `PREVIEW`: A summarised version of a `SHOW` that only contains basic information. Usually exposed when an array of different `SHOW` information is requested.
- `GENRE`: Information related to a (one of many) genres that can be assigned to a `SHOW`

### Relationships

The following chart indicates the relations between units of data. It uses Entity Relationship mapping. In order to understand the meaning of symbols in the chart please read [the overview on the Mermaid.js documentation](https://mermaid.js.org/syntax/entityRelationshipDiagram.html). 

Note that the text between the units indicates what properties map to one another. It is separated by means of three underscores (`___`). The value before the underscores is the mapping from the parent object, whereas the values after the underscore is the mapping from the child object.

_Note that is some cases there is no way to infer the parent from the child itself , in those cases just the parent map is noted, with no value after the underscores_.

```mermaid
erDiagram

PREVIEW {
    number id
    string title
    string description
		number seasons
		string image
		array genreIds
		updated string
}

SHOW {
    number id
    string title
    string description
		array seasons
}

SEASON {
  number id
	string title
	string image
	array episodes
}

EPISODE {
	number id
	string file
	string title
}

GENRE {
	number id
	string title
	string description
	array showIds
}

PREVIEW ||--|| SHOW: id___id
PREVIEW }|--|{ GENRE: genreIds___showIds
SHOW }|--|{ GENRE: genreIds___showIds
SHOW ||--|{ SEASON: seasons___
SEASON ||--|{ EPISODE: episodes___

```

### Endpoints

Data can be called via a `fetch` request to the following three endpoints. Note that there is not always a one-to-one mapping between endpoints and actual data structures. Also note that  ***`<ID>`** indicates where the dynamic ID for the requested item should be placed. For example: `[https://podcast-api.netlify.app/genre/3](https://podcast-api.netlify.app/genre/3)`* 

| URL |  |
| --- | --- |
| `https://podcast-api.netlify.app` | Returns an array of PREVIEW |
| `https://podcast-api.netlify.app/genre/<ID>` | Returns a GENRE object |
| `https://podcast-api.netlify.app/id/<ID>` | Returns a SHOW object with several SEASON and EPISODE objects directly embedded within |

### Genre Titles

Since genre information is only exposed on `PREVIEW` by means of the specific `GENRE` id, it is recommended that you include the mapping between genre id values and title in your code itself:

| ID | Title |
| --- | --- |
| 1 | Personal Growth |
| 2 | Investigative Journalism |
| 3 | History |
| 4 | Comedy |
| 5 | Entertainment |
| 6 | Business |
| 7 | Fiction |
| 8 | News |
| 9 | Kids and Family |

## 🧑 User Stories

**There is a total of 50 possible stories below that determine your final grade.**

Each completed story that is verified by lecturer will result in you receiving towards 2% your final mark. Completing all 50 will result in a mark of 100%. Note that user stories can be completed in any order. If you are stuck on a specific one perhaps try completing another one instead.

---

- ✅Project is deployed to a custom Netlify URL

- ✅ All views in the app display correct on the smallest mobile devices available “Iphone SE”. This can be emulated in Chrome Dev tools.

- ✅ All favicon information has been created an added correctly via [https://realfavicongenerator.net/](https://realfavicongenerator.net/) (you are welcome to use any free PNG image you find on [https://www.flaticon.com/](https://www.flaticon.com/))

- ✅ All metatag information has been creataed and added via [https://metatags.io/](https://metatags.io/) (You are welcome to use any free image you find on [https://unsplash.com/](https://unsplash.com/)). Be mindful to manually replace all URL values (especially image URL) to absolute Netlify URL values (you will need to deploy to Netlify first)

---

- ✅ All show data loaded via a `fetch` call from the `https://podcast-api.netlify.app/shows`
- ✅ All data is loaded a `fetch` and no endpoint-specific data is hardcoded
- ✅ When viewing a specific show data is loaded via `fetch` from individual show endpoint
- ✅ There is a loading state while initial data is being loaded
- ✅ There is a loading state while new data is being loaded

---

- ✅ User sees the name of all available shows on the platform
- ✅ User sees shows broken down into seasons, sorted by number
- ✅ User has a way to listen to any episode in a season for a show
- ✅ User is able to see a view where only episodes for a specific selected season is shown
- ✅ User is able to toggle between different seasons for the same show

---

- ✅ User sees preview image of shows when browsing
- ✅ User sees the amount of season as number in a show when browsing
- ✅ User sees a human-readable date to when a show was last updated
- ✅ User sees what genres (as genre titles) a show is associated with when browsing

---

- ✅ User sees a preview image of seasons for specific show
- ✅ User sees the amount of episodes as number for a season
- ✅ User should see a human-readable date to when a show was uploaded
- ✅ User are able to go back to a show view from an season-specific view

---

- ✅ User is able to mark specific episodes as favourites so that they can find them again
- ✅ User can visit a view where they see all their favourites
- ✅ User is able to see the associated show and season when episode in favourite
- ✅ Related by season/show epsiodes are grouped together in favourites
- ✅ User is able able to remove episodes from their favourites

---

- ✅ User is able to arrange list of shows based on title from A-Z
- ✅ User is able to arrange list of shows based on title from Z-A
- ✅ User is able to arrange list of showing the most recent updated
- ✅ User is able to arrange list of shows from least recent updated
- ✅ User is able to filter shows based on title by means of a text input
- ✅ User is able to find shows based on fuzzy matching of concepts (you can use something like [https://fusejs.io/](https://fusejs.io/))

---

- ✅ User sees the date and time that I added something as a favourite
- ✅ User is able to arrange favourites based on title from A-Z
- ✅ User is able to arrange favourites based on title from Z-A
- ✅ User is able to arrange favourites starting with the most recent updated
- ✅ User is able to arrange favourites starting with the furthest back updated

---

- ✅ Audio player is always visible so that user can listen to episodes while I browse
- ✅ User receives a notification that confirms they want to close the page when audio is playing
- ✅ App remembers what shows and episode user listened to last when returning to the platform
- ✅ Automatically filters shows by a genre if the genre label is clicked on
- ✅ App remembers and shows what episodes user listened all the way through
- ✅ App remembers the exact timestamp where user stoped listening within a 10 seconds accuracy of closing
- ✅ App remembers and shows the exact timestamp location of where I left off any episode

---

- ✅ User is presented with a sliding carousel of possible shows they might be interested in on the landing page
- ✅ User is able to log in via [https://app.supabase.com](https://app.supabase.com/) authentication
- ✅ User favourites are stored in [https://app.supabase.com](https://app.supabase.com/) database
- ✅ User favourites are automatically synced when logged in, ensuring that they share favourites between devices
- ✅ Users are able to share their favourites as a publicly accessible URL
