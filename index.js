// git init Usage: git init
// Add remote Usage: git remote add origin git@github.com:User/UserRepo.git.
// git add. Usage: git add [file] ...
// git config Usage: git config user.
// git commit. Usage: git commit -m “[ Type in the commit message]” ...
// git log. Usage: git log. ...
// git status Usage: git status
// git push. Usage: git push origin main.
// git pull. Usage: git pull origin main.
// git branch. Usage: git branch. ...
// git checkout. Usage: git checkout [branch name] ...

// for help visit this link http://guides.beanstalkapp.com/version-control/common-git-commands.html

// https://git-scm.com/download/win

// FORM VLAIDATION

function checkForLastName () {
  const lastNameEle = document.getElementById("lastNameField");
  if (lastNameEle.value.length === 0) {
    lastNameEle.focus();
    lastNameEle.style.backgroundColor = "yellow";
    const errorContainer = document.getElementById("showError");
    errorContainer.innerText = "Please Enter your user name";
    errorContainer.style.color = "red";
    errorContainer.style.display = "block";
    return false;
  }
}