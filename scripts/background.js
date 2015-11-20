$(function() {
 
  var htmlNav = "<ul>";
  htmlNav += "<li class='website-entry'><a id='homeLink' href='javascript:void(0)' data-nav='home'>Home</a></li>";
  
  
  // populate content list
  var html = "<ul id='contentList'>";
  
  var sections = PAGES.items[0].content.split("<hr />");
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i].trim();
    html += (i == 0) ? "<li id='home' class='website-entry'>" : "<li class='website-entry'>";
    
    html += "<section>" + section + "</section></li>";
  }
  
  html += "<div class='spacer'></div></ul><ul class='fan' id='blog-post-ul'>";
  
  for (i = 0; i < POSTS.items.length; i++) {
    var item = POSTS.items[i];
    html += "<li class='blog-post-li website-entry' id='post" + i + "'><section class='blog-post'>";
    var blogTitle = new Date(item.published).format("m/d/yy") + " \u2022 " + item.title;
    html += "<h3>" + blogTitle + "</h3>"; 
    html += "<br>" + item.content + "</section></li>";
    
    htmlNav += "<li><a href='javascript:void(0)' data-nav='post" + i + "'>" + blogTitle + "</a></li>";
  }
  
  html += "</ul>";
  htmlNav += "</ul>";

  $("#listContainer").append(html);
  
  $("#leftNav").html(htmlNav);
  
  $("#leftNav").find("a").click(function(e) { 
    
    var target = $("#" + $(e.toElement).attr('data-nav'));
     
    $("#listContainer").scrollTo(target, 1000);
  });
  //stroll.bind('#blog-post-ul' );
});            
