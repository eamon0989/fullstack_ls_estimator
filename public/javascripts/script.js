document.addEventListener('DOMContentLoaded', e => {
  const JS_COURSES = ['JS101/JS109', 'JS120/JS129', 'JS130/JS139', 'LS170/LS171',
    'JS175', 'LS180/LS181', 'JS185', 'LS202', 'LS215/LS216', 'JS230/JS239'];

  const RB_COURSES = ['RB101/RB109', 'RB120/RB129', 'RB130/RB139', 'LS170/LS171',
    'RB175', 'LS180/LS181', 'RB185', 'LS202', 'JS210/211', 'LS215/LS216', 'JS225/229', 'JS230/JS239'];

  let h1 = document.querySelector('header > h1');
  let course;

  if (/ruby/gi.test(h1.textContent)) {
    course = RB_COURSES;
  } else if (/javascript/gi.test(h1.textContent)) {
    course = JS_COURSES;
  }

  let passed109Div = document.getElementById('passed_109');
  let selectForm = document.getElementById('select_course');
  let hoursForm = document.getElementById('hours_form');
  let yesBtn = document.getElementById('yes'); 
  let totalHoursDiv = document.getElementById('hours_total_and_week'); 
  totalHoursDiv.style.display = 'none';

  if (yesBtn) {
    yesBtn.addEventListener('click', e => {
      e.preventDefault();
      passed109Div.style.display = 'none';
      selectForm.style.display = 'block';
  
      let option = selectForm.querySelector('option');
      let select = option.parentElement;
  
      course.slice(1).forEach(course => {
        appendClone(option, select, course);
      })
  
      option.remove();
      select.appendChild(option);
      let selected = selectForm.querySelector('option');
      selected.setAttribute('selected', 'selected');
    })
  }

  if (selectForm) {
    selectForm.style.display = 'none';

    selectForm.addEventListener('submit', e => {
      e.preventDefault();
      let select = document.getElementById('select_list');
      let selected = select.value;
      let coursesDone = course.slice(0, course.indexOf(selected));
      selectForm.style.display = 'none';
  
      let ul = document.getElementById('course_list');
      let li = document.getElementById('list_item');
  
      coursesDone.forEach(course => {
        appendCloneEditChild(li, ul, course);
      })
  
      li.remove();
      let hoursForm = document.getElementById('hours_form');
      hoursForm.style.display = 'block';
    })
  }

  if (hoursForm) {
    hoursForm.style.display = 'none';
    hoursForm.addEventListener('submit', e => {
      e.preventDefault();
      totalHoursDiv.style.display = 'block';
      hoursForm.style.display = 'none';
      let data = new FormData(hoursForm);
      let json = {};
      
      for (let prop of data) {
        json[prop[0]] = prop[1];
      }
    })
  }

  totalHoursDiv.addEventListener('submit', e => {
    let data = new FormData(totalHoursDiv);
    let json = {};
    for (let prop of data) {
      json[prop[0]] = prop[1];
    }
  })
})

function appendClone(element, parent, text) {
  let next = element.cloneNode(true);
  next.textContent = text;
  next.id = '';
  next.value = text;
  next.name = text;
  parent.appendChild(next);
}

function appendCloneEditChild(element, parent, text) {
  let next = element.cloneNode(true);
  next.id = '';
  next.firstElementChild.textContent = text;
  next.lastElementChild.name = text;
  parent.appendChild(next);
}