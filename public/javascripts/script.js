document.addEventListener('DOMContentLoaded', e => {
  const COURSES = ['JS101/JS109', 'JS120/JS129', 'JS130/JS139', 'LS170/LS171',
    'JS175', 'LS180/LS181', 'JS185', 'LS202', 'LS215/LS216', 'JS230/JS239'];

  let div = document.getElementById('passed_109');
  let selectForm = document.getElementById('select_course');
  let hoursForm = document.getElementById('hours_form');
  let yesBtn = document.getElementById('js_yes');  
  let noBtn = document.getElementById('js_no');  
  let submitHoursButton = document.getElementById('submit_hours_button');  
  
  yesBtn.addEventListener('click', e => {
    e.preventDefault();
    div.style.display = 'none';
    selectForm.style.display = 'block';
  })
  

  selectForm.addEventListener('submit', e => {
    e.preventDefault();
    let select = document.getElementById('select_list_js');
    let selected = select.value;
    console.log(selected);
    let coursesDone = COURSES.slice(0, COURSES.indexOf(selected));
    let ul = document.getElementById('course_list');
    selectForm.style.display = 'none';

    coursesDone.forEach(course => {
      let li = document.getElementById('list_item');
      let next = li.cloneNode(true);
      next.firstElementChild.textContent = course;
      next.id = '';
      next.lastElementChild.id = course;
      next.lastElementChild.name = course;
      ul.appendChild(next);
    })

    let hoursForm = document.getElementById('hours_form');
    hoursForm.style.display = 'block';
  })

  selectForm.style.display = 'none';
  hoursForm.style.display = 'none';
})

