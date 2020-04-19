function DataSource(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
}
//Object.prototype.constructor

DataSource.prototype.searchClub = function (keyword) {
    const filteredClubs = clubs.filter(function (club) {
    // console.log(club);
        return club.name.toUpperCase().includes(keyword.toUpperCase());
    });

    if (filteredClubs.length) {
        this.onSuccess(filteredClubs);
    } else {
        this.onFailed(`${keyword}  is not found`);
    }
};