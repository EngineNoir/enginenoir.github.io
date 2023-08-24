document.addEventListener('DOMContentLoaded', function() {
  let reminders = JSON.parse(localStorage.getItem('reminders')) || [];

  // Add existing reminders to the list
  reminders.forEach(function(reminder) {
    addReminderToPage(reminder);
  });

  let addReminderButton = document.getElementById('addReminderButton');
  addReminderButton.addEventListener('click', addReminder);

  function addReminder() {
    let reminderInput = document.getElementById('reminderInput');
    let reminderText = reminderInput.value;
    if (reminderText) {
      let reminder = {
        text: reminderText,
        time: new Date().getTime()
      };
      reminders.push(reminder);
      localStorage.setItem('reminders', JSON.stringify(reminders));
      addReminderToPage(reminder);
      reminderInput.value = '';
    }
  }

 function addReminderToPage(reminder) {
    let reminderList = document.getElementById('reminderList');
    let reminderItem = document.createElement('li');
    let reminderText = document.createTextNode(reminder.text);
    let reminderLink = document.createElement('a');
    reminderLink.href = '#';
    reminderLink.innerHTML = ' [Remove]';
    reminderLink.onclick = function(event) {
        event.preventDefault();
        let index = reminders.indexOf(reminder);
        reminders.splice(index, 1);
        localStorage.setItem('reminders', JSON.stringify(reminders));
        reminderItem.remove();
    };
    reminderItem.appendChild(reminderText);
    reminderItem.appendChild(reminderLink);
    reminderList.appendChild(reminderItem);
}

let reminderInput = document.getElementById('reminderInput');
reminderInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addReminder();
  }
});

});


