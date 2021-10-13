let json = fetch('/getAverages').then(res => res.json());
const JS_COURSES = ['JS101/109', 'JS120/129', 'JS130/139', 'LS170/171',
'JS175', 'LS180/181', 'JS185', 'LS202', 'LS215/216', 'JS230/239'];

const RB_COURSES = ['RB101/109', 'RB120/129', 'RB130/139', 'LS170/171',
'RB175', 'LS180/181', 'RB185', 'LS202', 'JS210/211', 'LS215/LS216', 'JS225/229', 'JS230/239'];

document.addEventListener('DOMContentLoaded', e => {
  let ul = document.getElementById('averages_list');
  let courseName = window.location.href.match(/\w+$/)[0];  
  let courses;

  if (courseName === 'javascript') {
    courses = JS_COURSES;
  } else if (courseName === 'ruby') {
    courses = RB_COURSES;
  }

  json.then(json => {
    courses.forEach(course => {
      let hours = json[course];
  
      let li = document.createElement('li');
      li.textContent = `On average, ${course} takes ${hours} hours.`;
      ul.appendChild(li);
    })
  })
})


