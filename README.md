# 📡 API

## All Shows

All shows can be returned by requesting the following:

```
https://podcast-api.netlify.app/shows
```

## Details for Specific Show

Use the `id` value of a show from the request above to get detailed information for a specific show by means of the following.

**REMEMBER TO SWAP OUT `<SHOW_ID>` BELOW WITH THE ID OF THE ACTUAL SHOW YOU WANT DETAILS FOR**

```
https://podcast-api.netlify.app/id/<SHOW_ID>
```

# 🧑 User Stories

**There is a total of 50 possible stories. Therefore for each verifiable, completed story you gain towards 2% your final mark. Completing all 50 will result in a mark of 100%. Note that user stories can be completed in any order. If you are stuck on a specific one perhaps try completing another one instead.**

---

- ✅ Repo only has a single `index.html` file at the root
- ✅ Repo only has a single `styles.css` file at the root
- ✅ Repo only has a `scripts.js` file at the root that uses `import` to pull in all other JavaScript
- ✅ There is a components folder with components as JavaScript files in accordance with their name (i.e. `example-component.js`)
- ✅ Each file in the components folder registers a web component via `customElements.define` that is the same name as the file
- ✅ `index.html` file is loaded automatically when live server is started at root of project

---

- ✅ All show data loaded via a `fetch` call from the `https://podcast-api.netlify.app/shows`
- ✅ When viewing a specific show I want data loaded via `fetch` from individual show endpoint
- ✅ There is a loading state while initial data is being loaded
- ✅ There is a loading state while new data is being loaded
- ✅ All show data is kept in memory so that it does not have to be reloaded again during the same session

---

- ✅ User sees the name of all available shows on the platform
- ✅ User sees shows broken down into seasons, sorted by number
- ✅ User has a way to listen to any episode in a season for a show
- ✅ User is able to see all episodes associated with a season as a seperate view
- ✅ User is able to toggle between different seasons for the same show

---

- ✅ User sees preview image of shows when browsing
- ✅ User sees the amount of season in a show when browsing
- ✅ User sees a human-readable date to when a show was last updated
- ✅ User sees what genres a show is associated with when browsing

---

- ✅ User should see a preview image of seasons for specific show
- ✅ User should see the amount of episodes in a season for specific show
- ✅ User should see a human-readable date to when a show was last updated
- ✅ User should see what genres a show is associated with when browsing

---

- ✅ User is able to mark specific episodes as favourites so that they can find them again
- ✅ User is able to see the associated show and season when viewing my favourites
- ✅ User is able able to remove episodes from their favourites

---

- ✅ User is able to arrange list of shows based on title from A-Z
- ✅ User is able to arrange list of shows based on title from Z-A
- ✅ User is able to arrange list of showing the most recent updated
- ✅ User is able to arrange list of shows from least recent updated
- ✅ User receives a notification that confirms they want to close the page when audio is playing

---

- ✅ There is a an `api.js` file where all `fetch` requests are located and exported as functions
- ✅ There is a an `store.js` file that manages all global state by means of the [Observer Pattern](https://www.patterns.dev/posts/observer-pattern/)
- ✅ All presentation/view  logic is handled by registered Web Components called via HTML.

---

- ✅ User sees the date and time that I added something as a favourite
- ✅ User is able to arrange favourites based on title from A-Z
- ✅ User is able to arrange favourites based on title from Z-A
- ✅ User is able to  arrange favourites starting with the most recent updated
- ✅ User is able to arrange favourites starting with the furthest back updated

---

- ✅ User is able to filter shows based on title by means of a text input
- ✅ User is able to filter episodes based on title by means of a text input

---

- ✅ App remembers what shows and episode user listened to last when returning to the platform
- ✅ Automatically filters shows by a genre if the genre label is clicked on
- ✅ App remembers and shows what episodes user listened all the way through
- ✅ App remembers the exact timestamp where user stoped listening within a 10 seconds accuracy of closing
- ✅ App remembers and shows the exact timestamp location of where I left off any episode
- ✅ Audio player is always visible so that user can listen to episodes while I browse

---

- ✅ User is presented with a sliding carousel of possible shows they might be interested in on the landing page
- ✅ User is able to search for specific episodes based on a phrase they type into an search input
