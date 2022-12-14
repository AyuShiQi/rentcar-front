import Axios from 'axios'
import Qs from 'qs'

/**
 * 提交并验证登录信息
 * @param {*} userName 用户名
 * @param {*} password 密码
 * @returns 返回登录验证信息
 */
export const commitLog = (userName,password) => {
    return new Promise((resolve,reject)=>{
        const data = {
            userName,
            password    
        }

        const instance = Axios.create({
            baseURL: '',
            timeout: 5000
        });

        instance.post('/userLogin',
            Qs.stringify(data)
        ).then(val => {
            resolve(val.data);
        }).catch(err => {
            reject(err);
        })
    });
};

export const getCar = (config) => {
    return new Promise((resolve,reject)=>{
        const instance = Axios.create({
            baseURL: '',
            timeout: 5000
        });

        instance.get('/getCar',
            {
                params: config
            }
        ).then(val => resolve(val.data))
        .catch(err => reject(err));
    });
}

export const getTypeCar = (type) => {
    // 返回所有的typeCar，还有type的brands,models信息
    return new Promise((resolve,reject)=>{
        getCar({type}).then(val=>resolve(val)).catch(err=>reject(err));
    });
};


export const getTypeAndBrandCar = (type,brand) => {
    // 返回brand的Car
    return new Promise((resolve,reject)=>{
        getCar({type,brand}).then(val=>resolve(val)).catch(err=>reject(err));
    });
};

export const getTypeAndBrandAndModelCar = (type,brand,model) => {
    // 返回model的Car
    return new Promise((resolve,reject)=>{
        getCar({type,brand,model}).then(val=>resolve(val)).catch(err=>reject(err));
    });
}

export const getVehicleIdCar = (vehicleId) => {
    // 返回vehicleId的Car
    return new Promise((resolve,reject)=>{
        getCar({vehicleId}).then(val=>resolve(val)).catch(err=>reject(err));
    });
}

export const updateCar = (vehicleId,type,brand,model,perRent) => {
    const config = {vehicleId,type,brand,model,perRent};
    return new Promise((resolve,reject)=>{
        const instance = Axios.create({
            baseURL: '',
            timeout: 5000
        });

        instance.post('/updateCar',
            Qs.stringify(config)
        ).then(val => resolve(val))
        .catch(err => reject(err));
    });
}


export const addCar = (vehicleId,type,brand,model,perRent) => {
    const config = {
        vehicleId,
        type,
        brand,
        model,
        perRent
    }
    return new Promise((resolve,reject)=>{
        const instance = Axios.create({
            baseURL: '',
            timeout: 5000
        });

        instance.post('/addCar',
            Qs.stringify(config)
        ).then(val => resolve(val.data))
        .catch(err => reject(err));
    });
}

export const deleteCar = (vehicleId) => {
    return new Promise((resolve,reject)=>{
        const instance = Axios.create({
            baseURL: '',
            timeout: 5000
        });

        instance.get('/deleteCar',
            {
                params: {vehicleId}
            }
        ).then(val => resolve(val.data)
        ).catch(err => reject(err));
    });
}

export const rentCar = (userName,vehicleId,days) => {
    return new Promise((resolve,reject)=>{
        const instance = Axios.create({
            baseURL: '',
            timeout: 2000
        });

        instance.get("/rentCar",{
            params: {userName,vehicleId,days}
        }).then(val=>resolve(val.data))
        .catch(err=>reject(err));
    })
}

/**
 * 获取所有的该用户订单
 * @param {*} userName 用户名
 * @returns Promise 
 */
export const getOrder = (userName) => {
    return new Promise((resolve,reject)=>{
        const instance = Axios.create({
            baseURL: '',
            timeout: 2000
        });

        instance.get("/getOrder",{
            params: {userName}
        }).then(val=>{
            resolve(val.data)}
        )
        .catch(err=>reject(err));
    })
}

/**
 * 付费车
 * @param {*} userName 
 * @param {*} vehicleId 
 * @returns 
 */
export const payCar = (userName,vehicleId,rents) => {
    return new Promise((resolve,reject)=>{
        const instance = Axios.create({
            baseURL: '',
            timeout: 2000
        });

        instance.get("/payOrder",{
            params: {userName,vehicleId,rents}
        }).then(val=>resolve(val))
        .catch(err=>reject(err));
    })
}

export const getOrderInfos = () => {
    return new Promise((resolve,reject)=>{
        const instance = Axios.create({
            baseURL: '',
            timeout: 2000
        });

        instance.get("/getOrderInfos")
        .then(val=>resolve(val.data))
        .catch(err=>reject(err));
    })
}