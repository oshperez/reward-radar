# Web Development Project 5 - Reward Radar Dashboard

Submitted by: **Osmani Hernandez**

This web app: **Displays a list of active video game giveaways with filtering, searching, and summary statistics. Users can search giveaways by title, filter by platform or type, and view data in a clean table layout.**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - The dashboard displays at least 10 unique items, one per row
  - The dashboard includes at least two features in each row
- [x] **`useEffect` React hook and `async`/`await` are used**
- [x] **The app dashboard includes at least three summary statistics about the data**
  - The app dashboard includes at least three summary statistics about the data, such as:
    - Total value of all giveaways
    - Number of giveaways
    - Highest prize value
- [x] **A search bar allows the user to search for an item in the fetched data**
  - The search bar **correctly** filters items in the list, only displaying items matching the search query
  - The list of results dynamically updates as the user types into the search bar
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - The filter restricts items in the list using a **different attribute** than the search bar
  - The filter **correctly** filters items in the list, only displaying items matching the filter attribute in the dashboard
  - The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [x] Filters use different input types
  - e.g., as a text input, a dropdown or radio selection, and/or a slider

The following **additional** features are implemented:

- [x] Pagination to navigate through the list of giveaways

## Video Walkthrough

Reward Radar - Dashboard - Watch Video

<div>
    <a href="https://www.loom.com/share/6cceafcd214b4a27bf602d3a22cd008c">
      <p>Reward Radar - Dashboard - Watch Video</p>
    </a>
    <a href="https://www.loom.com/share/6cceafcd214b4a27bf602d3a22cd008c">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/6cceafcd214b4a27bf602d3a22cd008c-856131e098dec13c-full-play.gif">
    </a>
  </div>

GIF created with [Loom](https://www.loom.com)

## Notes

Describe any challenges encountered while building the app.

The most challenging parts were:

- Implementing a clean and responsive UI using Material UI components
- Managing dynamic filtering and pagination based on multiple inputs (search, platform, type)

## License

    Copyright 2025 Osmani Hernandez

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
