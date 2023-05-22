const onWheel = e => {
  e.preventDefault();
  const container = document.getElementById("project-list");
  const containerScrollPosition = document.getElementById("project-list").scrollLeft;
  container.scrollTo({
    top: 0,
    left: containerScrollPosition + e.deltaY,
    behaviour: "smooth"
  });
};
