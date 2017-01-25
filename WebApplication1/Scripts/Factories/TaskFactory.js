app.factory("TaskFactory", function ($q, $http, API_URL) {
    let getTasks = () => {
        return $q((resolve, reject) => {
            $http.get(`${API_URL}`)
            .success((ObjFromFirebase) => {
                resolve(ObjFromFirebase);
            })
            .error((error) => {
                reject(error);
            });
        })
    }

    let deleteTask = (userTaskId) => {
        return $q((resolve, reject) => {
            $http.delete(`${API_URL}/${userTaskId}`)
            .success(() => {
                resolve();
            });
        });
    };
    return {getTasks, deleteTask} 
});