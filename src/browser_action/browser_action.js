function load() {

  // Get the event_list container
  var event_list = document.getElementById("comment_list");

  // Retrieve data from local memory
  chrome.storage.local.get("comments", function(data) {

    // If the data is updated
    if(typeof(data.comments) !== "undefined") {

      event_list.innerHTML = "";

      // Generate list for each event entry
      data.comments.forEach(function(comment, idx, array) {

        // Check if the element is the last one. Use a different css style if true.
        if (idx === (array.length - 1)) {
          var elmnt = document.createElement("ul")
        } else {
          var elmnt = document.createElement("li")
        }

        // Obtain the event name, venue and link.
        var comment_title = 'Comment';
       
        var comment_text = comment.comment_text;

        // Container for the event venue.
        var div = document.createElement("div");
        div.innerHTML = comment_title;
        div.setAttribute("class", "title");

        var a = document.createElement("a");

        a.innerHTML = comment_text;
        // Open a blank tab when the link is clicked.
        a.setAttribute("target", "_blank");
        

        // Put the event venue and link to the element
        elmnt.appendChild(div);
        elmnt.appendChild(a);

        // Append the new element to the list.
        event_list.appendChild(elmnt);

      });
    }
  });
}

// Trigger the function when DOM of the pop-up is loaded.
document.addEventListener('DOMContentLoaded', function() {

  load();

});