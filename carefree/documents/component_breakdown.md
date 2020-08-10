# Component Breakdown 

The component Breakdown is focusing on what's included in the MVP (I.e. P0 features) 

### Home/Search Page 

* NavBar – shared component (reused across all pages) 
* Header – contains welcome message and search guidance, Non-Reusable  
* Search – form used to enter search criteria, Non-Reusable 
    * Search field 
    * Zip code/location field
    * Search button

### Filter Page 

* NavBar – shared component (reused across all pages) 
* Filter, Non-Reusable
    * Slider
    * “Go” Button
    * “Reset Filter” Button
    * Filter Headers
* Provider List- Non-reusable
    * Doctor Card- Reusable
        * Name 
        * Specialty 
        * Location 
        * Email address 
        * Phone number    
        * Profile picture 

### Profile Page 

* NavBar – shared component (reused across all pages) 
* Doctor Overview (phone number, email, icon, address), Reusable 
    * This component would contain the doctor’s phone number, email, icon, and address. It would be reusable for each doctor on their profile  
* Information sections with dropdown, Reusable
    * This component could be reused throughout the doctor’s profile page for different information sections such as insurance, servies, and educational background 
* Back button with text attached, Reusable
    * This component can be reused throughout the web application to include back buttons with text for redirection throughout pages  

### Comparison Page 

* NavBar – shared component (reused across all pages) 
* Dynamic and Extended Doctor Card (Dedicated component)
    * Doctor card with more information seperated into rows
    * Rows of info can be modified (Add a section for years in service, remove location, etc.)
* Table (page div)
* Column of comparables (page div)
    * For each row, add the attribute (name, cost, etc.) to the first column of the table
    * Also includes a button and dropdown to add new comparable rows