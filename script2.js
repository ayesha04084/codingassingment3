
const users = [
    { username: 'student1', password: 'password1', name: 'John Doe' },
    { username: 'student2', password: 'password2', name: 'Jane Smith' }
  ];
  
  const monthlyActivities = [
    { id: 1, activity: "Create project file which contains tables between 12 to 19", subject: "Maths" },
    { id: 2, activity: "Write an essay on a given topic My Favourite Leader", subject: "English" },
   
  ];
  
  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      document.getElementById('login-error').textContent = '';
      document.getElementById('login-form').classList.add('hidden');
      document.getElementById('welcome').classList.remove('hidden');
      document.getElementById('welcome-username').textContent = user.name;
    } else {
      document.getElementById('login-error').textContent = 'Invalid username or password';
    }
  }
  
  function showMonthlyActivity() {
    document.getElementById('welcome').classList.add('hidden');
    document.getElementById('monthly-activity').classList.remove('hidden');
    populateSubjectDropdown();
  }
  
  function populateSubjectDropdown() {
    const dropdown = document.getElementById('subject-dropdown');
    dropdown.innerHTML = '';
    const subjects = [...new Set(monthlyActivities.map(activity => activity.subject))];
    subjects.forEach(subject => {
      const option = document.createElement('option');
      option.textContent = subject;
      dropdown.appendChild(option);
    });
  }
  
  function showSubjectActivities() {
    const selectedSubject = document.getElementById('subject-dropdown').value;
    const activities = monthlyActivities.filter(activity => activity.subject === selectedSubject);
    const activityList = document.getElementById('activity-list');
    activityList.innerHTML = '';
    activities.forEach(activity => {
      const listItem = document.createElement('li');
      listItem.textContent = activity.activity;
      activityList.appendChild(listItem);
    });
  }
  
  function showRegisterForm() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
  }

  function showLoginForm() {
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}
  
  
  