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

**Note that there is a total of 50 possible stories. Therefore for each verifiable, completed story you gain towards 2% your final mark. Completing all 50 will result in a mark of 100%.**

---

- ✅ Repo only has a single `index.html` file at the root
- ✅ Repo only has a single `styles.css` file at the root
- ✅ Repo only has a `scripts.js` file at the root that uses `import` to pull in all other JavaScript
- ✅ There is a components folder with components as JavaScript files in accordance with their name (i.e. `example-component.js`)
- ✅ Each file in the components folder registers a web component via `customElements.define` that is the same name as the file

---

- ✅ All show data loaded via a `fetch` call from the `https://podcast-api.netlify.app/shows`
- ✅ When viewing a specific show I want data loaded via `fetch` from individual show endpoint
- ✅ There is a loading state while initial data is being loaded
- ✅ There is a loading state while new data is being loaded
- ✅ All show data is kept in memory so that it does not have to be reloaded again during the same session

---

- ✅ User should see the name of all available shows on the platform
- ✅ User should shows broken down into seasons, sorted by number
- ✅ User should have a way to listen to any episode in a season for a show
- ✅ User should be able to see all episodes associated with a season as a seperate view
- ✅ ...

---

- ✅ User should have a  see a preview image of shows when browsing
- ✅ User should see the amount of season in a show when browsing
- ✅ User should see a human-readable date to when a show was last updated
- ✅ User should what genres a show is associated with when browsing
- ✅ ...

---

- ✅ User should see a preview image of seasons for specific show
- ✅ User should see the amount of episodes in a season for specific show
- ✅ User should see a human-readable date to when a show was last updated
- ✅ User should see what genres a show is associated with when browsing
- ✅ ...

---

- ✅ User should be able to mark specific episodes as favourites so that I can find them again
- ✅ User should be able to see the associated show and season when viewing my favourites
- ✅ User should be able able to remove episodes from my favourites
- ✅ ...
- ✅ ...

---

- ✅ I want to be able to arrange shows based on title from A-Z
- ✅ I want to be able to arrange shows based on title from Z-A
- ✅ I want to be able to arrange shows showing the most recent updated
- ✅ I want to be able to arrange shows showing the furthest back updated
- ✅ ...

---

- ✅ There is a an `api.js` file where all `fetch` requests are located and exported as functions
- ✅ There is a an `store.js` file that manages all global state by means of the [Observer Pattern](https://www.patterns.dev/posts/observer-pattern/)
- ✅ All presentation/view  logic is handled by registered Web Components called via HTML.
- ✅ ...
- ✅ ...


---

- ✅ I want to see the date and time that I added something as a favourite
- ✅ I want to be able to arrange my favourites based on title from A-Z
- ✅ I want to be able to arrange my favourites based on title from Z-A
- ✅ I want to be able to  arrange my favourites starting with the most recent updated
- ✅ I want to be able to arrange my favourite starting with the furthest back updated

---

- ✅ I want to automatically filter shows by a genre if the genre label is clicked on for a specific show
- ✅ I want the platform to remember and show what episodes I listened all the way through
- ✅ I want the platform to remember the exact timestamp where I stoped listening within a 10 seconds accuracy of closing
- ✅ App should remember and show the exact timestamp location of where I left off any episode
















---

- ✅ I want the audio player to always be visible so that I can listen to episodes while I browse
- ✅ I want to receive a notification that confirms I want to close the page when audio is playing so that I don’t accidently close the page.
- ✅ I want the platform to remember what show and episode I listened to last when returning to the platform
- ✅ I want the platform to remember and show what episodes I started listening to

---


