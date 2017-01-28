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
            .success((result) => {
                resolve(result);
            })
            .error((error) => {
                reject(error);
            });
        });
    };

    let postNewTask = (newTask) =>{
        return $q( (resolve, reject) => {
            $http.post(`${API_URL}`, newTask)
                .success((result) => {
                    resolve(result); //
                })
                .error((error) => {
                    reject(error);
                });
        });
    };

    let getSingleTask = (userTaskId) => {
        return $q((resolve, reject) => {
            $http.get(`${API_URL}/${userTaskId}`)
            .success((result) => {
                resolve(result);
            })
            .error((error) => {
                reject(error);
            });
        });
    };

    let getTasksByStatus = (status) => {
        return $q((resolve, reject) => {
            $http.get(`${API_URL}/ByStatus/${status}`)
            .success((result) => {
                resolve(result);
            })
            .error((error) => {
                reject(error);
            });
        });
    };
    let editTask = (userTaskId, userTask) => {
        return $q((resolve, reject) => {
            $http.put(`${API_URL}/${userTaskId}`, JSON.stringify(userTask))
            .success((result) => {
                console.log(result)
                resolve(result);
            })
            .error((error) => {
                reject(error);
            });
        });
    };
    return { getTasks, deleteTask, postNewTask, getSingleTask, editTask, getTasksByStatus }
});