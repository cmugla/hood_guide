# Hood guide
  Your first friend when moving to a new neighborhood
  
  [Check it out](https://serene-haleakala-88821.herokuapp.com/)

## Description
  I just moved and it's a little scary moving to a new nighborhood. You don't know which grocery stores to go to, which is the closest dry cleaner with the best reviews, what bar is recommended, movie theaters with the best picture, current events, etc. 
  
  There are many outlets to research this stuff. When I was looking for apartments and I wanted to get a read on what the neighborhood would be like, I started with Google Maps... I'd zoom in on the address and make judgments of the nearby businesses off of their name, and possibly street views. Sometimes I go further and look at yelp reviews of some of them, possibly filter news articles by area. Ultimately, it's a lot of work and doesn't really give me a clear view.
  
  I'd like to build an app that compiles all this info into one place, painting a slightly more clear picture of what the neighborhood's vibe will be and potentially give resources to find the most popular places. Ideally, users could post and share their favorite spots. Since I'm gearing it to newcomers, it would also provide a pseudo community for people to potentially meet other new comers. 

## User Stories

  - As a guest, I should be able to get info about the neighborhood based on an address, including relevant links
  - As a user, I should be able to save my address/neighborhood
  - As a user, I should be able to get info about my neighborhood
  - As a user, I should be able to save favorite articles
  - As a user, I should be able to save favorite events
  - As a user, I should be able to view all my favorites in a profile page

## Possible API's linked

What's happening right now:
  - NY Times: recent news articles; filtered by date and location
  - Eventful: UPcoming shows; filtered by date and location

Essentials
  - Yelp: grocery stores, dining, drug stores, laundramats, nail salons, etc. ; filtered by location and review rating (most popular)

## Other Links

  - Join [Next Door](https://nextdoor.com/find-neighborhood/) for social networking with your neighbors
  - Check out [NeighborhoodScout](http://www.neighborhoodscout.com/) to see statistics about your neighborhood

## Proof of Concept limitations
  
  Since the project deadline is immediate, I am going to scale the overall concept back to meet big-idea goals for this iteration. Thus, the following limitations are true:
  
  - Neighborhoods will only be in New York
  - Initial search input will be the general Neighborhood name, not an address
  - Events will be shown for the borough of the neighborhood selected, not the specific neighborhood
  - News Articles will be shown based on that neighborhood's prevalence in the article (this adds a bit of unpredictability to the targetted news, but I think will still paint a bit of a picture)
  - Users will be able to save articles and events to their profile
  - Yelp businesses will only show Yelp's rating
  - Yelp businesses will show by popularity, not by category

## Models

  - User model: gets login/new-user info, encrypts passwords & posts to database
  - API Data model accesses API data: 
    - NYTimes: gets (via request) articles from NY Times API
      - reads location or borough query, depending on how specific the user/guest inputs
    - Eventful: gets (view request) events from Eventful API
      - This will be filtered by boroughs, so there will be a drop-down menu to choose borough within the search section, Eventful will only take in the query borough 
    - Yelp: gets most popular businesses in the neighborhood

## Wireframes

Homepage with possible full bleed image or just colorful...
![homepage](/wireframes/home.jpg)

When a neighborhood is searched...
![hood page](/wireframes/hood-page.jpg)

When a user wants to create a profile...
![new user page](/wireframes/new-user.jpg)

When a user wants to login...
![login user page](/wireframes/login-user.jpg)

## Future Goals

  - Incorporate the Google Maps API so users and guests can search by address
  - Show events based on the neighborhood (depending on radius outside of address)
  - Show events in categorized blocks, categories as a whole listed based on their popularity (ex. bushwick: concerts listed above museums; upper east side: museum exhibits listed above concerts; etc.)
  - Organize Yelp businesses by category, same sorting method as above
  - History of neighborhood, pictures/maps of the neighborhood through the decades
