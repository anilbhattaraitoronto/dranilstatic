function getCopyRightYear(id) {
    let copyRightYearContainer = document.getElementById(id)
    let year = new Date().getFullYear()
    copyRightYearContainer.innerHTML = year
}
getCopyRightYear('copy-right-year')