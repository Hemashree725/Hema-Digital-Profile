$(document).ready(function(){
  const saved = localStorage.getItem("mimi-theme");
  if(saved === "light") document.body.classList.add("light");
  updateThemeIcon();

  $("#themeBtn").on("click", function(){
    $("body").toggleClass("light");
    localStorage.setItem("mimi-theme", $("body").hasClass("light") ? "light" : "dark");
    updateThemeIcon();
  });

  function updateThemeIcon(){
    $("#themeBtn").text($("body").hasClass("light") ? "☀" : "☾");
  }

  $("#contactForm").on("submit", function(e){
    e.preventDefault();
    const name = $("#name").val().trim();
    $("#formMsg").text("Thanks, " + name + "! Your message has been received. ✓");
    this.reset();
  });

  $(".feature-card, .project-card").on("mouseenter", function(){
    $(this).css("cursor","pointer");
  });
});