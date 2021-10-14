let json = fetch('/getAverages').then(res => res.json());

const JS_COURSES = ['JS101/109', 'JS120/129', 'JS130/139', 'LS170/171',
'JS175', 'LS180/181', 'JS185', 'LS202', 'LS215/216', 'JS230/239'];

const RB_COURSES = ['RB101/109', 'RB120/129', 'RB130/139', 'LS170/171',
'RB175', 'LS180/181', 'RB185', 'LS202', 'JS210/211', 'LS215/216', 'JS225/229', 'JS230/239'];

document.addEventListener('DOMContentLoaded', e => {
  let jsBtn = document.getElementById('javascript');
  let rbBtn = document.getElementById('ruby');
  let header = document.getElementById('header');
  header.style.display = 'none';
  let courseName;

  jsBtn.addEventListener('click', e => {
    courseName = 'javascript';
    displayList(courseName);
  })

  rbBtn.addEventListener('click', e => {
    courseName = 'ruby';
    displayList(courseName);
  })
})

function displayList(courseName) {
  let ul = document.getElementById('averages_list');
  let content = document.getElementById('content');
  content.style.display = 'none';
  let h1 = document.getElementById('h1');
  let courses;

  if (courseName === 'javascript') {
    courses = JS_COURSES;
    h1.textContent = h1.textContent + 'JavaScript';
  } else if (courseName === 'ruby') {
    courses = RB_COURSES;
    h1.textContent = h1.textContent + 'Ruby';
  }
  
  header.style.display = 'block';

  json.then(json => {
    // console.log(json);

    courses.forEach(course => {
      let hours = json[course].avg;
      let max = json[course].max;
  
      let li = document.createElement('li');
      li.textContent = `On average, ${course} takes ${hours} hours. The max on record is ${max}.`;
      ul.appendChild(li);
    })
  })
}

